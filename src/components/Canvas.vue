<template>
  <div id="canvas"></div>
</template>

<script>
import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


const scene = new Three.Scene();
let camera = new Three.PerspectiveCamera()
let model = null
const renderer = new Three.WebGLRenderer({ antialias: true, alpha: true });

export default {
  name: "threejs-test",
  data() {
    return {
      vscene: null,
      vcamera: null,
      vrenderer: null,
      };
  },
  props: {
    modelPath: { type: String, required: true },
  },
  methods: {
    onWindowResize: function () {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    },
    init: function () {
      const canvas = document.getElementById("canvas");

      this.initScene();
      this.initLights();
      this.initCamera();
      this.initRenderer();
      this.initControls();
      this.addGLTFModel();

      canvas.appendChild(renderer.domElement);
      renderer.render(scene, camera);
    },
    initScene: function () {
      scene.fog = new Three.Fog(0xffffff, 10, 200);
    },
    initLights: function () {
      const ambientLight = new Three.AmbientLight(0xffffff);
      const pointLight = new Three.PointLight(0xffffff, 1, 100);
      pointLight.position.set(10, 10, 10);
      scene.add(ambientLight, pointLight);
    },
    initCamera: function () {
      camera = new Three.PerspectiveCamera(
        45,
        canvas.clientWidth / canvas.clientHeight,
        0.01,
        100
      );
      camera.position.set(0, 0, 20);
    },
    initRenderer: function () {
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    },
    initControls: function () {
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minPolarAngle = (Math.PI * 1) / 6;
      controls.maxPolarAngle = (Math.PI * 3) / 4;
      controls.smooth = true;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.enableDamping = true;
      controls.update();
    },
    addGLTFModel: function () {
      const loader = new GLTFLoader();
      loader.load(
        this.modelPath,
        (gltf) => {
          model = gltf.scene;
          model.position.set(0, 0, 0);
          model.scale.set(4, 4, 4);
          scene.add(model);
        },
        function (progress) {
          if (progress.loaded / progress.total == 1) {
            console.log("GLTF LOADED!");
          }
        },
        function (error) {
          console.error(error);
        }
      );
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      if (model) {
        model.rotation.y += 0.005;
      }
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
    window.addEventListener("resize", this.onWindowResize, false);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onWindowResize, false);
  },
};
</script>

<style scoped>
#canvas {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 250px;
  background-color: transparent;
  cursor: move;
}
</style>