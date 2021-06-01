<template>
  <header>
    <a href="#" @click="closeMenu"><img src="assets/eXa_logo_text.svg" alt="logo" class="logo" onclick="#" /></a>
    <input type="checkbox" class="nav-toggle" id="nav-toggle" ref="menu" />
    <nav>
      <ul>
        <li v-for="m in menu" :key="m.name" i>
          <a :href="`#${m.link}`" :data-menu-icon="m.icon" @click="closeMenu">
            {{ m.name }}
          </a>
        </li>
      </ul>
    </nav>
    <label for="nav-toggle" class="nav-toggle-label">
      <span></span>
    </label>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        menu: [
          { name: 'Casing', link: 'casing', icon: "#" },
          { name: 'Hardware', link: 'hardware', icon: "#" },
          { name: 'Sofware', link: 'software', icon: "</>" },
          { name: 'About', link: 'about', icon: "#" },
        ],
      };
    },
    methods: {
      closeMenu() {
        this.$refs.menu.checked = false
      }
    },
  };
</script>

<style>
  header {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    width: 100%;
    background-color: var(--clr-background);
    padding: calc(var(--spacer) / 2) 2.5% var(--spacer) 2.5%;
    z-index: 10;
  }

  header .logo {
    max-height: calc(1.5 * var(--spacer));
  }

  header label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 2rem;
    cursor: pointer;
  }

  header label span,
  header label span::before,
  header label span::after {
    --bar-spacer: 0.15rem;
    display: block;
    position: relative;
    width: 100%;
    height: var(--bar-spacer);
    background-color: transparent;
    transition: transform 0.2s;
    border-radius: var(--spacer);
  }

  header label span::before,
  header label span::after {
    content: "";
    position: absolute;
    background-color: var(--clr-primary);
  }

  header label span::before {
    top: calc(50% - calc(2 * var(--bar-spacer)));
  }

  header label span::after {
    bottom: calc(50% - calc(2 * var(--bar-spacer)));
  }

  .nav-toggle:checked ~ label span::before {
    transform: translateY(calc(1.5 * var(--bar-spacer))) rotate(45deg);
    background-color: var(--clr-ascent);
  }

  .nav-toggle:checked ~ label span::after {
    transform: translateY(calc(-1.5 * var(--bar-spacer))) rotate(-45deg);
    background-color: var(--clr-ascent);
  }

  .nav-toggle {
    display: none;
  }

  nav {
    position: fixed;
    top: calc(3.5 * var(--spacer));
    left: 0;
    width: 100%;
    height: 95vw;
    max-height: 60ch;
    background-color: var(--clr-semi-transparent);
    backdrop-filter: blur(3px);
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    visibility: hidden;
    z-index: 10;
    overflow: hidden;
    transition: opacity calc(var(--delay) / 2) ease calc(1.25 * var(--delay)),
      visibility calc(var(--delay) / 2) ease calc(1.25 * var(--delay)),
      transform calc(var(--delay) / 2) ease calc(1.25 * var(--delay));
  }

  .nav-toggle:checked ~ nav {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
    transition: opacity var(--delay) ease, transform var(--delay) ease;
  }

  nav ul {
    display: grid;
    margin: auto;
    width: 95%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacer);
    padding: calc(var(--spacer) / 2);
  }

  nav li {
    transform: scale(1, 0);
    transform-origin: bottom;
    transition: transform calc(var(--delay) / 2) ease calc(var(--delay) / 2);
  }

  .nav-toggle:checked ~ nav li {
    transform: scale(1, 1);
    transform-origin: bottom;
    transition: transform var(--delay) ease calc(1.25 * var(--delay));
  }

  nav a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 25%;
    width: 100%;
    height: 100%;
    font-size: 1.25em;
    font-weight: 600;
    background: linear-gradient(var(--clr-secondary) 25%, var(--clr-ascent) 75%);
    background-size: 100% 400%;
    background-position-y: 0%;
    color: var(--clr-background);
    border-radius: calc(var(--spacer) / 4);
    transition: background var(--delay) ease-out;
  }

  nav a::before {
    content: attr(data-menu-icon);
    position: absolute;
    top: 33%;
    left: 50%;
    font-size: 10vw;
    transform: translate(-50%, -50%);
  }

  nav a:hover {
    background-position-y: 100%;
    color: var(--clr-background);
  }
</style>
