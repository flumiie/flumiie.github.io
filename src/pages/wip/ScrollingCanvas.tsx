import { RefObject, Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, MeshProps, OrthographicCameraProps, PerspectiveCameraProps, useFrame, useLoader } from '@react-three/fiber';
import { folder, useControls } from 'leva';
import { Loader, OrbitControls, PerspectiveCamera } from '@react-three/drei';

import backgroundTx from '../../assets/images/space.jpg';
import minecraftTx from '../../assets/textures/minecraft.png';

import Torus_Vertex from '../../assets/shaders/Torus/vertex.glsl';
import Torus_Fragment from '../../assets/shaders/Torus/fragment.glsl';
import { ScrollingCanvasContents } from '../../contents';
import { ContentUpdater, OnScroll, RenderPortal, aspectRatio, defaultToneMapping } from '../../functions';

interface CameraProps extends Partial<PerspectiveCameraProps & OrthographicCameraProps> {
  type: 'PerspectiveCamera' | 'OrthographicCamera';
  camRef?: RefObject<THREE.PerspectiveCamera | THREE.OrthographicCamera>;
}

interface TorusProps extends MeshProps {
  name: string;
  shaderMaterial: THREE.ShaderMaterialParameters;
  meshRef?: RefObject<THREE.Mesh>;
  shaderMatRef?: RefObject<THREE.ShaderMaterial>;
  useFrame?: (
    clock: THREE.Clock,
  ) => void
}

interface PortalProps extends MeshProps {
  meshRef?: RefObject<THREE.Mesh>;
  planeArgs?: [
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number
  ],
  texture?: Maybe<THREE.Texture>
  matTexture?: THREE.WebGLRenderTarget,
  textureOpts?: (texture: THREE.Texture) => void;
}

const Camera = (props: CameraProps) => {
  const p = props.position ? props.position as Array<number> : [0, 0, 0];
  const gui = useControls(props.type, {
    properties: folder({
      fov: 75,
      near: 0.1,
      far: 600,
    }),
    position: folder({
      pX: p[0],
      pY: p[1],
      pZ: p[2]
    }),
  });

  return (
    <PerspectiveCamera
      ref={props.camRef}
      makeDefault
      fov={gui.fov}
      aspect={aspectRatio}
      near={gui.near}
      far={gui.far}
      position={[gui.pX, gui.pY, gui.pZ]}
    />
  );
};

const Torus = (props: TorusProps) => {
  const p = props.position ? props.position as Array<number> : [0, 0, 0];
  const r = props.rotation ? props.rotation as Array<number> : [0, 0, 0];
  const gui = useControls(props.name, {
    properties: folder({
      radius: 1.8,
      tube: 1.2,
      radialSegments: 48,
      tubularSegments: 64,
    }),
    position: folder({
      pX: p[0],
      pY: p[1],
      pZ: p[2]
    }),
    rotation: folder({
      rX: r[0],
      rY: r[1],
      rZ: r[2]
    })
  });

  useFrame(({ clock }) => {
    if (props.useFrame) {
      props.useFrame(clock);
    }
  });

  return (
    <mesh
      ref={props.meshRef}
      position={[gui.pX, gui.pY, gui.pZ]}
      rotation={[gui.rX, gui.rY, gui.rZ]}
      {...props}
    >
      <torusGeometry args={[gui.radius, gui.tube, gui.radialSegments, gui.tubularSegments]} />
      <shaderMaterial
        ref={props.shaderMatRef}
        attach="material"
        uniforms={props.shaderMaterial.uniforms}
        vertexShader={props.shaderMaterial.vertexShader}
        fragmentShader={props.shaderMaterial.fragmentShader}
      />
    </mesh>
  );
};

const Portal = (props: PortalProps) => {
  // const corners = {
  //   bottomLeft: new THREE.Vector3(),
  //   bottomRight: new THREE.Vector3(),
  //   topLeft: new THREE.Vector3(),
  // };
  // const reflectedPosition = new THREE.Vector3();

  if (props.texture && props.textureOpts) {
    props.textureOpts(props.texture);
  }

  return (
    <mesh ref={props.meshRef} {...props}>
      <planeGeometry args={props.planeArgs} />
      <meshBasicMaterial map={props.texture} />
    </mesh>
  );
};

