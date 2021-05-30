<template>
  <div class="testimonial-container" ref="testimonial">
    <div class="profil-picture" :style="{ backgroundImage: `url('./assets/sticks.svg')`}" :data-name="testimonials[current].name">
      <div class="prev-testimonial" @click="previousTestimonial">❮</div>
      <img :src="testimonials[current].image_path" alt="testimonial image" />
      <div class="next-testimonial" @click="nextTestimonial">❯</div>
    </div>
    <p class="profile-comment">{{ testimonials[current].comment }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: this.testimonials,
      current: 0
    };
  },
  props: {
    testimonials: { type: Array, required: true },
  },
  methods: {
    nextTestimonial() {
      this.current < this.testimonials.length - 1 ? this.current += 1 : this.current = 0
    },
    previousTestimonial() {
      this.current > 0 ? this.current -= 1 : this.current = this.testimonials.length - 1
    }
  }
};
</script>

<style>
.testimonial-container {
  width: 100%;
  margin: calc(2 * var(--spacer)) auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profil-picture {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  width: 100%;
  max-width: 30ch;
  height: 50vw;
  max-height: 30ch;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  overflow: hidden;
}

.prev-testimonial,
.next-testimonial {
  text-align: center;
  align-self: center;
  width: 10%;
  font-size: 2em;
  color: var(--clr-ascent);
  cursor: pointer;
}

.profil-picture::after {
  content: attr(data-name);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  font-weight: 400;
}

.profil-picture img {
  width: 50.08%;
  height: 80%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 5px solid var(--clr-background);
  background-color: var(--clr-background);
}

.profile-comment {
  width: 80%;
  margin: var(--spacer) auto 0 auto;
  font-size: .8em;
  font-weight: 300;
}
</style>
