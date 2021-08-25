<template>
  <div class="cards">
    <LoadingIndicator :isLoading="isLoading" />
    <canvas width="640" height="480" id="CardsCanvas"></canvas>
  </div>
</template>

<script>
import LoadingIndicator from "@/components/LoadingIndicator";
import { usingQuadratic, animate as startAnimate, stopAnimation } from "@/services/animations";
import { loadModel } from "@/services/loadModel";
import { createRaycaster } from "@/services/raycaster";
import * as THREE from "three";
import { AnimationClip, VectorKeyframeTrack, AnimationMixer, QuaternionKeyframeTrack } from 'three';
import { onBeforeUnmount } from '@vue/runtime-core';

const HOVER_CARD_ANIMATION = "HOVER_CARD_ANIMATION";
const REVERSE_HOVER_CARD_ANIMATION = "REVERSE_HOVER_CARD_ANIMATION";
const TURN_CARD_ANIMATION = "TURN_CARD_ANIMATION";
const REVERSE_TURN_CARD_ANIMATION = "REVERSE_TURN_CARD_ANIMATION";

export default {
  components: {
    LoadingIndicator,
  },
  props: {
    flipTime: Number
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
      mixers: [],
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
        if (!!this.hovered) {
          const clip = AnimationClip.findByName(this.hovered, TURN_CARD_ANIMATION);
          const action = this.mixer.clipAction(clip);
          action.setLoop(THREE.LoopOnce);
          action.clampWhenFinished = true;
          action.play();
        }
      }
    },
    addHoverCardAnimation() {
      const positionKeyframe = new VectorKeyframeTrack('.position', [0, 0.5], [
        0, 0, 0,
        0, 0, -0.1,
      ]);
      const clip = new AnimationClip(HOVER_CARD_ANIMATION, -1, [positionKeyframe]);
      this.model.animations.push(clip);

      const returnPositionKeyframe = new VectorKeyframeTrack('.position', [0, 0.5], [
        0, 0, -0.1,
        0, 0, 0,
      ]);
      const returnclip = new AnimationClip(REVERSE_HOVER_CARD_ANIMATION, -1, [returnPositionKeyframe]);
      this.model.animations.push(returnclip);
    },
    addTurnCardAnimation() {
      const positionKeyframe = new VectorKeyframeTrack('.position', [0, 0.5], [
        0, 0, 0,
        0, 0.1, -0.1,
      ]);

      var yAxis = new THREE.Vector3( 0, 1, 0 );
      var qInitial = new THREE.Quaternion().setFromAxisAngle(yAxis, 0);
      var qFinal = new THREE.Quaternion().setFromAxisAngle(yAxis, Math.PI);
      var rotationKeyframe = new THREE.QuaternionKeyframeTrack(
        '.quaternion',
        [ 0, 0.5 ], [
          qInitial.x, qInitial.y, qInitial.z, qInitial.w,
          qFinal.x, qFinal.y, qFinal.z, qFinal.w,
        ]);

      const tracks = [positionKeyframe, rotationKeyframe];

      // use -1 to automatically calculate
      // the length from the array of tracks
      const length = -1;

      const clip = new AnimationClip(TURN_CARD_ANIMATION, length, tracks);
      this.model.animations.push(clip);
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

      var intensity = 1;
      var ambientLight = new THREE.AmbientLight(color, intensity);
      scene.add(ambientLight);

      this.model = null;
      this.isLoading = true;
      this.render = this.buildRenderFunction(renderer, camera, scene);
      loadModel("cards/4_of_clubs").then((res) => {
        this.model = res;
        this.isLoading = false;

        var scale = 0.01;
        this.model.scale.x = scale;
        this.model.scale.y = scale;
        this.model.scale.z = scale;
        console.log(this.model.rotation);

        // this.model.rotation.y = Math.PI;

        scene.add(res);
        this.raycaster = createRaycaster(scene, camera, canvas, false);
        renderer.render(scene, camera);
        this.render = this.buildRenderFunction(renderer, camera, scene);
        window.requestAnimationFrame(this.render);
      });
    },
    buildRenderFunction(renderer, camera, scene) {
      this.mixer = new AnimationMixer(this.model);
      const mixer = this.mixer;
      let clip, action;
      let alpha = 0;
      const clock = new THREE.Clock();
      if (!!this.model) {
        this.addHoverCardAnimation();
        this.addTurnCardAnimation();
      }
      return () => {
        const delta = clock.getDelta();
        mixer.update(delta);

        // Animations
        if (!!this.raycaster) {
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
            clip = AnimationClip.findByName(this.hovered, REVERSE_HOVER_CARD_ANIMATION);
            action = mixer.clipAction(clip);
            action.setLoop(THREE.LoopOnce);
            action.clampWhenFinished = true;
            action.play();
            this.hovered = null;
          }
          if (!!intersects[0] && !!intersects[0].object) {
            let obj = intersects[0].object;
            do {
              if (!!obj.animations && obj.animations.length > 0 && (!this.hovered || (obj.uuid !== this.hovered.uuid))) {
                action?.stop();
                clip = AnimationClip.findByName(obj, HOVER_CARD_ANIMATION);
                action = mixer.clipAction(clip);
                action.setLoop(THREE.LoopOnce);
                action.clampWhenFinished = true;
                action.play();
                this.hovered = obj;
              }
              obj = obj.parent;
            } while(!!obj);
          }
      }

        renderer.render(scene, camera);
        alpha += 0.0001;
        window.requestAnimationFrame(this.render);
      }
    },
  },
  mounted() {
    console.log("mounted");
    this.setupScene();
    const onClick = this.onCardClick();
    document.getElementById("CardsCanvas").addEventListener("click", onClick);
  }
};
</script>

<style scoped>
</style>