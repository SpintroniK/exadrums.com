<template>
  <div class="news-container">
    <span>{{ news.date }}</span>
    <div>
      <a :href="news.url" :alt="news.description" class="news-title">❝ {{ news.title }} ❞</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: { type: Object, required: true },
  },
};
</script>

<style>
.news-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
}

.news-title {
  font-size: clamp(1.25em, 3vw, 1.5em);
  text-decoration: none;
  color: currentColor;
  width: max-content;
  max-width: 60ch;
}

@media only screen and (min-width: 85ch) {
  .news-container  {
    width: 90%;
    margin-right: 0;
    margin-left: auto;
    color: var(--clr-primary);
    background-color: var(--clr-ternary);
    padding: calc(var(--spacer) / 2);
    border-radius: calc(var(--spacer) / 3);
  }

  .news-container:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-90%, -50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent var(--clr-ternary) transparent transparent;
  }

  .news-container:after {
    content: url(/assets/megaphone_icon.svg);
    position: absolute;
    top: auto;
    bottom: auto;
    left: 0;
    transform: translateX(calc(-100% - 10px));
    color: var(--clr-ascent);
  }
}
</style>