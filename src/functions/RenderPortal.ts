function RenderPortal(
  portalMesh: THREE.Mesh,
  otherPortalMesh: THREE.Mesh,
  thisPortalTexture: THREE.WebGLRenderTarget
) {
  // set the portal camera position to be reflected about the portal plane
  portalMesh.worldToLocal(reflectedPosition.copy(camera.position));
  reflectedPosition.x *= -1.0;
  reflectedPosition.z *= -1.0;
  otherPortalMesh.localToWorld(reflectedPosition);
  portalCamera.position.copy(reflectedPosition);

  // grab the corners of the other portal
  // - note: the portal is viewed backwards; flip the left/right coordinates
  otherPortalMesh.localToWorld(bottomLeftCorner.set(50.05, -50.05, 0.0));
  otherPortalMesh.localToWorld(bottomRightCorner.set(-50.05, -50.05, 0.0));
  otherPortalMesh.localToWorld(topLeftCorner.set(50.05, 50.05, 0.0));
  // set the projection matrix to encompass the portal's frame
  CameraUtils.frameCorners(
    portalCamera,
    bottomLeftCorner,
    bottomRightCorner,
    topLeftCorner,
    false
  );

  // render the portal
  thisPortalTexture.texture.colorSpace = renderer.outputColorSpace;
  renderer.setRenderTarget(thisPortalTexture);
  renderer.state.buffers.depth.setMask(true); // make sure the depth buffer is writable so it can be properly cleared, see #18897
  if (renderer.autoClear === false) renderer.clear();
  portalMesh.visible = false; // hide this portal from its own rendering
  renderer.render(scene, portalCamera);
  portalMesh.visible = true; // re-enable this portal's visibility for general rendering

  return null;
}

export default RenderPortal;