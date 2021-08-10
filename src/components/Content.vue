<template>
  <section class="content-section" :class="[content.alignment == 'left' ? 'align-left' : 'align-right']" :id="content.id">
    <h1>{{ content.title }}</h1>
    <div class="image-container">
      <img class="lazy-image" width="640" height="480" :data-src="content.image_path" src="" alt="content-section image" />
    </div>
    <hr>
    <div class="icons-container">
      <img class="lazy-image"
        width="50"
        height="50"
        v-for="icon in content.icons"
        :key="icon.name"
        :data-src="icon.path"
        src=""
        :alt="icon.name" />
    </div>
    <div class="text-container">
      <p v-for="description in content.descriptions" :key="description.id" class="plain-text">
        {{ description.text }}
      </p>
    </div>
    <div class="btn-container">
      <a
        v-for="button in content.buttons"
        :key="button.name"
        :data-btn-icon="button.icon"
        :class="button.class"
        :href="button.link ? button.link : 'javascript:;'"
        @click="button.click"
        class="button">
        {{ button.name }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true }
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
  transition-delay: var(--delay);
}

.content-section .image-container {
  width: 100%;
  height: auto;
}

.content-section .image-container img {
  width: 100%;
  max-height: 75vw;
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
  width: calc(3 * var(--spacer));
  height: calc(3 * var(--spacer));
  transform: translateY(-25%) scaleY(90%);
  transform-origin: top;
  opacity: 0;
  transition-duration: var(--delay);
  transition-delay: calc(1.5 * var(--delay));
  cursor: pointer;
}

.icons-container img:hover {
  transform: scale(1.2) !important;
  transform-origin: center;
  transition: transform var(--delay);
}

@media only screen and (min-width: 85ch) {
  .content-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto 0.5fr 0.5fr;
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
    align-self: center;
    justify-self: center;
    width: 80%;
  }

  .content-section .btn-container {
    grid-area: button;
    align-self: center;
    justify-self: center;
    width: 80%;
  }
}
</style>
