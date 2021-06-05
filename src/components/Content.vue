<template>
  <section
    class="content-section"
    :class="[alignment == 'left' ? 'align-left' : 'align-right']"
    :id="id"
  >
    <h1>{{ title }}</h1>
    <div class="image-container">
      <img :src="image_path" alt="content-section image" />
    </div>
    <hr />
    <div class="icons-container">
      <img
        v-for="icon in icons"
        :key="icon.name"
        :src="icon.path"
        :alt="icon.name"
      />
    </div>
    <div class="text-container">
      <p
        v-for="description in descriptions"
        :key="description.id"
        class="plain-text"
      >
        {{ description.text }}
      </p>
    </div>
    <button
      v-for="button in buttons"
      :key="button.name"
      :data-btn-icon="button.icon"
      :class="button.class"
    >
      {{ button.name }}
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: this.id,
      title: this.title,
      alignment: this.alignment,
      icons: this.icons,
      descriptions: this.descriptions,
      image_path: this.image_path,
      buttons: this.buttons,
    };
  },
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
}

.content-section hr {
  margin: var(--spacer) auto;
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
}

.content-section .icons-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.content-section .icons-container img {
  height: calc(3 * var(--spacer));
  min-width: auto;
}

@media only screen and (min-width: 80ch) {
  .content-section {
    all: unset;
    display: grid;
    grid-template-rows: auto 2rem 5rem 0fr auto;
    padding: 25% 0 10% 0;
    min-height: 50vh;
  }

  .align-left {
    grid-template-areas:
      "title image"
      "hr image"
      "icons image"
      "text image"
      "button image";
    grid-template-columns: 0.75fr 1fr;
  }

  .align-right {
    grid-template-areas:
      "image title"
      "image hr"
      "image icons"
      "image text"
      "image button";
    grid-template-columns: 1fr 0.75fr;
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
    text-align: center;
    margin: 0 auto;
    width: 80%;
  }

  .content-section hr {
    grid-area: hr;
    margin: auto;
    width: 80%;
  }

  .content-section .icons-container {
    margin: auto;
    width: 80%;
  }

  .content-section .text-container {
    grid-area: text;
    margin: auto;
    width: 80%;
  }

  .content-section .btn-dark {
    grid-area: button;
    margin: auto;
    width: 80%;
  }
}
</style>
