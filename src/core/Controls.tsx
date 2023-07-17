import { OrbitControls } from "@react-three/drei";
import { CameraType } from "../types";

function Controls(camera: CameraType) {
  return (
    <OrbitControls
      camera={camera}
      enableDamping={true}
      dampingFactor={0.05}
      onUpdate={self => self.update()}
    />
  );
}

export default Controls;