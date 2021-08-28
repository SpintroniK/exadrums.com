<template>
  <a :href="news.url" :alt="news.description" >
    <div class="news-container">
      <span>{{ news.date }}</span>
      <span class="news-title">❝ {{ news.title }} ❞</span>
    </div>
  </a>
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
  justify-content: center;
  flex-wrap: wrap;
  color: var(--clr-primary);
  background-color: var(--clr-ternary);
  border-radius: calc(var(--spacer) / 2);
  border: 1px solid var(--clr-secondary);
  width: 90%;
  margin: auto;
  padding: calc(var(--spacer) / 3) var(--spacer);
}

.news-container:hover {
  color: var(--clr-ascent);
  background-color: var(--clr-background);
}

.news-container:before {
  content: url(/assets/megaphone_icon.svg);
  transform: scale(0.8);
}

.news-title {
  font-size: clamp(1.15em, 3vw, 1.25em);
  text-decoration: none;
  color: currentColor;
  width: max-content;
  max-width: 50ch;
}

@media only screen and (min-width: 85ch) {
  .news-container  {
    position: relative;
    width: calc(100% - 50px);
    margin-right: 0;
    margin-left: auto;
    justify-content: space-evenly;
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

  .news-container:hover:after {
    background-color: var(--clr-background);
  }
}
</style>