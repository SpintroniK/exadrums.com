<template>
  <div class="modal-background">
    <div class="modal-container">
      <h2>{{ title }}</h2>
      <div class="modal-content">
        <img v-if="image_path" :src="image_path" alt="pikapika" />
        <p class="plain-text">
          {{ text }}
        </p>
      </div>
      <span class="modal-close" @click="closeModal">✕</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    image_path: { type: String, required: false },
    text: { type: String, required: false },
  },
  methods: {
    closeModal() {
      console.log("Close modal");
    },
  },
};
</script>

<style>
.modal-background {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(45, 45, 45, 0.75);
  z-index: 100;
}

.modal-container {
  position: relative;
  width: clamp(30ch, 80%, 70ch);
  padding: var(--spacer);
  background-color: var(--clr-background);
  border-radius: var(--spacer);
  box-shadow: 0 0.5em 1em -0.5em var(--clr-primary);
}

.modal-content {
  max-height: 80vh;
  overflow-y: auto;
}

.modal-content img {
  max-width: 100%;
  height: auto;
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  padding: var(--spacer);
  cursor: pointer;
}

.modal-close:hover {
  color: var(--clr-ascent);
}
</style>