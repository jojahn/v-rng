import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export async function loadModel(model) {
  const loader = new GLTFLoader();
  return new Promise((resolve, reject) => {
    loader.load(
      `models/${model}/scene.gltf`,
      function (gltf) {
        var grp = gltf.scene;
        resolve(grp);
      },
      undefined,
      function (error) {
        console.error(error);
        reject(error);
      }
    );
  });
}
