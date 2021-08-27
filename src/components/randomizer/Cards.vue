<template>
  <div class="cards">
    <LoadingIndicator :isLoading="isLoading" />
    <canvas width="640" height="480" id="CardsCanvas"></canvas>
  </div>
</template>

<script>
import LoadingIndicator from "@/components/generic/LoadingIndicator";
import {
  usingQuadratic,
  animate as startAnimate,
  stopAnimation,
} from "@/services/animations";
import { loadModel } from "@/services/loadModel";
import { createRaycaster } from "@/services/raycaster";
import * as THREE from "three";
import {
  AnimationClip,
  VectorKeyframeTrack,
  AnimationMixer,
  QuaternionKeyframeTrack,
} from "three";
import { onBeforeUnmount } from "@vue/runtime-core";

const HOVER_CARD_ANIMATION = "HOVER_CARD_ANIMATION";
const REVERSE_HOVER_CARD_ANIMATION = "REVERSE_HOVER_CARD_ANIMATION";
const TURN_CARD_ANIMATION = "TURN_CARD_ANIMATION";
const REVERSE_TURN_CARD_ANIMATION = "REVERSE_TURN_CARD_ANIMATION";

export default {
  components: {
    LoadingIndicator,
  },
  props: {
    flipTime: Number,
    numberOfCards: Number,
  },
  data() {
    return {
      canvas: null,
      renderer: null,
      scene: null,
      camera: null,

      isRunning: false,

      animations: [],
      model: null,

      render: null,

      cancel: null,

      isLoading: false,

      raycaster: null,
      models: [],
      mixers: {},
      actions: [],

      hovered: null,

      mixer: null,
    };
  },
  methods: {
    stop() {
      this.isRunning = false;
      if (this.cancel) {
        this.cancel();
      }
    },
    start() {
      throw "NotImplementedError";
    },
    onCardClick() {
      return () => {
        if (this.hovered) {
          const clip = AnimationClip.findByName(
            this.hovered,
            TURN_CARD_ANIMATION
          );
          const action = this.mixer.clipAction(clip);
          action.setLoop(THREE.LoopOnce);
          action.clampWhenFinished = true;
          action.play();
        }
      };
    },
    addHoverCardAnimation(obj) {
      const positionKeyframe = new VectorKeyframeTrack(
        ".position",
        [0, 0.5],
        [0, 0, 0, 0, 0, -0.1]
      );
      const clip = new AnimationClip(HOVER_CARD_ANIMATION, -1, [
        positionKeyframe,
      ]);
      obj.animations.push(clip);

      const returnPositionKeyframe = new VectorKeyframeTrack(
        ".position",
        [0, 0.5],
        [0, 0, -0.1, 0, 0, 0]
      );
      const returnclip = new AnimationClip(REVERSE_HOVER_CARD_ANIMATION, -1, [
        returnPositionKeyframe,
      ]);
      obj.animations.push(returnclip);
    },
    addTurnCardAnimation(obj) {
      const positionKeyframe = new VectorKeyframeTrack(
        ".position",
        [0, 0.5],
        [0, 0, 0, 0, 0.1, -0.1]
      );

      var yAxis = new THREE.Vector3(0, 1, 0);
      var qInitial = new THREE.Quaternion().setFromAxisAngle(yAxis, 0);
      var qFinal = new THREE.Quaternion().setFromAxisAngle(yAxis, Math.PI);
      var rotationKeyframe = new THREE.QuaternionKeyframeTrack(
        ".quaternion",
        [0, 0.5],
        [
          qInitial.x,
          qInitial.y,
          qInitial.z,
          qInitial.w,
          qFinal.x,
          qFinal.y,
          qFinal.z,
          qFinal.w,
        ]
      );

      const clip = new AnimationClip(TURN_CARD_ANIMATION, -1, [
        positionKeyframe,
        rotationKeyframe,
      ]);
      obj.animations.push(clip);
    },
    setupScene() {
      var canvas = document.getElementById("CardsCanvas");
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      // Scene and Camera
      const scene = new THREE.Scene();
      var width = canvas.width;
      var height = canvas.height;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      // const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
      camera.position.z = -1;
      camera.position.x = 0;
      camera.position.y = 0;
      camera.rotation.y = 3.141592653589793;
      // camera.rotation.x = 1.5707963267948966;

      // Lighting
      var color = 0xffffff;
      var intensity = 1;
      var light = new THREE.DirectionalLight(color, intensity);
      light.castShadow = true;
      light.position.x += 2;
      scene.add(light);
      intensity = 1;
      var ambientLight = new THREE.AmbientLight(color, intensity);
      scene.add(ambientLight);

      this.models = [];
      this.mixers = [];
      this.isLoading = true;
      this.render = this.buildRenderFunction(renderer, camera, scene);
      loadModel("blender/card").then((res) => {
        this.isLoading = false;

        var loadedMesh = res;
        do {
          loadedMesh = loadedMesh.children[0];
        } while (
          !!loadedMesh.children &&
          loadedMesh.children.length > 0 &&
          !loadedMesh.material
        );

        console.log(loadedMesh);
        for (let i = 0; i < (this.$props.numberOfCards || 3); i++) {
          this.models.push(res);
          const object = new THREE.Object3D();
          const mesh = new THREE.Mesh(loadedMesh.geometry, loadedMesh.material);
          // TODO: Add animations to object
          // mesh.position.copy(pos);
          var scale = 0.25;
          mesh.scale.x = scale;
          mesh.scale.y = scale;
          mesh.scale.z = scale;
          mesh.rotation.y = -Math.PI / 2;
          mesh.rotation.x = Math.PI;
          mesh.rotation.z = Math.PI / 2;
          this.mixers[mesh.uuid] = new AnimationMixer(mesh);
          res.add(mesh);
        }
        res.remove(loadedMesh);

        loadedMesh.position.x = -20;
        loadedMesh.scale.x = 0;

        scene.add(res);

        this.raycaster = createRaycaster(scene, camera, canvas, false);
        renderer.render(scene, camera);
        this.render = this.buildRenderFunction(renderer, camera, scene);
        window.requestAnimationFrame(this.render);
      });
    },
    buildRenderFunction(renderer, camera, scene) {
      let clip, action;
      let alpha = 0;
      const clock = new THREE.Clock();
      return () => {
        const delta = clock.getDelta();
        if (this.mixers) {
          this.mixers.forEach((m) => m.update(delta));
        }

        // Animations
        if (this.raycaster) {
          const intersects = this.raycaster.getIntersections();
          const canvas = document.getElementById("CardsCanvas");
          // Clear other animations
          if (intersects.length === 0) {
            canvas.style.cursor = "default";
            /* for ( let i = 0; i < prevIntersections.length; i ++ ) {
              const mixer = new AnimationMixer(prevIntersections[i]);
              const clip = AnimationClip.findByName(prevIntersections[i].animations, "turn-card-back");
              const action = mixer.clipAction(clip);
              action.setLoop(THREE.LoopOnce);
              action.play();
              this.actions.push(action);
              this.mixers.push(mixer);
            } */
          } else {
            canvas.style.cursor = "pointer";
          }
          if (!!this.hovered && intersects.length === 0) {
            action?.stop();
            clip = AnimationClip.findByName(
              this.hovered,
              REVERSE_HOVER_CARD_ANIMATION
            );
            action = this.mixers[this.hovered.uuid].clipAction(clip);
            action.setLoop(THREE.LoopOnce);
            action.clampWhenFinished = true;
            action.play();
            this.hovered = null;
          }
          if (!!intersects[0] && !!intersects[0].object) {
            let obj = intersects[0].object;
            do {
              if (
                !!obj.animations &&
                obj.animations.length > 0 &&
                (!this.hovered || obj.uuid !== this.hovered.uuid)
              ) {
                action?.stop();
                clip = AnimationClip.findByName(obj, HOVER_CARD_ANIMATION);
                action = this.mixers[this.hovered.uuid].clipAction(clip);
                action.setLoop(THREE.LoopOnce);
                action.clampWhenFinished = true;
                action.play();
                this.hovered = obj;
              }
              obj = obj.parent;
            } while (obj);
          }
        }

        alpha += 0.01;
        // camera.rotation.y += 0.01 * Math.random();
        // camera.position.z += 0.01 * Math.random();
        renderer.render(scene, camera);
        window.requestAnimationFrame(this.render);
      };
    },
  },
  mounted() {
    console.log("mounted");
    this.setupScene();
    const onClick = this.onCardClick();
    document.getElementById("CardsCanvas").addEventListener("click", onClick);
  },
};
</script>

<style scoped></style>