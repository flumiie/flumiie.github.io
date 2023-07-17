import * as THREE from 'three';
import { CameraType } from '../types';

function Renderer(canvas: HTMLElement, scene: THREE.Scene, camera: CameraType) {
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);

  return renderer;
}

export default Renderer;