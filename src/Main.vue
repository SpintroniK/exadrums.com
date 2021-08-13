<template>
  <Header :menus="menus" :about="about" />
  <main>
    <Hero id="top" :observer="observer" />
    <Content v-for="menu in menus" :key="menu.id" :content="menu" :observer="observer" />
  </main>
  <div class="conversion">
    <a href="https://configure.exadrums.com">
      <svg
        xmlns:svg="http://www.w3.org/2000/svg"
        viewBox="0 0 954.6672 429.7838">
        <path
          d="m 150.5,53.657547 c -8.087,0 -135.5899,73.613803 -139.6333,80.617303 -4.0435,7.0035 -4.0435,154.2306 0,161.2341 4.0434,7.0035 131.5463,80.6173 139.6333,80.6173 8.087,0 135.5893,-73.6138 139.6328,-80.6173 4.0435,-7.0036 4.0435,-154.2306 0,-161.2341 C 286.0893,127.27135 158.587,53.657547 150.5,53.657547 Z m 8.2935,117.771103 h 13.5594 l -29.9925,86.9254 h -13.7392 z m -35.8619,21.6416 3.5021,10.8655 -28.1972,10.9554 28.1972,10.9559 -3.5021,10.8655 -38.6136,-16.2538 v -11.1347 z m 55.1238,0 38.6137,16.2538 v 11.1347 l -38.6137,16.2538 -3.5021,-10.8655 28.1967,-10.9559 -28.1967,-10.9554 z"
        />
        <path
          d="m 477.3338,53.657297 c -8.087,0 -135.5899,73.613803 -139.6334,80.617303 -4.0434,7.0035 -4.0434,154.2311 0,161.2346 4.0435,7.0035 131.5464,80.6173 139.6334,80.6173 8.087,0 135.5893,-73.6138 139.6328,-80.6173 4.0435,-7.0035 4.0435,-154.2311 0,-161.2346 C 612.9231,127.2711 485.4208,53.657297 477.3338,53.657297 Z M 529.6763,167.1827 c 7.3776,0 13.3661,5.9885 13.3661,13.3661 0,7.3776 -5.9885,13.3661 -13.3661,13.3661 -4.939,0 -9.2458,-2.6905 -11.5595,-6.6782 h -26.7487 l -28.7471,29.9336 h -26.0723 c -2.3135,3.988 -6.6207,6.6782 -11.56,6.6782 -7.3776,0 -13.3625,-5.9885 -13.3625,-13.3661 0,-7.3775 5.9849,-13.363 13.3625,-13.363 4.9419,0 9.2504,2.6933 11.5631,6.6848 h 20.3719 l 28.7641,-29.9367 h 32.4254 c 2.3126,-3.991 6.6216,-6.6848 11.5631,-6.6848 z m 0.6827,8.0398 c -2.5855,-0.071 -4.8468,1.7299 -5.3558,4.2659 -0.5771,2.8763 1.2864,5.6755 4.1626,6.2533 2.8763,0.5792 5.6782,-1.2825 6.2575,-4.1589 0.5792,-2.8774 -1.2849,-5.6797 -4.1626,-6.2575 -0.2969,-0.06 -0.5988,-0.092 -0.9017,-0.1023 z m -105.7734,29.6189 v 5e-4 c -2.5843,-0.07 -4.8439,1.7302 -5.3527,4.2648 -0.5772,2.8752 1.2847,5.6745 4.1595,6.2539 2.8763,0.5793 5.6777,-1.2826 6.257,-4.1589 0.5792,-2.8775 -1.2849,-5.6797 -4.1626,-6.2575 -0.297,-0.06 -0.5983,-0.093 -0.9012,-0.1028 z m -0.3225,31.5479 c 4.8442,0 9.066,2.6403 11.3342,6.5521 h 83.4704 c 2.2678,-3.9124 6.4931,-6.5521 11.3378,-6.5521 7.234,0 13.1041,5.8702 13.1041,13.1041 0,7.2338 -5.8701,13.1072 -13.1041,13.1072 -4.8457,0 -9.0703,-2.6414 -11.3378,-6.5551 h -83.4673 c -2.2675,3.9139 -6.4914,6.5551 -11.3373,6.5551 -7.2338,0 -13.1046,-5.8734 -13.1046,-13.1072 0,-7.2339 5.8708,-13.1041 13.1046,-13.1041 z m 0.1049,7.7381 a 5.3128931,5.3128931 0 0 0 -5.3521,4.2622 5.3128931,5.3128931 0 0 0 4.1589,6.257 5.3128931,5.3128931 0 0 0 6.2575,-4.1625 5.3128931,5.3128931 0 0 0 -4.163,-6.2539 5.3128931,5.3128931 0 0 0 -0.9013,-0.1023 z m 105.9905,0 a 5.3128931,5.3128931 0 0 0 -5.3558,4.2622 5.3128931,5.3128931 0 0 0 4.1625,6.257 5.3128931,5.3128931 0 0 0 6.257,-4.1625 5.3128931,5.3128931 0 0 0 -4.1625,-6.2539 5.3128931,5.3128931 0 0 0 -0.9012,-0.1023 z"
        />
        <path
          d="m 804.1671,53.657297 c -8.087,0 -135.5894,73.613803 -139.6329,80.617303 -4.0435,7.0036 -4.0435,154.2311 0,161.2346 4.0435,7.0036 131.5459,80.6173 139.6329,80.6173 8.0869,0 135.5898,-73.6137 139.6333,-80.6173 4.0435,-7.0035 4.0435,-154.231 0,-161.2346 C 939.7569,127.2711 812.254,53.657297 804.1671,53.657297 Z M 749.8241,171.7359 h 108.6983 c 6.4627,0 11.8262,5.3748 11.8262,11.837 v 62.6489 c 0,6.4622 -5.3635,11.8256 -11.8262,11.8256 H 749.8241 c -6.4628,0 -11.8266,-5.3634 -11.8266,-11.8256 v -62.6489 c 0,-6.4622 5.3638,-11.837 11.8266,-11.837 z m 8.6843,11.7864 c -0.8885,6e-4 -1.4325,0.5503 -1.4325,1.4335 v 59.8852 c 0,0.8837 0.5479,1.4335 1.4325,1.4335 h 91.3453 c 0.8894,0 1.434,-0.5498 1.434,-1.4335 v -59.8852 c 0,-0.8837 -0.5494,-1.4335 -1.434,-1.4335 h -91.3438 z"
        />
      </svg>
      <p>MAKE <span>YOUR</span> OWN</p>
    </a>
  </div>
  <About :observer="observer" />
  <Modal v-for="modal in modals" :key="modal.title"
         :data="modal" :isOpen="modal.isOpen" @close="modal.isOpen = false" />
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Content from "./components/Content.vue";
import About from "./components/About.vue";
import Modal from "./components/Modal.vue";

