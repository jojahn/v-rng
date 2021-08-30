<template>
  <div class="cards">
    <InfoButton />
    <LoadingIndicator :isLoading="isLoading" />
    <canvas width="640" height="480" id="CardsCanvas"></canvas>
  </div>
</template>

<script>
import InfoButton from "@/components/globals/InfoButton";
import LoadingIndicator from "@/components/generic/LoadingIndicator";
import {
  usingQuadratic,
  animate as startAnimate,
  stopAnimation
} from "@/services/animations";
import { loadModel } from "@/services/loadModel";
import { createRaycaster } from "@/services/raycaster";
import * as THREE from "three";
import {
  AnimationClip,
  VectorKeyframeTrack,
  AnimationMixer,
  QuaternionKeyframeTrack
} from "three";
import { onBeforeUnmount } from "@vue/runtime-core";
import { deg2Rad } from "@/services/angles";

// Object names
const MODEL_PATH = "card";
const MESH_NAME = "PlayingCard";

// Animation names
const HOVER_CARD_ANIMATION = "HOVER_CARD_ANIMATION";
const REVERSE_HOVER_CARD_ANIMATION = "REVERSE_HOVER_CARD_ANIMATION";
const TURN_CARD_ANIMATION = "TURN_CARD_ANIMATION";
const REVERSE_TURN_CARD_ANIMATION = "REVERSE_TURN_CARD_ANIMATION";

