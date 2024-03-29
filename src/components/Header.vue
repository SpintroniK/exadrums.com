<template>
  <header>
    <a @click="closeMenu" href="#top" class="logo">
      <img width="275" height="38" src="assets/eXa_logo_text.svg" alt="logo" />
    </a>
    <input type="checkbox" class="nav-toggle" id="nav-toggle" ref="menu" />
    <nav>
      <ul>
        <li v-for="menu in menuItems" :key="menu.id">
          <a :href="`#${menu.id}`" :data-menu-icon="menu.icon" @click="closeMenu">
            {{ menu.title }}
          </a>
        </li>
      </ul>
    </nav>
    <label for="nav-toggle">
      <span></span>
    </label>
  </header>
</template>

<script>
  export default {
    props: {
      menus: { type: Array, required: true },
      about: { type: Object, required: true },
    },
    methods: {
      closeMenu() {
        this.$refs.menu.checked = false
      },
    },
    computed: {
      newContents: function () {
        return [...this.menus]
      },
      menuItems: function () {
        this.newContents.push(this.about)
        return this.newContents
      },
    },
  };
</script>

<style>
  header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(5px);
    padding: calc(var(--spacer) / 2);
    z-index: 100;
  }

  header .logo > img {
    width: 20ch;
    height: auto;
    cursor: pointer;
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
    top: calc(3 * var(--spacer));
    left: 0;
    width: 100%;
    height: 95vw;
    max-height: 60ch;
    background-color: var(--clr-semi-transparent);
    backdrop-filter: blur(3px);
    transform-origin: top;
    opacity: 0;
    visibility: hidden;
    transform: scaleY(0);
    z-index: 10;
    overflow: hidden;
  }

  .nav-toggle:checked ~ nav {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
    transition: opacity var(--delay) ease, transform var(--delay) ease;
  }

  .nav-toggle:not(:checked) ~ nav {
    animation: closeMenu var(--delay) ease calc(1.25 * var(--delay)) backwards;
  }

  @keyframes closeMenu {
    from {
      opacity: 1;
      visibility: visible;
      transform: scaleY(1);
    }
    to {
      opacity: 0;
      visibility: hidden;
      transform: scaleY(0);
    }
  }

  nav ul {
    display: grid;
    margin: auto;
    width: 95%;
    max-width: 1024px;
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
    font-family: "exadrums-icons";
    font-weight: 200;
    top: 33%;
    left: 50%;
    font-size: 10vw;
    transform: translate(-50%, -50%);
  }

  nav a:hover {
    background-position-y: 100%;
    color: var(--clr-background);
  }

  @media only screen and (min-width: 85ch) {
    header {
      display: grid;
      grid-template-areas: ". logo nav .";
      grid-template-columns: 1fr minmax(min-content, 700px) minmax(min-content, 580px) 1fr;
    }

    header label {
      display: none;
    }

    .logo {
      grid-area: logo;
    }

    nav,
    nav ul,
    nav li,
    nav a,
    nav a:hover,
    nav a::before,
    nav a:hover::before {
      all: unset;
    }

    nav {
      grid-area: nav;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    nav ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    nav li {
      position: relative;
      height: 100%;
      cursor: pointer;
    }

    nav li:hover {
      color: var(--clr-ascent);
    }

    nav a {
      font-weight: 400;
      color: currentColor;
    }

    nav a:hover {
      color: currentColor;
    }
  }
</style>