import { modals, getMenus } from "./data.js";

export default {
  data() {
    return {
      about: { id: "about", title: "About", icon: "" },
      modals: modals,
      menus: getMenus(this),
      observer: null,
    };
  },
  components: {
    Header,
    Hero,
    Content,
    About,
    Modal,
  },
  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      threshold: 1.0,
    });
  },
  mounted() {
    const animElements = document.querySelectorAll(".lazy-image, .icon, hr, h1");
    animElements.forEach((element) => {
      this.observer.observe(element);
    });
  },
  methods: {
    onElementObserved(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        this.observer.unobserve(target);

        if (target.tagName == "IMG" || target.tagName == "HR") {
          if (target.classList.contains("lazy-image")) {
            target.src = target.dataset.src;
          }
          target.classList.add("slide-in");
        }

        if (target.tagName == "H1") {
          target.classList.add("h1-slide__in");
        }
      });
    },
  },
  destroy() {
    this.observer.disconnect();
  },
};
</script>

<style>
:root {
  --clr-primary: #0e232e;
  --clr-secondary: #25424f;
  --clr-ternary: #eeeeec;
  --clr-ascent: #d23232;
  --clr-background: white;
  --clr-semi-transparent: rgba(238, 239, 237, 0.66);
  --spacer: 1rem;
  --content-margin: 10%;
  --delay: 0.3s;
}

*,
* ::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "exadrums-icons";
  src: local("exadrums-icons"),
    url(/fonts/exadrums_icons.ttf) format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "ubuntu";
  src: local("ubuntu"), url(/fonts/Ubuntu-Light.ttf) format("truetype"),
    url(/fonts/Ubuntu-Regular.ttf) format("truetype"),
    url(/fonts/Ubuntu-Medium.ttf) format("truetype"),
    url(/fonts/Ubuntu-Bold.ttf) format("truetype");
  font-display: swap;
}

