<template>
  <section
    class="content-section"
    :class="[alignment == 'left' ? 'align-left' : 'align-right']"
    :id="id">
    <h1>{{ title }}</h1>
    <div class="image-container">
      <img class="lazy-image"
        :data-src="image_path"
        src=""
        alt="content-section image" />
    </div>
    <hr>
    <div class="icons-container">
      <img class="lazy-image"
        v-for="icon in icons"
        :key="icon.name"
        :data-src="icon.path"
        src=""
        :alt="icon.name" />
    </div>
    <div class="text-container">
      <p
        v-for="description in descriptions"
        :key="description.id"
        class="plain-text">
        {{ description.text }}
      </p>
    </div>
    <div class="btn-container">
      <a
        v-for="button in buttons"
        :key="button.name"
        :data-btn-icon="button.icon"
        :class="button.class"
        :href="button.link"
        class="button">
        {{ button.name }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    alignment: { type: String, required: true },
    icons: { type: Array, required: true },
    descriptions: { type: Array, required: true },
    image_path: { type: String, required: true },
    buttons: { type: Array, required: true },
  },
};
</script>

<style>
.content-section {
  display: flex;
  flex-direction: column;
  min-height: 50vh;
}

.content-section hr {
  margin: var(--spacer) auto;
  transition-delay: var(--delay);
}

.content-section .image-container {
  width: 100%;
  height: 33vh;
  max-height: 40ch;
}

.content-section .image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  transition-delay: var(--delay);
}

.content-section .icons-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.content-section .icons-container img {
  height: calc(3 * var(--spacer));
  min-width: auto;
  transform: translateY(-25%) scaleY(90%);
  transform-origin: top;
  opacity: 0;
  transition-duration: calc(3 * var(--delay));
  transition-delay: calc(1.5 * var(--delay));
}

@media only screen and (min-width: 80ch) {
  .content-section {
    display: grid;
    grid-template-rows: 1fr 2rem 5rem 0fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  .align-left {
    grid-template-areas:
      "title image"
      "hr image"
      "icons image"
      "text image"
      "button image";
  }

  .align-right {
    grid-template-areas:
      "image title"
      "image hr"
      "image icons"
      "image text"
      "image button";
  }

  .content-section .image-container {
    all: unset;
    grid-area: image;
    margin: auto;
    width: 90%;
    height: 100%;
  }

  .content-section h1 {
    grid-area: title;
    align-self: end;
    justify-self: center;
    text-align: center;
    margin: 0 auto;
    width: 80%;
  }

  .content-section hr {
    grid-area: hr;
    justify-self: center;
    width: 80%;
  }

  .content-section .icons-container {
    margin: auto;
    width: 80%;
  }

  .content-section .text-container {
    grid-area: text;
    justify-self: center;
    width: 80%;
  }

  .content-section .btn-container {
    grid-area: button;
    align-self: start;
    justify-self: center;
    width: 80%;
  }
}
</style>