function ScrollingCanvas() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const firstTorusMeshRef = useRef<THREE.Mesh>(null);
  const torusShaderMatRef = useRef<THREE.ShaderMaterial>(null);
  const firstPortalMeshRef = useRef<THREE.Mesh>(null);
  const secondPortalMeshRef = useRef<THREE.Mesh>(null);

  const textures = {
    background: useLoader(THREE.TextureLoader, backgroundTx),
    minecraft: useLoader(THREE.TextureLoader, minecraftTx),
    portalTextureOne: useLoader(THREE.TextureLoader, minecraftTx),
  };

  useMemo(() => {
    if (firstPortalMeshRef.current && secondPortalMeshRef.current) {
      const newwh = new THREE.WebGLRenderTarget(256, 256);
      RenderPortal(
        firstPortalMeshRef.current,
        secondPortalMeshRef.current,
        newwh
      );
      RenderPortal(
        secondPortalMeshRef.current,
        firstPortalMeshRef.current,
        newwh
      );
    }
  }, [firstPortalMeshRef, secondPortalMeshRef]);

  return (
    <div id="canvas-ct">
      <Canvas
        gl={{
          toneMapping: defaultToneMapping,
          pixelRatio: window.devicePixelRatio,
          useLegacyLights: false,
          localClippingEnabled: true
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          aspectRatio,
        }}
      >
        <Suspense fallback={null}>
          <Camera
            type="PerspectiveCamera"
            camRef={cameraRef}
            position={[4, 4, 2]}
          />

          <Torus
            name="First Torus"
            meshRef={firstTorusMeshRef}
            shaderMatRef={torusShaderMatRef}
            position={[0, 0, 0]}
            rotation={[Math.PI * .5, 0, 0]}
            shaderMaterial={{
              uniforms: {
                u_time: { value: 0 }
              },
              vertexShader: Torus_Vertex,
              fragmentShader: Torus_Fragment,
            }}
            useFrame={(clock) => {
              if (torusShaderMatRef.current) {
                torusShaderMatRef.current.uniforms.u_time.value = clock.oldTime * 0.00005;
              }
            }}
          />

          <Portal
            meshRef={firstPortalMeshRef}
            position={[0, -1, 0]}
            rotation={[Math.PI * 1.5, 0, Math.PI / 0.42]}
            scale={[0.035, 0.035, 0.035]}
            planeArgs={[100.1, 100.1]}
            texture={textures.portalTextureOne}
            textureOpts={(T) => {
              T.generateMipmaps = false;
              T.magFilter = THREE.NearestFilter;
            }}
          />
          <Portal
            meshRef={secondPortalMeshRef}
            position={[0, -1, 0]}
            rotation={[Math.PI * 1.5, 0, Math.PI / 0.42]}
            scale={[0.035, 0.035, 0.035]}
            planeArgs={[100.1, 100.1]}
            texture={textures.portalTextureOne}
            textureOpts={(T) => {
              T.generateMipmaps = false;
              T.magFilter = THREE.NearestFilter;
            }}
          />

          <OrbitControls
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>

      <Loader />

      <ContentUpdater content={<ScrollingCanvasContents />} />

      <OnScroll updates={(calc) => {
        if (firstTorusMeshRef.current?.position) {
          firstTorusMeshRef.current.position.x = 4 * (calc * -0.00055);
          firstTorusMeshRef.current.position.y = 4 * (calc * -0.0005);
          firstTorusMeshRef.current.position.z = 2 * (calc * -0.0005);

          firstTorusMeshRef.current.rotation.x =
            Math.PI * 0.5 - calc * Math.PI * 0.00005;
          firstTorusMeshRef.current.rotation.y = calc * Math.PI * 0.00015;
          // torusMeshRef.current.rotation.z = calc * 0;
        }

        if (firstPortalMeshRef.current) {
          firstPortalMeshRef.current.position.x = 4 * (calc * -0.00055);
          firstPortalMeshRef.current.position.y = -1 + 4 * (calc * -0.0005);
          firstPortalMeshRef.current.position.z = 2 * (calc * -0.0005);

          firstPortalMeshRef.current.rotation.y = -calc * 0.000425;
        }

        if (cameraRef.current?.position) {
          cameraRef.current.position.x = 4 + calc * -0.0001;
          cameraRef.current.position.z = 2 + calc * 0.0001;
        }
      }} />
    </div >
  );
}

// function LevaDebugGUI() {
//   return (
//     <>
//       <Leva
//         // theme={myTheme} // you can pass a custom theme (see the styling section)
//         fill // default = false,  true makes the pane fill the parent dom node it's rendered in
//         flat // default = false,  true removes border radius and shadow
//         oneLineLabels // default = false, alternative layout for labels, with labels and fields on separate rows
//         titleBar={{ title: "Camera" }} // default = false, hides the GUI header
//         collapsed // default = false, when true the GUI is collpased
//         hidden // default = false, when true the GUI is hidden
//       />
//       <D_Camera_Controls />
//     </>
//   );
// }

// function D_Camera_Controls() {
// const { camera } = leva.useControls({ camera: 10 });
// return camera;

//   const { name, aNumber } = useControls({ name: 'World', aNumber: 0 });

//   return (
//     <div id="leva">
//       Hey {name}, hello! {aNumber}
//     </div>
//   );
// }

// function App() {
//   const [starsAmount] = useState(200);

//   const canvas: HTMLElement = document.getElementById('root') ?? document.body;

//   const scene = new THREE.Scene();
//   const controls = Controls(camera);
//   const loadingManager = LoadingManager(controls);
//   const textures = Textures(loadingManager);
//   const lights = Lights();
//   const meshes = Objects();
//   const renderer = Renderer(canvas, scene, camera);

//   controls.enabled = true;
//   scene.background = textures.background;
//   scene.add(camera, lights.ambientLight, lights.pointLight,
//     meshes.torus, meshes.avatar, meshes.moon);

//   Array(starsAmount).fill(1).forEach(() => {
//     const star = AddStars();
//     scene.add(star);
//   });

//   const aos = useCallback(() => {
//     AnimateOnScroll(camera, meshes);
//   }, [camera, meshes]);
//   document.body.onscroll = aos;

//   // const { d_Camera } = leva.useControls({
//   //   camera: {
//   //     min: -100,
//   //     max: 100,
//   //     step: 0.001
//   //   }
//   // });

//   <LevaDebugGUI />;

//   Tick(renderer, scene, camera, meshes, controls);
// }

// function GeneralHelpers() {
//   const gridHelper = new THREE.GridHelper(200, 50);
//   return { gridHelper };
// }

export default ScrollingCanvas;
