import { RefObject, Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, MeshProps, PerspectiveCameraProps, useFrame, useLoader } from '@react-three/fiber';
import { useControls } from 'leva';
// import { Camera, Controls, Lights, LoadingManager, Objects, Renderer, Textures, Tick } from './core';
// import { AddStars, AnimateOnScroll } from './functions';
import { Loader, OrbitControls, PerspectiveCamera } from '@react-three/drei';

import './assets/styles/loading.scss';
import './assets/styles/main.scss';

import backgroundTx from './assets/images/space.jpg';
import minecraftTx from './assets/textures/minecraft.png';

import vertex_Torus from './assets/shaders/Torus/vertex.glsl';
import fragment_Torus from './assets/shaders/Torus/fragment.glsl';

interface TorusProps extends MeshProps {
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

const Torus = (props: TorusProps) => {
  useFrame(({ clock }) => {
    if (props.useFrame) {
      props.useFrame(clock);
    }
  });

  return (
    <mesh ref={props.meshRef} {...props}>
      <torusGeometry args={[1.8, 1.2, 48, 64]} />
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

function App() {
  const cameraRef = useRef<PerspectiveCameraProps>(null);
  const firstTorusMeshRef = useRef<THREE.Mesh>(null);
  const torusShaderMatRef = useRef<THREE.ShaderMaterial>(null);
  const bouncingBallsMeshRef = useRef<THREE.Mesh>(null);
  const firstPortalMeshRef = useRef<THREE.Mesh>(null);

  const textures = {
    background: useLoader(THREE.TextureLoader, backgroundTx),
    minecraft: useLoader(THREE.TextureLoader, minecraftTx),
    portalTextureOne: useLoader(THREE.TextureLoader, minecraftTx),
  };



  const onScroll = () => {
    const calc = document.body.getBoundingClientRect().top;

    if (firstTorusMeshRef.current?.position) {
      firstTorusMeshRef.current.position.x = 4 * (calc * -0.00055);
      firstTorusMeshRef.current.position.y = 4 * (calc * -0.0005);
      firstTorusMeshRef.current.position.z = 2 * (calc * -0.0005);

      firstTorusMeshRef.current.rotation.x = (Math.PI * .5) - calc * Math.PI * 0.00005;
      firstTorusMeshRef.current.rotation.y = calc * Math.PI * 0.00015;
      // torusMeshRef.current.rotation.z = calc * 0;
    }

    if (firstPortalMeshRef.current) {
      firstPortalMeshRef.current.position.x = 4 * (calc * -0.00055);
      firstPortalMeshRef.current.position.y = -1 + 4 * (calc * -0.0005);
      firstPortalMeshRef.current.position.z = 2 * (calc * -0.0005);

      firstPortalMeshRef.current.rotation.y = -calc * 0.000425;
    }

    // if (cameraRef.current?.position) {
    //   cameraRef.current.position.x = calc * -0.0025;
    // }
  };
  document.body.onscroll = onScroll;

  return (
    <div id="canvas-ct">
      <Canvas
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          pixelRatio: window.devicePixelRatio,
          useLegacyLights: false,
          localClippingEnabled: true
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          aspectRatio: window.innerWidth / window.innerHeight
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            fov={75}
            aspect={window.innerWidth / window.innerHeight}
            near={0.2}
            far={600}
            position={[4, 4, 2]}
          />

          <Torus
            meshRef={firstTorusMeshRef}
            shaderMatRef={torusShaderMatRef}
            rotation={[Math.PI * .5, 0, 0]}
            shaderMaterial={{
              uniforms: {
                u_time: { value: 0 }
              },
              vertexShader: vertex_Torus,
              fragmentShader: fragment_Torus,
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

          <OrbitControls
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </div >
  );
}

function LevaDebugGUI() {
  return (
    <>
      {/* <Leva
        // theme={myTheme} // you can pass a custom theme (see the styling section)
        fill // default = false,  true makes the pane fill the parent dom node it's rendered in
        flat // default = false,  true removes border radius and shadow
        oneLineLabels // default = false, alternative layout for labels, with labels and fields on separate rows
        titleBar={{ title: "Camera" }} // default = false, hides the GUI header
        collapsed // default = false, when true the GUI is collpased
        hidden // default = false, when true the GUI is hidden
      /> */}
      <D_Camera_Controls />
    </>
  );
}

function D_Camera_Controls() {
  // const { camera } = leva.useControls({ camera: 10 });
  // return camera;

  const { name, aNumber } = useControls({ name: 'World', aNumber: 0 });

  return (
    <div id="leva">
      Hey {name}, hello! {aNumber}
    </div>
  );
}

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

export default App;
