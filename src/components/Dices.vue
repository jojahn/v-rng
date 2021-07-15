<template>
    <div>
        <canvas width="640" height="480" id="DicesCanvas"></canvas>
    </div>
</template>

<script>
import { loadModel } from "@/services/loadModel";
import * as THREE from 'three.js';

export default {
    data() {
        return {
            canvas: null, renderer: null, scene: null, camera: null
        };
    },
    methods: {

    },
    mounted() {
        var canvas = document.getElementById("DicesCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer;
        // Scene and Camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Lighting
        const color = 0xFFFFFF;
        const intensity = 10;
        const light = new THREE.AmbientLight(color, intensity);
        scene.add(light);

        // Grid
        /*const helper = new THREE.GridHelper(1000, 40, 0x303030, 0x303030);
        helper.material.colorNode = new THREE.AttributeNode('color', 'vec3');
        helper.position.y = - 75;
        scene.add(helper);*/

        loadModel("dice");
        
        function animate() {
            /*if (models.length != 0) {
                models.forEach(m => {
                    m.rotation.x += 0.001 * Math.random();
                    m.rotation.y += 0.005 * Math.random();
                })
            }*/

            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        }
        animate();
    }
}
</script>

<style>

</style>