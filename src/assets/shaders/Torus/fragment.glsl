varying vec2 vUv;
uniform float u_time;
void main() {
  vec2 uv = vUv;
  float cb = floor((uv.x - uv.y + u_time) * 40.);
  gl_FragColor = vec4(mod(cb, 2.0),0.15,0.35,.75);
}