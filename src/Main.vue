<template>
  <Header
    :contents="contents"
    :about="about">
  </Header>
  <main>
    <Hero
      :observer="observer">
    </Hero>
    <Content
      v-for="content in contents"
      :key="content.id"
      :id="content.id"
      :title="content.title"
      :alignment="content.alignment"
      :icons="content.icons"
      :descriptions="content.descriptions"
      :image_path="content.image_path"
      :buttons="content.buttons"
      :observer="observer">
    </Content>
  </main>
  <About
    :observer="observer">
  </About>
  <Modal
    v-if="triggerModal"
    :title="modal.title"
    :image_path="modal.image_path"
    :texts="modal.texts"
    :isOpen="modal.isOpen"
    @close="modal.isOpen = false">
  </Modal>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Content from "./components/Content.vue";
import About from "./components/About.vue";
import Modal from "./components/Modal.vue";

export default {
  data() {
    return {
      about: { id: "about", title: "About", icon: "" },
      modal: { title: "Modal title", image_path: "https://www.pokepedia.fr/images/e/e7/Pikachu-RFVF.png", texts: ["Hello!", "exaDrums"] },
      contents: [
        {
          id: "software",
          title: "Software",
          icon: "",
          alignment: "right",
          icons: [
            {
              name: "Linux",
              path: "./assets/tux_logo.svg",
            },
            {
              name: "Debian",
              path: "./assets/debian_logo.svg",
            },
            {
              name: "C++",
              path: "./assets/cpp_logo.svg",
            },
          ],
          descriptions: [
            {
              id: 1,
              text: "eXaDrums software is fully open source and runs on PC as well as Raspberry Pi.",
            },
            {
              id: 2,
              text: "It also brings high sound quality and very low latency, that are comparable to those of professional drum modules.",
            },
          ],
          image_path: "./assets/software.gif",
          buttons: [
            {
              name: "More About the Software",
              icon: "",
              class: "btn-dark",
              link: "#",
            },
            {
              name: "More About Performance",
              icon: "",
              class: "btn-light",
              link: null,
              click: _ => { this.modal.isOpen = true }
            },
          ],
        },
        {
          id: "hardware",
          title: "Hardware",
          icon: "",
          alignment: "left",
          icons: [
            {
              name: "Raspberry pi",
              path: "./assets/raspberry_pi_logo.svg",
            },
            {
              name: "Osh Park",
              path: "./assets/oshpark_logo.svg"
            },
          ],
          descriptions: [
            {
              id: 1,
              text: "eXaDrums runs on multiple platforms, including Raspberry Pi.",
            },
            {
              id: 2,
              text: "The DIY sensor board allows up to 8 triggers, and a 16-trigger version is on its way.",
            },
            {
              id: 3,
              text: "You can use any Raspberry Pi-compatible soundcard or DAC to achieve the best sound quality you can get.",
            },
          ],
          image_path: "./assets/hardware.jpg",
          buttons: [
            {
              name: "More About the Hardware",
              icon: "",
              class: "btn-dark",
              link: "#",
            },
          ],
        },
        {
          id: "enclosure",
          title: "Enclosure",
          icon: "",
          alignment: "right",
          icons: [
            {
              name: "3d-printed",
              path: "./assets/3d_printed_logo.svg",
            },
            {
              name: "thingiverse",
              path: "./assets/thingiverse_logo.svg",
            },
          ],
          descriptions: [
            {
              id: 1,
              text: "You can also make a 3D-printed enclosure, which will make your drum module look great.",
            },
          ],
          image_path: "./assets/casing.png",
          buttons: [
            {
              name: "More About the Enclosure",
              icon: "",
              class: "btn-dark",
              link: "#",
            },
          ],
        },
      ],
      triggerModal: true,
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
}
</style>
