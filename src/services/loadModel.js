import * as THREE from 'three.js';

export const loadModels = async (model) => {
    console.log(THREE.GLTFLoader);
    const loader = new THREE.GLTFLoader();
    return new Promise((resolve, reject) => {
        loader.load(`models/${model}/scene.gltf`, function (gltf) {
            var grp = gltf.scene;
            resolve(grp);
        }, undefined, function (error) {
            console.error(error);
            reject(error);
        });
    });
}