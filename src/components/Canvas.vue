<template>
  <div id="loader" class="visible"></div>
  <div id="canvas"></div>
</template>

<script>
import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const scene = new Three.Scene();
let camera = new Three.PerspectiveCamera();
let model = null;
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
    loadCanvas: { type: Boolean, required: true },
  },
  watch: {
    loadCanvas: {
      immediate: true,
      handler(val) {
        if (val == true) {
          this.init();
          this.animate();
        }
      },
    },
  },
  methods: {
    onWindowResize: function () {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      camera.position.set(0, 0, 16000 / canvas.clientWidth);
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    },
    init: function () {
      const canvas = document.getElementById("canvas");

      this.initScene();
      this.initCamera();
      this.initLights();
      this.initRenderer();
      this.initControls();
      this.addGLTFModel();

      canvas.appendChild(renderer.domElement);
      renderer.render(scene, camera);
    },
    initScene: function () {
      scene.fog = new Three.Fog(0xffffff, 10, 200);
    },
    initCamera: function () {
      camera = new Three.PerspectiveCamera(
        35,
        canvas.clientWidth / canvas.clientHeight,
        0.01,
        100
      );
      camera.position.set(0, 0, 16000 / canvas.clientWidth);
    },
    initLights: function () {
      const ambientLight = new Three.AmbientLight(0xffffff, 0.5);

      const light = new Three.DirectionalLight(0xffffff, 1, 100);
      light.position.set(0, 30, 0);
      light.castShadow = true;

      const pointLight = new Three.PointLight(0xffffff, 1, 55);
      pointLight.position.set(0, 5, 5);
      camera.add(pointLight);

      const hemiLight = new Three.HemisphereLight(0xffeeb1, 0x080820, 1);
      scene.add(ambientLight, hemiLight, light, camera);
    },
    initRenderer: function () {
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.toneMapping = Three.ReinhardToneMapping;
      renderer.toneMappingExposure = 4;
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
          model.scale.set(0.07, 0.07, 0.07);
          scene.add(model);
        },
        function (progress) {
          if (progress.loaded / progress.total == 1) {
            canvas.classList.toggle("visible")
            document.getElementById("loader").style.display="none";
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
        model.rotation.y += 0.008;
      }
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    },
  },
  mounted() {
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
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: clamp(300px, 80vw, 500px);
  background-color: transparent;
  cursor: move;
  border: 1px dashed grey;
}

#loader {
  position: relative;
  opacity: 0.75;
  top: 50%;
  left: 50%;
  width: calc(2 * var(--spacer));
  height: calc(2 * var(--spacer));
  transform: translate(-50%, -50%);
  background-image: url("/assets/exadrums_logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  animation: bounce calc(3 * var(--delay)) infinite ease-out;
}

@keyframes bounce {
  0% {transform: scale(1.35);}
  15% {transform: scale(1.55); opacity: 1;}
  100% {transform: scale(1.35);}
}

.visible {
  opacity: 1 !important;
  transition: opacity calc(2 * var(--delay)) ease-in;
}

@media only screen and (min-width: 100ch) {
  #canvas {
    max-width: 50vw;
  }
}

</style>