<template>
  <div class="news-container">
    <span>{{ news.date }}</span>
    <a :href="news.url" :alt="news.description" class="news-title">❝ {{ news.title }} ❞</a>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  padding: calc(var(--spacer) / 3) var(--spacer);
}

.news-container:before {
  content: url(/assets/megaphone_icon.svg);
  color: var(--clr-ascent);
  transform: scale(0.8);
}

.news-title {
  font-size: clamp(1.15em, 3vw, 1.25em);
  text-decoration: none;
  color: currentColor;
  width: max-content;
  max-width: 50ch;
}

.news-title:hover {
  color: var(--clr-ascent);
}

@media only screen and (min-width: 85ch) {
  .news-container  {
    position: relative;
    width: 90%;
    margin-right: 0;
    margin-left: auto;
    background-color: var(--clr-ternary);
    border-radius: calc(var(--spacer) / 2);
    border: 1px solid var(--clr-secondary);
  }

  .news-container:before {
    content: url(/assets/megaphone_icon.svg);
    position: absolute;
    top: auto;
    bottom: auto;
    left: 0;
    transform: translateX(calc(-100% - 10px));
    color: var(--clr-ascent);
  }

  .news-container:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background-color: var(--clr-ternary);
    border-bottom: 1px solid var(--clr-secondary);
    border-left: 1px solid var(--clr-secondary);
  }
}
</style>