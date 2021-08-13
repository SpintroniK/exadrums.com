<template>
  <Header :menus="menus" :about="about" />
  <main>
    <Hero id="top" :observer="observer" />
    <Content v-for="menu in menus" :key="menu.id" :content="menu" :observer="observer" />
  </main>
  <div class="conversion">
    <a href="https://configure.exadrums.com">
      <img alt="make your own" src="assets/conversion_image.svg" />
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

import {modals, getMenus} from './data.js'

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
    })
  },
  mounted() {
    const animElements = document.querySelectorAll('.lazy-image, .icon, hr, h1');
    animElements.forEach((element) => {
      this.observer.observe(element);
    });
  },
  methods: {
    onElementObserved (entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        this.observer.unobserve(target)
        
        if (target.tagName == "IMG" || target.tagName == "HR") {
          if (target.classList.contains("lazy-image")) {
            target.src = target.dataset.src
          }
          target.classList.add("slide-in")
        }

        if (target.tagName == "H1") {
          target.classList.add("h1-slide__in")
        }
      });
    }
  },
  destroy() {
    this.observer.disconnect();
  }
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
  src: local("ubuntu"),
   url(/fonts/Ubuntu-Light.ttf) format("truetype"),
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
  flex-direction: column-reverse;
  align-items: center;
  padding: 20vh 0vw;
  background-image: url('/assets/conversion_background.png');
  background-repeat: space;
}

.conversion img {
  width: 50vw;
  max-width: 45ch;
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
    max-width: 1280px
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

  .conversion .button {
    max-width: 25ch;
    padding: calc(var(--spacer) / 2) 0;
  }
}
</style>
