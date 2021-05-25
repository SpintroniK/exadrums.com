<template>
  <main>
    <Header></Header>
    <Hero></Hero>
    <Content></Content>
    <About></About>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Content from "./components/Content.vue";
import About from "./components/About.vue";

export default {
  data() {
    return {};
  },
  methods() {},
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
  --clr-semi-transparent: rgba(238, 239, 237, 0.8);
  --spacer: 1rem;
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
}

hr {
  border-top: 0.25rem solid var(--clr-ascent);
  width: 80%;
  margin: 0 auto 0 auto;
}

main {
  margin: 0 auto;
  width: 95%;
}

button {
  position: relative;
  width: 100%;
  font-size: 1.125em;
  border: none;
  margin: calc(var(--spacer) / 4) 0;
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
  background-color: var(--clr-secondary);
}

.btn-light {
  color: var(--clr-secondary);
  background-color: var(--clr-ternary);
}
</style>
