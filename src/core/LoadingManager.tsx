import ReactDOMServer from 'react-dom/server';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { ScrollingCanvasContents } from '../contents';

function LoadingManager(controls?: OrbitControls) {
  const mainContent = document.querySelector('main');
  const loadingScreen = document.getElementById('loading-screen');

  const loadingManager = new THREE.LoadingManager(() => {
    if (loadingScreen && mainContent) {
      loadingScreen.classList.add('fade-out');

      if (!controls?.enabled && loadingScreen?.classList.contains('fade-out')) {
        const tester = ReactDOMServer.renderToString(<ScrollingCanvasContents />);
        mainContent.innerHTML = tester;

        if (mainContent.innerHTML.toString().length > 100) {
          mainContent.style.animation = 'fade-in 1.2s ease 0s 1';
        }
      } else {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'none';
      }

      // loadingScreen?.addEventListener('transitionend', (e) => {
      //   e.target.remove();
      // });
    }
  });

  return loadingManager;
}

export default LoadingManager;