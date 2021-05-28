<template>
  <section class="hero-banner">
    <div class="hero-animation-container">
      <img src="assets/hero_img.jpg" alt="" />
    </div>
    <hr>
    <h1>A cheap alternative to professionnal drum module</h1>
    <div class="text-container">
      <p>
        EXADRUMS is a fully featured <b>e-drum module</b> with professionnal
        performances that you can build yourself for a low price tag.
      </p>
      <p>
        With a 7 inch <b>touch screen</b> it bring a smealess experience that
        enable your to focus on your music.
      </p>
    </div>
    <button data-btn-icon="#" class="btn-dark">Build your own</button>
    <button data-btn-icon="#" class="btn-light">Documentation</button>
  </section>
</template>

<script>
export default {};
</script>

<style>
.hero-banner {
  display: flex;
  flex-direction: column;
}

.hero-animation-container {
  width: 100%;
  height: 95vw;
}

.hero-animation-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
}

.hero-banner h1 {
  font-size: 1.5em;
  text-align: right;
  line-height: 0.9;
  margin: var(--spacer) 0;
}

.text-container {
  padding: var(--spacer) 0;
}

.text-container p {
  margin: var(--spacer) 0;
}
</style>