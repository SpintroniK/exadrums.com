<template>
  <div>
    <transition name="fade">
      <div class="modal-background" v-show="isOpen" @click="closeModal">
        <div class="modal-container">
          <h2>{{ data.title }}</h2>
          <div class="modal-content">
            <div class="modal-picture">
              <img v-if="data.image_path" :src="data.image_path" alt="pikapika" />
            </div>
            <div class="modal-texts">
              <p v-for="p in data.paragraphs" :key="p">
                {{ p }}
              </p>
            </div>
          </div>
          <span class="modal-close" @click="closeModal">✕</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true },
    isOpen: { type: Boolean, required: true, default: false}
  },
  data()
  {
    return {
      show: false
    }
  },
  methods: {
    closeModal() 
    {
      this.show = false
      this.$emit('close')
    },
  }
};
</script>

<style>

.fade-enter-active,
.fade-leave-active 
{
  transition: opacity var(--delay);
}

.fade-enter,
.fade-leave-to
{
  opacity: 0;
}

.fade-enter-from
{
  opacity: 0;
}

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
  width: clamp(30ch, 90%, 70ch);
  padding: var(--spacer);
  background-color: var(--clr-background);
  border-radius: calc(var(--spacer) / 2);
  box-shadow: 0 0.5em 1em -0.5em var(--clr-primary);
}

.modal-container > h2 {
  padding-bottom: calc(1.5 * var(--spacer));
}

.modal-content {
  max-height: 80vh;
  overflow-y: auto;
}

.modal-picture {
  width: 100%;
  height: auto;
  margin: auto;
  text-align: center;
}

.modal-picture img {
  width: 60%;
  height: auto;
}

.modal-texts {
  text-align: justify;
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

@media only screen and (min-width: 85ch) {
  .modal-container {
    width: clamp(50ch, 90%, 85ch);
  }

  .modal-content {
    display: flex;
    flex-direction: columns;
    overflow-y: hidden;
  }

  .modal-picture {
    flex-basis: 40%;
    justify-content: center;
    align-items: center;
  }

  .modal-texts {
    flex-basis: 60%;
    max-height: 60vh;
    overflow-y: auto;
  }
}
</style>
