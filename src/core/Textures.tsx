import * as THREE from 'three';
import backgroundTx from '../assets/images/space.jpg';
import meTx from '../assets/images/av.jpeg';
import moonTx from '../assets/textures/moon/moon.jpg';
import moonNormalsTx from '../assets/textures/moon/normal.jpg';
import minecraftTx from '../assets/textures/minecraft.png';

function Textures(loadingManager?: THREE.LoadingManager) {
  const background = new THREE.TextureLoader(loadingManager).load(backgroundTx);
  const avatar = new THREE.TextureLoader(loadingManager).load(meTx);

  const moon = {
    map: new THREE.TextureLoader(loadingManager).load(moonTx),
    normal: new THREE.TextureLoader(loadingManager).load(moonNormalsTx)
  };

  const minecraft = new THREE.TextureLoader(loadingManager).load(minecraftTx);
  minecraft.magFilter = THREE.NearestFilter;
  minecraft.generateMipmaps = false;

  return { background, avatar, moon, minecraft };
}

export default Textures;