html,
body {
  font-family: "ubuntu";
  width: 100%;
  scroll-behavior: smooth;
  font-weight: 300;
}

::selection {
  background-color: var(--clr-ascent);
}

li {
  list-style-type: none;
}

a {
  display: inline-block;
  text-decoration: none;
}

section {
  padding-top: calc(3 * var(--spacer));
  min-height: calc(100vh - calc(3 * var(--spacer)));
}

.conversion {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20vh 0vw;
  background-image: url("/assets/conversion_background.png");
  background-repeat: space;
}

.conversion a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.conversion p {
  text-align: center;
  font-size: clamp(1rem, 6vw, 3rem);
  color: var(--clr-secondary);
}

.conversion span {
  color: var(--clr-ascent);
}

.conversion svg {
  width: 50vw;
  max-width: 45ch;
}

.conversion svg path {
  fill: var(--clr-secondary);
  transition: fill var(--delay) ease-in-out;
}

.conversion:hover svg path{
  fill:var(--clr-ascent);
  }

hr {
  background-color: var(--clr-ascent);
  border: 0px solid transparent;
  width: 80%;
  height: 0.25rem;
  margin: 0 auto 0 auto;
  transform: scaleX(0);
  transition: transform 1s ease;
  transition-duration: calc(1.5 * var(--delay));
}

h1 {
  margin-top: calc(1.5 * var(--spacer));
  margin-bottom: calc(1.5 * var(--spacer));
  margin-left: 10%;
  font-size: clamp(2em, 5vw, 3.5em);
  line-height: 1;
  font-weight: 400;
  transform: scaleY(1) translateY(2rem);
  transform-origin: bottom;
  opacity: 0;
}

b {
  position: relative;
}

b::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-ascent);
  border-radius: 3px;
  padding: 3px;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform var(--delay);
  z-index: -1;
}

b:hover::before {
  transform: scaleY(1);
  transform-origin: bottom;
}

.h1-slide__in {
  transform: scaleY(1.33) translateY(0);
  opacity: 1;
  transition:
    transform calc(2 * var(--delay)) ease,
    opacity calc(2 * var(--delay)) ease;
}

.text-container {
  padding: var(--spacer) 0;
}

.plain-text {
  margin: var(--spacer) var(--content-margin);
  text-align: justify;
  font-size: 1.125em;
}

.btn-container {
  width: 100%;
  text-align: center;
}

.button {
  position: relative;
  width: 90%;
  margin: calc(var(--spacer) / 4) auto;
  padding: calc(var(--spacer) / 2) 15%;
  text-align: center;
  font-size: 1.125em;
  border: none;
  border-radius: calc(var(--spacer) / 2);
  transition: background calc(var(--delay) / 2), color calc(var(--delay) / 2);
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}

.btn-dark {
  color: var(--clr-ternary);
  background-color: var(--clr-primary);
}

.btn-light {
  color: var(--clr-primary);
  background-color: var(--clr-ternary);
}

.button:hover {
  background-color: var(--clr-ascent);
  color: var(--clr-ternary);
}

.button::before {
  content: attr(data-btn-icon);
  font-family: "exadrums-icons";
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 7.5%;
}

.lazy-image {
  transform: perspective(200px) translateY(5%);
  opacity: 0;
  transform-origin: bottom;
  transition-duration: calc(5 * var(--delay));
  transition-delay: var(--delay);
}

.slide-in {
  transform: scale(1) translate(0, 0) rotate(0deg) !important;
  opacity: 1 !important;
  transition:
    transform initial ease-in-out,
    opacity initial linear;
}

@media only screen and (min-width: 85ch) {
  html {
    background-image: url('/assets/background.svg');
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
  }

  main {
    margin: auto;
    max-width: 1280px;
  }

  section {
    padding: 12% 0 12% 0;
    min-height: unset;
  }

  .button {
    width: 95%;
  }

  .btn-light {
    box-shadow: inset 0 0 1px 1px var(--clr-secondary);
  }

  .btn-light:hover {
    box-shadow: none;
  }

  .lazy-image {
    transform: perspective(200px) translateY(0) rotateX(15deg);
  }

  .plain-text {
    margin: calc(var(--spacer) / 2) 2%;
  }
}
</style>