export default {
  components: {
    LoadingIndicator,
    InfoButton
  },
  props: {
    flipTime: Number,
    numberOfCards: Number
  },
  data() {
    return {
      turned: false,
      isLoading: false,
      hovered: null,

      canvas: null,
      renderer: null,
      scene: null,
      camera: null,

      isRunning: false,

      model: null,

      render: null,

      cancel: null,

      raycaster: null,
      models: [],
      meshes: [],
      mixers: {},
      actions: [],

      mixer: null
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
      const { mixers } = this;
      return () => {
        console.log("click");
        const { hovered } = this;
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!hovered) {
          console.log("should play anim");
          const clip = AnimationClip.findByName(
            hovered,
            !this.turned ? TURN_CARD_ANIMATION : REVERSE_TURN_CARD_ANIMATION
          );
          console.log(clip);
          const action = mixers[hovered.uuid].clipAction(clip);
          if (action) {
            action.reset();
            action.setLoop(THREE.LoopOnce);
            action.clampWhenFinished = true;
            action.play();
            this.turned = !this.turned;
          }
        }
      };
    },
    getAnimations(mesh) {
      function hoverCard(mesh) {
        const positionKeyframe = new THREE.NumberKeyframeTrack(
          ".position[y]",
          [0, 0.5],
          [mesh.position.y, mesh.position.y + 0.1]
        );
        return new AnimationClip(HOVER_CARD_ANIMATION, -1, [positionKeyframe]);
      }
      function reverseHoverCard(mesh) {
        const returnPositionKeyframe = new THREE.NumberKeyframeTrack(
          ".position[y]",
          [0, 0.5],
          [mesh.position.y + 0.1, mesh.position.y]
        );
        return new AnimationClip(REVERSE_HOVER_CARD_ANIMATION, -1, [
          returnPositionKeyframe
        ]);
      }
      function turnCard(mesh) {
        const positionKeyframe = new VectorKeyframeTrack(
          ".position",
          [0, 0.5],
          [0, 0, 0, 0, 0.1, -0.1]
        );

        var yAxis = new THREE.Vector3(0, 1, 0);
        var qInitial = new THREE.Quaternion().setFromAxisAngle(yAxis, 0);
        var qFinal = new THREE.Quaternion().setFromAxisAngle(yAxis, Math.PI);
        var _rotationKeyframe = new THREE.QuaternionKeyframeTrack(
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
            qFinal.w
          ]
        );

        var rotationKeyframe = new THREE.NumberKeyframeTrack(
          ".rotation[y]",
          [0, 0.5],
          [0, Math.PI]
        );
        var rotationKeyframeZ = new THREE.NumberKeyframeTrack(
          ".rotation[z]",
          [0, 0.5],
          [mesh.rotation.z, 0]
        );
        var rotationKeyframeX = new THREE.NumberKeyframeTrack(
          ".rotation[x]",
          [0, 0.5],
          [mesh.rotation.x, 0]
        );

        return new AnimationClip(TURN_CARD_ANIMATION, -1, [
          rotationKeyframe,
          rotationKeyframeZ,
          rotationKeyframeX
        ]);
      }
      function reverseTurnCard(mesh) {
        const positionKeyframe = new VectorKeyframeTrack(
          ".position",
          [0, 0.5],
          // eslint-disable-next-line prettier/prettier
          [
            0, 0, -0.1,
            0, 0, 0
          ]
        );

        var yAxis = new THREE.Vector3(0, 1, 0);
        var qFinal = new THREE.Quaternion().setFromAxisAngle(yAxis, 0);
        var qTmp = new THREE.Quaternion().setFromAxisAngle(yAxis, 0);
        var qInitial = new THREE.Quaternion().setFromAxisAngle(yAxis, Math.PI);
        var rotationKeyframe = new THREE.NumberKeyframeTrack(
          ".rotation[y]",
          [0, 0.5],
          [0, -Math.PI]
        );
        var rotationKeyframeZ = new THREE.NumberKeyframeTrack(
          ".rotation[z]",
          [0, 0.5],
          [0, mesh.rotation.z]
        );
        var rotationKeyframeX = new THREE.NumberKeyframeTrack(
          ".rotation[x]",
          [0, 0.5],
          [0, mesh.rotation.x]
        );

        return new AnimationClip(REVERSE_TURN_CARD_ANIMATION, -1, [
          rotationKeyframe,
          rotationKeyframeZ,
          rotationKeyframeX
        ]);
      }
      function reverse(clip, name) {
        return new AnimationClip(
          name,
          -1,
          clip.tracks.map((t) => ({
            ...t,
            values: t.values.reverse()
          }))
        );
      }
      return [
        hoverCard(mesh),
        reverseHoverCard(mesh),
        turnCard(mesh),
        reverseTurnCard(mesh)
        // reverse(turnCard(), REVERSE_TURN_CARD_ANIMATION)
      ];
    },
    setupScene() {
      var canvas = document.getElementById("CardsCanvas");
      canvas.height = canvas.parentElement.clientHeight;
      canvas.width = canvas.parentElement.clientWidth;
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
      });
      // Scene and Camera
      const scene = new THREE.Scene();
      var width = canvas.width;
      var height = canvas.height;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = -1;
      camera.position.x = 0;
      camera.position.y = 0;
      camera.rotation.y = Math.PI;

      // Lighting
      var color = 0xffffff;
      var intensity = 1.5;
      var light = new THREE.DirectionalLight(color, intensity);
      light.position.z = -1;
      light.position.x = -1;
      light.castShadow = true;
      light.position.x += 2;
      scene.add(light);
      intensity = 0.1;
      var ambientLight = new THREE.AmbientLight(color, intensity);
      scene.add(ambientLight);

      this.models = [];
      this.mixers = [];
      this.isLoading = true;
      this.render = this.buildRenderFunction(renderer, camera, scene);
      loadModel(MODEL_PATH).then((res) => {
        this.isLoading = false;

        var loadedMesh = res;
        while (
          (!!loadedMesh.children && loadedMesh.children.length > 0) ||
          loadedMesh.name !== MESH_NAME
        ) {
          loadedMesh = loadedMesh.children[0];
        }
        const numberOfCards = this.$props.numberOfCards || 3;
        for (let i = 0; i < numberOfCards; i++) {
          const mesh = new THREE.Mesh(loadedMesh.geometry, loadedMesh.material);
          window.mesh = mesh;
          var scale = 0.05;
          mesh.scale.x = scale;
          mesh.scale.y = scale;
          mesh.scale.z = scale;

          /*mesh.quaternion.setFromAxisAngle(
            new THREE.Vector3(0, 0, 1),
            deg2Rad(10)
          );*/

          const percentage = i / numberOfCards;
          const angleRange = 120;
          const radius = 0.5;
          const alpha = deg2Rad(percentage * angleRange - angleRange / 2);
          const b = Math.sin(alpha) * radius;
          const gamma = deg2Rad((180 - alpha) / 2);
          const a = b / Math.tan(gamma);
          const depth = 0.01;
          mesh.position.x = -b * 2;
          mesh.position.y = -a * 100;
          mesh.position.z = 0.5 + depth * percentage;
          mesh.rotation.z = alpha;
          console.log(mesh.position.y, percentage, a);

          // Animations
          mesh.animations.push(...this.getAnimations(mesh));
          this.mixers[mesh.uuid] = new AnimationMixer(mesh);

          this.meshes.push(mesh);
          res.add(mesh);
        }
        res.remove(loadedMesh);
        scene.add(res);

        this.raycaster = createRaycaster(scene, camera, canvas, false);
        renderer.render(scene, camera);
        this.render = this.buildRenderFunction(renderer, camera, scene);
        window.requestAnimationFrame(this.render);
      });
    },
    buildRenderFunction(renderer, camera, scene) {
      let clip, action;
      const { mixers } = this;
      const clock = new THREE.Clock();
      return () => {
        const delta = clock.getDelta();
        if (this.mixer) {
          this.mixer.update(delta);
        }
        if (mixers) {
          Object.keys(mixers).forEach((key) => {
            mixers[key].update(delta);
          });
        }

        // Animations
        if (this.raycaster) {
          const intersects = this.raycaster.getIntersections();
          const canvas = document.getElementById("CardsCanvas");
          // Clear other animations
          if (intersects.length === 0) {
            canvas.style.cursor = "default";
          } else {
            canvas.style.cursor = "pointer";
          }
          if (!!this.hovered && intersects.length === 0) {
            console.log("leave");
            if (action) {
              action.stop();
            }
            clip = AnimationClip.findByName(
              this.hovered,
              REVERSE_HOVER_CARD_ANIMATION
            );
            action = this.mixers[this.hovered.uuid].clipAction(clip);
            action.reset();
            action.setLoop(THREE.LoopOnce);
            action.clampWhenFinished = true;
            action.play();
            this.hovered = null;
          }
          if (
            intersects.length > 0 &&
            (!this.hovered || this.hovered.uuid !== intersects[0].object.uuid)
          ) {
            console.log("hover");
            if (action) {
              action.stop();
            }
            if (this.hovered) {
              clip = AnimationClip.findByName(
                this.hovered,
                REVERSE_HOVER_CARD_ANIMATION
              );
              action = this.mixers[this.hovered.uuid].clipAction(clip);
              action.reset();
              action.setLoop(THREE.LoopOnce);
              action.clampWhenFinished = true;
              action.play();
            }
            const mesh = intersects[0].object;
            clip = AnimationClip.findByName(mesh, HOVER_CARD_ANIMATION);
            action = this.mixers[mesh.uuid].clipAction(clip);
            action.reset();
            action.setLoop(THREE.LoopOnce);
            action.clampWhenFinished = true;
            action.play();
            this.hovered = mesh;
          }
        }

        // camera.rotation.y += 0.01 * Math.random();
        // camera.position.z += 0.01 * Math.random();
        renderer.render(scene, camera);
        window.requestAnimationFrame(this.render);
      };
    }
  },
  mounted() {
    console.log("mounted");
    this.setupScene();
    const onClick = this.onCardClick();
    document.getElementById("CardsCanvas").addEventListener("click", onClick);
  }
};
</script>

<style scoped></style>
