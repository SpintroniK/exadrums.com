<template>
  <div class="news-container">
      <!-- <p class="news-date">Latest news {{ news.date }}</p> -->
      <span>📣 Latest News: </span><a :href="news.url" :alt="news.description" class="news-title enable-tooltip">❝ {{ news.title }} ❞</a>
      <!-- <p>{{ news.summary }}</p> -->
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
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: var(--spacer);
      width: max-content;
      max-width: 80%;
      margin-top: 5em;
      margin-left: auto;
      margin-right: auto;
      background-color: var(--clr-semi-transparent);
      backdrop-filter: blur(3px);
      padding: calc(2 * var(--spacer)) var(--spacer);
      border-radius: var(--spacer);
/*       border-left: 4px solid var(--clr-primary);
      border-right: 4px solid var(--clr-primary); */
    }

  .news-date {
    border-right: 1px dashed var(--clr-secondary);
    width: min-content;
    padding-right: var(--spacer);
  }

  .news-title {
    position: relative;
    font-size: clamp(1.25em, 3vw, 1.5em);
    text-decoration: none;
    color: var(--clr-primary);
  }

</style>