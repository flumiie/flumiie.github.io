import { CameraType, ObjectsType } from "../types";

function AnimateOnScroll(camera: CameraType, meshes: ObjectsType) {
  const calc = document.body.getBoundingClientRect().top;

  meshes.moon.rotation.x += 0.025;
  meshes.moon.rotation.y += 0.0375;
  meshes.moon.rotation.z += 0.025;

  meshes.avatar.rotation.y += 0.01;
  meshes.avatar.rotation.z += 0.01;

  camera.position.z = calc * -0.01;
  camera.position.x = calc * -0.002;
  camera.rotation.y = calc * -0.0002;
}

export default AnimateOnScroll;