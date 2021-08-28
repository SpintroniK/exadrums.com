<template>
  <section class="hero-banner">
    <div class="hero-animation-container">
      <video width="100%" height="auto" controls muted autoplay playsinline loop poster="/assets/hero_img.jpg">
        <source src="https://freewebmaster.fr/exadrums.com/assets/exadrums_hero_video.webm" type="video/webm">
        <source src="https://freewebmaster.fr/exadrums.com/assets/exadrums_hero_video.mp4" type="video/mp4">
        <source src="https://freewebmaster.fr/exadrums.com/assets/exadrums_hero_video.ogv" type="video/ogg">
        Your browser does not support the video tag.
      </video>
    </div>
    <hr />
    <h1>Open Source Drum Module<br>Low latency &amp; superb audio</h1>
    <div class="text-container">
      <p class="plain-text">
        eXaDrums is an open source <b>drum module</b> you can build and customize yourself. 
        It aims to bring together low latency and high quality audio.
      </p>
      <p class="plain-text">
        With a 7 inch <b>touch screen</b> and a user-friendly interface, it offers a seamless experience and is more accessible than ever.
      </p>
      <p class="plain-text">
        If you wish to make your own eXaDrums module, click the "Make Your Own" button below.
      </p>
      <p class="plain-text">
        If you wish to know more about the current state of the project, check out the latest news ({{ news.title }}).
      </p>
    </div>
    <a href="https://configure.exadrums.com" target="_blank" rel="noopener" class="button btn-dark" data-btn-icon="">Make Your Own</a>
    <!-- <a href="https://make.exadrums.com" class="button btn-light" data-btn-icon="">Documentation</a> -->
    <LatestNews v-if="news.url" :news="news" id="news" />
  </section>
</template>

<script>
  import LatestNews from './LatestNews.vue';
  export default {
    props: {
      news: { type: Object, required: true }
    },
    components: { LatestNews },
  }
</script>

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
  background-color: black;
}

.hero-animation-container video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: url(/assets/hero_img.jpg);
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
}

.hero-banner h1 {
  font-size: clamp(1.33em, 5vw, 3.5em);
  font-weight: 400;
  text-align: right;
  line-height: 0.9;
  padding-top: 0.25em;
  margin: var(--spacer) 2.5%;
}

@media only screen and (min-width: 100ch) {
  .hero-banner {
    display: grid;
    grid-template-areas:
      "title title"
      "hr image"
      "text image"
      "btn-left news";
    gap: var(--spacer);
    grid-template-rows: auto auto minmax(1fr, 200px) auto;
    grid-template-columns: 1fr 1fr;
    padding-top: 12%;
  }

  .hero-banner h1 {
    grid-area: title;
    text-align: left;
    align-self: end;
    color: var(--clr-background);
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
    transform-origin: center;
    animation: slide-in calc(1.5 * var(--delay)) ease-out both calc(1.5 * var(--delay));
  }

  @keyframes slide-in {
    from {transform: scale(0.5, 0);
          opacity: 0;}
    to {transform: scale(1, 1);
          opacity: 1}
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

  #news {
    grid-area: news;
    align-self: center;
    width: 100%;
  }
}
</style>
