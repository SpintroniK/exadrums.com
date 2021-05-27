<template>
  <section
    class="content"
    :class="[alignment == 'left' ? 'align-left' : 'align-right']"
    :id="id"
  >
    <h1>{{ title }}</h1>
    <img :src="image_path" alt="content image" />
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
      <p v-for="description in descriptions" :key="description.id">
        {{ description.text}}
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
.content {
  padding-top: calc(3.5 * var(--spacer));
}

.content h1 {
  text-align: center;
}

.content hr {
  margin: var(--spacer) auto;
}

.content .icons-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.content .icons-container img {
  height: calc(3 * var(--spacer));
}

</style>