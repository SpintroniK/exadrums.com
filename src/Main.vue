<template>
  <Header></Header>
  <Hero></Hero>
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
  ></Content>
  <About></About>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Content from "./components/Content.vue";
import About from "./components/About.vue";

export default {
  data() {
    return {
      contents: [
        {
          id: "casing",
          title: "Casing",
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
              text:
                "Casing, lorem toto ipsum tutu dolor tata. Titi lorem toto ipsum tutu dolor tata.",
            },
            {
              id: 2,
              text:
                "Casing, titi lorem toto ipsum tutu dolor tata. Titi lorem toto ipsum tutu dolor tata.",
            },
          ],
          image_path: "./assets/casing.png",
          buttons: [
            {
              name: "Toto",
              icon: "⎔",
              class: "btn-dark",
            },
          ],
        },
        {
          id: "hardware",
          title: "Hardware",
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
              text:
                "Hardware, lorem toto ipsum tutu dolor tata. Lorem toto ipsum tutu dolor tata.",
            },
            {
              id: 2,
              text:
                "Hardware, titi lorem toto ipsum tutu dolor tata. Titi lorem toto ipsum tutu dolor tata.",
            },
          ],
          image_path: "./assets/hardware.jpg",
          buttons: [
            {
              name: "Toto",
              icon: "⎔",
              class: "btn-dark",
            },
          ],
        },
        {
          id: "software",
          title: "Software",
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
              text:
                "Software, lorem toto ipsum tutu dolor tata. Lorem toto ipsum tutu dolor tata.",
            },
            {
              id: 2,
              text:
                "Software, titi lorem toto ipsum tutu dolor tata. Titi lorem toto ipsum tutu dolor tata.",
            },
          ],
          image_path: "./assets/software.png",
          buttons: [
            {
              name: "Toto",
              icon: "⎔",
              class: "btn-dark",
            },
          ],
        },
      ],
    };
  },
  components: {
    Header,
    Hero,
    Content,
    About,
  },
};
</script>

<style>
:root {
  --clr-primary: #0e232e;
  --clr-secondary: #364e59;
  --clr-ternary: #eeefed;
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
  height: 100%;
  scroll-behavior: smooth;
  font-weight: 300;
}

section {
  padding-top: calc(3.5 * var(--spacer));
  padding-bottom: var(--spacer);
}

hr {
  background-color: var(--clr-ascent);
  width: 80%;
  height: 0.25rem;
  margin: 0 auto 0 auto;
}

h1 {
  margin-top: calc(1.5 * var(--spacer));
  margin-left: 10%;
  font-size: 2em;
  margin-bottom: var(--spacer);
  line-height: 1;
  font-weight: 400;
}

.text-container {
  padding: var(--spacer) 0;
}

.plain-text {
  margin: var(--spacer) var(--content-margin);
}

button {
  position: relative;
  width: 90%;
  font-size: 1.125em;
  border: none;
  margin: calc(var(--spacer) / 4) auto;
  padding: calc(var(--spacer) / 2);
  border-radius: calc(var(--spacer) / 2);
  transition: background calc(var(--delay) / 2), color calc(var(--delay) / 2);
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
}

button:hover {
  background-color: var(--clr-ascent);
  color: var(--clr-ternary);
}

button::before {
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
</style>
