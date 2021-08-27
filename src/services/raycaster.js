import * as THREE from "three";

export function createRaycaster(scene, camera, canvas, debug = false) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const action = onMouseMove(mouse, canvas);
  document.addEventListener("mousemove", action, false);
  window.raycaster = raycaster;
  window.scene = scene;
  return {
    getIntersections: () => {
      raycaster.setFromCamera(mouse, camera);
      debug &&
        scene.add(
          new THREE.ArrowHelper(
            raycaster.ray.direction,
            raycaster.ray.origin,
            100,
            Math.random() * 0xffffff
          )
        );
      return raycaster
        .intersectObjects(scene.children, true)
        .filter(
          (hit) =>
            hit.object.type !== "ArrowHelper" &&
            !!hit.object.parent &&
            hit.object.parent.type !== "ArrowHelper"
        );
    },
    destory: () => window.removeEventListener("mousemove", action),
  };
}

function onMouseMove(mouse, canvas) {
  return (event) => {
    const adjustedX = event.clientX - canvas.offsetLeft;
    const adjustedY = event.clientY - canvas.offsetTop;
    const x = (adjustedX / canvas.width) * 2 - 1;
    const y = -(adjustedY / canvas.height) * 2 + 1;
    mouse.x = x;
    mouse.y = y;
  };
}
