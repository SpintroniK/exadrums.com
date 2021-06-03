<template>
  <section class="hero-banner">
    <div class="hero-animation-container">
      <img src="assets/hero_img.jpg" alt="" />
    </div>
    <hr />
    <h1>A cheap alternative to<br />professionnal drum module</h1>
    <div class="text-container">
      <p class="plain-text">
        EXADRUMS is a fully featured <b>e-drum module</b> with professionnal
        performances that you can build yourself for a low price tag.
      </p>
      <p class="plain-text">
        With a 7 inch <b>touch screen</b> it bring a smealess experience that
        enable your to focus on your music.
      </p>
    </div>
    <button data-btn-icon="#" class="btn-dark">Build your own</button>
    <button data-btn-icon="#" class="btn-light">Documentation</button>
  </section>
</template>

<style>
.hero-banner {
  display: flex;
  flex-direction: column;
}

.hero-animation-container {
  width: 100%;
  height: 95vw;
  max-height: 60ch;
}

.hero-animation-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
}

.hero-banner h1 {
  font-size: clamp(1.5em, 5vw, 3em);
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
    grid-template-rows: auto 4rem 1fr 5rem;
    grid-template-columns: 1fr 1fr;
  }

  .hero-banner h1 {
    grid-area: title;
    text-align: left;
    color: var(--clr-ternary);
  }

  .hero-banner hr {
    grid-area: hr;
    position: relative;
    top: 100%;
    transform: translateY(-100%);
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
    grid-area: image;
  }

  .hero-banner .btn-dark {
    grid-area: btn-left;
    margin: auto;
    max-height: 3rem;
  }

  .hero-banner .btn-light {
    grid-area: btn-right;
    margin: auto;
    max-height: 3rem;
  }
}
</style>
