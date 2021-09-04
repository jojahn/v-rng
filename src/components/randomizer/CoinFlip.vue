<template>
  <div class="coin-flip">
    <LoadingIndicator :isLoading="isLoading" />
    <canvas width="640" height="480" id="CoinCanvas"></canvas>
  </div>
</template>

<script>
import LoadingIndicator from "@/components/generic/LoadingIndicator";
import {
  usingQuadratic,
  animate as startAnimate,
  stopAnimation
} from "@/services/animations";
import { loadModel } from "@/services/loadModel";
import * as THREE from "three";

export default {
  components: {
    LoadingIndicator
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
      isLoading: false
    };
  },
  methods: {
    stop() {
      this.isRunning = false;
      if (this.cancel) {
        this.cancel();
      }
    },
    start(
      starterSide = "face",
      flipTime = this.$props.flipTime || 5000,
      stepTime = 50
    ) {
      this.isRunning = true;

      var position = { x: 0, y: 0, z: 0 };
      var rotation = this.model.rotation;
      this.model.rotation.y += 0.005 * Math.random();

      function flip(render, model, onStop) {
        var percentage = 0.0001;
        var updatePercentage = () => (x) => {
          percentage = x;
        };
        var cancel = () => {
          stopAnimation(anim);
          isRunning = false;
          onStop();
        };
        var onEnd = () => {
          isRunning = false;
        };
        var anim = startAnimate(
          updatePercentage(),
          flipTime,
          stepTime,
          usingQuadratic,
          onEnd
        );
        var isRunning = true;

        var res = () => {
          if (isRunning) {
            rotation.x += 0.25 * Math.random();
            rotation.y += 0.0001 * (Math.random() - 0.5);
            position.z = percentage * -5;
          } else {
            cancel();
          }
          if (model) {
            model.rotation.x = rotation.x;
            model.rotation.y = rotation.y;
            model.rotation.z = rotation.z;

            model.position.x = position.x;
            model.position.y = position.y;
            model.position.z = position.z;
          }
          requestAnimationFrame(res);
          if (render) {
            render();
          }
        };
        return { animate: res, cancel };
      }
      var onStop = () => (this.isRunning = false);
      var { animate, cancel } = flip(this.render, this.model, onStop);
      this.cancel = cancel;
      animate();
    },
    setupScene() {
      var canvas = document.getElementById("CoinCanvas");
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
      // const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
      camera.position.z = -10;
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

      intensity = 10;
      var ambientLight = new THREE.AmbientLight(color, intensity);
      scene.add(ambientLight);

      /*var geometry = new THREE.PlaneGeometry( 1000, 1000, 1, 1 );
        var material = new THREE.MeshLambertMaterial( { color: 0x333333 } );
        var floor = new THREE.Mesh( geometry, material );
        floor.material.side = THREE.DoubleSide;
        floor.rotation.x = 1.570796;
        scene.add( floor ); */

      // Grid
      /*const helper = new THREE.GridHelper(1000, 40, 0x303030, 0x303030);
        helper.material.colorNode = new THREE.AttributeNode('color', 'vec3');
        helper.position.y = - 75;
        scene.add(helper);*/

      this.model = null;
      this.isLoading = true;
      loadModel("quarter").then((res) => {
        this.model = res;
        this.isLoading = false;

        var scale = 2;
        this.model.scale.x = scale;
        this.model.scale.y = scale;
        this.model.scale.z = scale;

        // model.position.x = 0;
        // model.position.y = 0;
        // model.position.z = 0;

        res.rotation.y = 1.57;

        scene.add(res);

        // function animate() {
        //     if (res) {
        //         // model.rotation.x += 0.001 * Math.random();
        //         // this.model.rotation.y += 0.005 * Math.random();
        //     }

        //     requestAnimationFrame( animate );
        //     renderer.render( scene, camera );
        // }
        // animate();
        renderer.render(scene, camera);
        this.render = this.buildRenderFunction(renderer, camera, scene);
      });
    },
    buildRenderFunction(renderer, camera, scene) {
      return () => renderer.render(scene, camera);
    }
  },
  mounted() {
    this.setupScene();
  }
};
</script>

<style scoped>
.coin-flip {
  margin-top: 60px;
}
</style>
