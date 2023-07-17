import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CameraType, ObjectsType } from '../types';

function Tick(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: CameraType,
  shapes: ObjectsType,
  controls?: OrbitControls,
) {
  function loop() {
    requestAnimationFrame(loop);

    if (controls) {
      controls.update();
    }

    shapes.torus.rotation.x += 0.001;
    shapes.torus.rotation.y += 0.005;
    shapes.torus.rotation.z += 0.001;

    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }

    return null;
  }
  loop();
}

export default Tick;