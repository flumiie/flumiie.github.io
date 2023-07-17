import * as THREE from 'three';

function AddStars() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
  const starMesh = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill(1).map(() => THREE.MathUtils.randFloatSpread(100));
  starMesh.position.set(x, y, z);

  return starMesh;
}

export default AddStars;