<template>
  <div class="dices">
    <canvas width="640" height="480" id="DicesCanvas"></canvas>
  </div>
</template>

<script>
import { loadModel } from "@/services/loadModel";
import * as THREE from "three";

export default {
  data() {
    return {
      canvas: null,
      renderer: null,
      scene: null,
      camera: null
    };
  },
  methods: {
    start() {}
  },
  mounted() {
    var canvas = document.getElementById("DicesCanvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    renderer;
    // Scene and Camera
    const scene = new THREE.Scene();
    var width = canvas.width;
    var height = canvas.height;
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    // const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
    camera.rotation.x = -0.7;
    // camera.rotation.y = 0.7;
    camera.position.z = 10;
    camera.position.y = 8;

    // Lighting
    var color = 0xffffff;
    var intensity = 0.75;
    var light = new THREE.DirectionalLight(color, intensity);
    light.castShadow = true;
    light.position.x += 2;
    scene.add(light);

    intensity = 0.5;
    var ambientLight = new THREE.AmbientLight(color, intensity);
    scene.add(ambientLight);

    // var geometry = new THREE.PlaneGeometry( 1000, 1000, 1, 1 );
    // var material = new THREE.MeshLambertMaterial( { color: 0x333333 } );
    // var floor = new THREE.Mesh( geometry, material );
    // floor.material.side = THREE.DoubleSide;
    // floor.rotation.x = 1.570796;
    // scene.add( floor );

    // Grid
    /*const helper = new THREE.GridHelper(1000, 40, 0x303030, 0x303030);
        helper.material.colorNode = new THREE.AttributeNode('color', 'vec3');
        helper.position.y = - 75;
        scene.add(helper);*/

    var model = null;
    loadModel("dice").then((res) => {
      model = res;
      // model.rotation.x = 0.78;
      // model.rotation.y = 0.78;
      var scale = 1;
      model.scale.x = scale;
      model.scale.y = scale;
      model.scale.z = scale;
      model.position.y = 1;
      scene.add(model);
    });

    function animate() {
      if (model) {
        // model.rotation.x += 0.001 * Math.random();
        model.rotation.y += 0.005 * Math.random();
      }

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }
};
</script>

<style scoped>
.dices {
  margin-top: 60px;
}
</style>
