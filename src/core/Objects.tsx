import * as THREE from 'three';
import { Textures } from ".";

function Objects() {
  const textures = Textures();

  const geometries = {
    torus: new THREE.TorusGeometry(10, 2.5, 16, 100),
    avatar: new THREE.PlaneGeometry(3, 3),
    moon: new THREE.SphereGeometry(3, 48, 48)
  };

  const materials = {
    torus: new THREE.MeshStandardMaterial({
      map: textures.minecraft
    }),
    avatar: new THREE.MeshBasicMaterial({
      map: textures.avatar,
      side: THREE.DoubleSide
    }),
    moon: new THREE.MeshStandardMaterial({
      map: textures.moon.map,
      normalMap: textures.moon.normal,
    })
  };

  const meshes = {
    torus: new THREE.Mesh(geometries.torus, materials.torus),
    avatar: new THREE.Mesh(geometries.avatar, materials.avatar),
    moon: new THREE.Mesh(geometries.moon, materials.moon)
  };
  meshes.moon.position.set(-10, 0, 30);
  return meshes;
}

export default Objects;