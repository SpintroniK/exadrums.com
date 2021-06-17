<template>
  <section class="hero-banner">
    <div class="hero-animation-container">
      <iframe width="100%" height="100%"
        src="https://www.youtube.com/embed/EdOBW7xA3Sc?autoplay=1&mute=1&controls=2&modestbranding" title="eXaDrums" frameborder="0">
      </iframe>
    </div>
    <hr />
    <h1>An Open Source Drum Module<br />With Professional Specs</h1>
    <div class="text-container">
      <p class="plain-text">
        EXADRUMS is a fully functional <b>drum module</b>, with professional
        specs, that you can build yourself and customize.
      </p>
      <p class="plain-text">
        With a 7 inch <b>touch screen</b> and a user-friendly interface, it offers a seamless experience that
        makes drumming a joy.
      </p>
    </div>
    <a href="#" class="button btn-dark" data-btn-icon="#">Make Your Own</a>
    <a href="#" class="button btn-light" data-btn-icon="#">Documentation</a>
  </section>
</template>

<style>
.hero-banner {
  display: flex;
  flex-direction: column;
  min-height: 50vh;
}

.hero-animation-container {
  width: 100%;
  height: 95vw;
  max-height: 60ch;
}

.hero-animation-container iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
  background: url(/assets/hero_img.jpg);
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
}

.hero-banner h1 {
  font-size: clamp(1.33em, 5vw, 3.5em);
  font-weight: 400;
  text-align: right;
  line-height: 0.9;
  margin: var(--spacer) 2.5%;
}

@media only screen and (min-width: 80ch) {
  .hero-banner {
    display: grid;
    grid-template-areas:
      "title title"
      "hr image"
      "text image"
      "btn-left btn-right";
    gap: var(--spacer);
    grid-template-rows: 1fr 0.5fr auto 1fr;
    grid-template-columns: 1fr 1fr;
  }

  .hero-banner h1 {
    grid-area: title;
    text-align: left;
    align-self: end;
    color: var(--clr-background);
    padding-top: var(--spacer);
  }

  .hero-banner hr {
    grid-area: hr;
    align-self: center;
  }

  .hero-banner .text-container {
    grid-area: text;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--clr-ternary);
  }

  .hero-banner .text-container .plain-text {
    max-width: 45ch;
  }

  .hero-animation-container {
    all: unset;
    grid-area: image;
    z-index: 5;
  }

  .hero-animation-container iframe {
    cursor: pointer;
  }

  .hero-animation-container iframe:hover {
    transform: translateX(calc(-50% - calc(var(--spacer) / 2))) scale(2);
    transition: transform 0.5s ease,
                outline 0.35s ease 0.15s;
    outline: 1000vw solid rgba(0, 0, 0, 0.8);
  }

  .hero-banner .btn-dark {
    grid-area: btn-left;
    align-self: center;
    justify-self: center;
    max-height: 3rem;
  }

  .hero-banner .btn-light {
    grid-area: btn-right;
    align-self: center;
    justify-self: center;
    max-height: 3rem;
  }
}
</style>
