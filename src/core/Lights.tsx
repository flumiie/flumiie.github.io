import * as THREE from 'three';

function Lights() {
  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.9);
  const pointLight = new THREE.PointLight(0xFFFFFF, 0.7);

  pointLight.position.set(5, 5, 5);

  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 1024;
  pointLight.shadow.mapSize.height = 1024;

  return { ambientLight, pointLight };
}

export default Lights;