<template>
  <main>
    <header>
      <img src="assets/eXa_logo_text.svg" alt="logo" class="logo" />
      <input type="checkbox" class="nav-toggle" id="nav-toggle" />
      <nav>
        <ul>
          <li><a href="#casing" data-menu-icon="#">Casing</a></li>
          <li><a href="#hardware" data-menu-icon="#">Hardware</a></li>
          <li><a href="#software" data-menu-icon="#">Software</a></li>
          <li><a href="#about" data-menu-icon="#">About</a></li>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </header>

    <section class="hero-banner">
      <div class="hero-animation-container">
        <img src="assets/hero_img.jpg" alt="" />
      </div>
      <hr />
      <h1>A cheap alternative to professionnal drum module</h1>
      <div class="text-container">
        <p>
          EXADRUMS is a fully featured e-drum module with professionnal
          performances that you can build yourself for a low price tag.
        </p>
        <p>
          With a 7 inch touch screen it bring a smealess experience that enable
          your to focus on your music.
        </p>
      </div>
      <button data-btn-icon="#" class="btn-dark">Build your own</button>
      <button data-btn-icon="#" class="btn-light">Documentation</button>
    </section>

    <section class="content">
      <h1>Title</h1>
      <img src="" alt="" />
      <hr />
      <div class="icons-container">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div class="text-container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum
          iusto vitae ducimus vel temporibus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, iste!
        </p>
      </div>
      <button data-btn-icon="#" class="btn-dark">Toto</button>
    </section>

    <section class="about">
      <h1>About</h1>
      <hr />

      <div class="testimonial-container">
        <div>
          <img src="" alt="" />
          <p>Name</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            magni minima, praesentium nostrum provident culpa aperiam.
          </p>
        </div>

        <div>
          <img src="" alt="" />
          <p>Name</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            magni minima, praesentium nostrum provident culpa aperiam.
          </p>
        </div>

        <div>
          <img src="" alt="" />
          <p>Name</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            magni minima, praesentium nostrum provident culpa aperiam.
          </p>
        </div>
      </div>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam nemo
        temporibus id tempore neque officia consequatur eius accusantium quidem
        ipsum?
      </p>

      <div class="contect-links-container">
        <p class="e-mail">exadrums@contact.com</p>
        <div class="external-links-container">
          <a href="#"><img src="" alt="github" /></a>
          <a href="#"><img src="" alt="hackaday" /></a>
          <a href="#"><img src="" alt="youtube" /></a>
        </div>
      </div>

      <p class="signature">by Jérémy Oden</p>
    </section>
  </main>
</template>

<style>
:root {
  --clr-primary: #0e232e;
  --clr-secondary: #364e59;
  --clr-ternary: #eeefed;
  --clr-ascent: #ef2929;
  --clr-background: white;
  --spacer: 1rem;
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

main {
  margin: 0 auto;
  width: 95%;
}

header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 95%;
  background-color: var(--clr-background);
  padding: calc(var(--spacer) / 2) 0;
  height: calc(3 * var(--spacer));
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
  --delay: 0.3s;
  position: fixed;
  top: calc(3 * var(--spacer));
  left: 0;
  width: 100%;
  padding: calc(var(--spacer) / 2);
  background-color: var(--clr-semi-transparent);
  backdrop-filter: blur(3px);
  opacity: 0;
  visibility: hidden;
  transition: opacity calc(var(--delay) / 2) ease calc(1.25 * var(--delay)),
    visibility calc(var(--delay) / 2) ease calc(1.25 * var(--delay));
}

.nav-toggle:checked ~ nav {
  opacity: 1;
  visibility: visible;
  transition: opacity var(--delay) ease;
}

nav ul {
  display: grid;
  width: 100%;
  height: calc(100vw - calc(2 * var(--spacer)));
  grid-template-columns: 1fr 1fr;
  gap: calc(var(--spacer) / 2);
}

nav li {
  color: var(--clr-background);
  transform: scale(1, 0);
  transform-origin: bottom;
  transition: transform calc(var(--delay) / 2) ease calc(var(--delay) / 2);
  border-radius: calc(var(--spacer) / 4);
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

.hero-banner {
  margin-top: calc(3 * var(--spacer));
}

.hero-animation-container {
  height: clamp(5rem, 50vh, 20rem);
  width: 100%;
}

.hero-animation-container > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>