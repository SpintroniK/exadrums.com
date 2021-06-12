<template>
  <Header
    :contents="contents"
    :about="about">
  </Header>
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
  <About
    :observer="observer">
  </About>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Content from "./components/Content.vue";
import About from "./components/About.vue";

export default {
  data() {
    return {
      about: { id: "about", title: "About", icon: "#" },
      contents: [
        {
          id: "software",
          title: "Software",
          icon: "</>",
          alignment: "right",
          icons: [
            {
              name: "Linux",
              path: "./assets/tux.png",
            },
            {
              name: "Debian",
              path: "./assets/debian.png",
            },
            {
              name: "C++",
              path: "./assets/cpp.png",
            },
          ],
          descriptions: [
            {
              id: 1,
              text: "Software, lorem toto ipsum tutu dolor tata. Lorem toto ipsum tutu dolor tata.",
            },
            {
              id: 2,
              text: "Software, titi lorem toto ipsum tutu dolor tata. Titi lorem toto ipsum tutu dolor tata.",
            },
          ],
          image_path: "./assets/software.png",
          buttons: [
            {
              name: "Toto",
              icon: "⎔",
              class: "btn-dark",
              link: "#",
            },
            {
              name: "Titi",
              icon: "⎔",
              class: "btn-light",
              link: "#",
            },
          ],
        },
        {
          id: "hardware",
          title: "Hardware",
          icon: "#",
          alignment: "left",
          icons: [
            {
              name: "Raspberry pi",
              path: "./assets/raspberry_pi.png",
            },
          ],
          descriptions: [
            {
              id: 1,
              text: "Hardware, lorem toto ipsum tutu dolor tata. Lorem toto ipsum tutu dolor tata.",
            },
            {
              id: 2,
              text: "Hardware, titi lorem toto ipsum tutu dolor tata. Titi lorem toto ipsum tutu dolor tata.",
            },
          ],
          image_path: "./assets/hardware.jpg",
          buttons: [
            {
              name: "Toto",
              icon: "⎔",
              class: "btn-dark",
              link: "#",
            },
          ],
        },
        {
          id: "enclosure",
          title: "Enclosure",
          icon: "#",
          alignment: "right",
          icons: [
            {
              name: "3d-printed",
              path: "./assets/3d_printed.png",
            },
            {
              name: "thingiverse",
              path: "./assets/thingiverse.png",
            },
          ],
          descriptions: [
            {
              id: 1,
              text: "Casing, lorem toto ipsum tutu dolor tata. Titi lorem toto ipsum tutu dolor tata.",
            },
            {
              id: 2,
              text: "Casing, titi lorem toto ipsum tutu dolor tata. Titi lorem toto ipsum tutu dolor tata.",
            },
          ],
          image_path: "./assets/casing.png",
          buttons: [
            {
              name: "Toto",
              icon: "⎔",
              class: "btn-dark",
              link: "#",
            },
          ],
        },
      ],
      observer: null,
    };
  },
  components: {
    Header,
    Hero,
    Content,
    About,
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
        
        if (target.tagName == "IMG") {
          if (target.classList.contains("lazy-image")) {
            target.src = target.dataset.src
          }
          target.classList.add("slide-in")
        }

        if (target.tagName == "HR") {
          target.classList.add("slide-in")
        }

        if (target.tagName == "H1") {
          target.classList.add("h1-slide__in")
        }
        console.log(`Target type: ${ target.tagName }, intersect: ${ isIntersecting }`);
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
  --clr-ascent: #ef2929;
  --clr-background: white;
  --clr-semi-transparent: rgba(238, 239, 237, 0.66);
  --spacer: 1rem;
  --content-margin: 2.5%;
  --delay: 0.3s;
}

*,
* ::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  scroll-behavior: smooth;
  font-weight: 300;
}

.lazy-image {
  transform: translateY(5%);
  opacity: 0;
  transform-origin: bottom;
  transition-duration: calc(5 * var(--delay));
  transition-delay: var(--delay);
}

.slide-in {
  transform: scale(1) translate(0, 0) !important;
  opacity: 1 !important;
  transition:
    transform initial ease-in-out,
    opacity initial linear;
}

li {
  list-style-type: none;
}

a {
  display: inline-block;
  text-decoration: none;
}

section {
  padding-top: calc(3.5 * var(--spacer));
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
}

.btn-container {
  width: 100%;
  text-align: center;
}

.button {
  position: relative;
  width: 90%;
  margin: calc(var(--spacer) / 4) auto;
  padding: calc(var(--spacer) / 2);
  text-align: center;
  font-size: 1.125em;
  border: none;
  border-radius: calc(var(--spacer) / 2);
  transition: background calc(var(--delay) / 2), color calc(var(--delay) / 2);
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}

.button:hover {
  background-color: var(--clr-ascent);
  color: var(--clr-ternary);
}

.button::before {
  content: attr(data-btn-icon);
  position: absolute;
  left: calc(3 * var(--spacer));
}

.btn-dark {
  color: var(--clr-ternary);
  background-color: var(--clr-primary);
}

.btn-light {
  color: var(--clr-primary);
  background-color: var(--clr-ternary);
}

@media only screen and (min-width: 80ch) {
  body {
    max-width: 1024px;
    margin: auto;
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle at 50% 123%,
      var(--clr-secondary) 33%,
      transparent 33.03%,
      transparent 100%
    ),
    radial-gradient(
      circle at top left,
      var(--clr-secondary) 25%,
      var(--clr-ternary) 25.03%,
      var(--clr-ternary) 50%,
      var(--clr-background) 50.03%,
      var(--clr-background) 100%
    );
    background-position: top left;
    background-repeat: no-repeat;
  }

  .btn-light {
    box-shadow: inset 0 0 1px 1px var(--clr-secondary);
  }

  .btn-light:hover {
    box-shadow: none;
  }
}
</style>
