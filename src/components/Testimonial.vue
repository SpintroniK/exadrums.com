<template>
  <div class="testimonial-container" ref="testimonial">
    <div class="prev-testimonial" @click="previousTestimonial">❮</div>
    <div class="profil-container"  ref="testimonialElement">
      <div class="profil-picture" :style="{ backgroundImage: `url('./assets/sticks.svg')`}" :data-name="testimonials[current].name">
        <img :src="testimonials[current].image_path" alt="testimonial image" />
      </div>
      <p class="profile-comment">{{ testimonials[current].comment }}</p>
    </div>
    <div class="next-testimonial" @click="nextTestimonial">❯</div>
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
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  margin: calc(2 * var(--spacer)) auto;
}

.prev-testimonial,
.next-testimonial {
  text-align: center;
  align-self: center;
  width: 3rem;
  font-size: 2em;
  color: var(--clr-ascent);
  cursor: pointer;
}

.profil-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(15ch, 66vw, 30ch);
}

.profil-picture {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width: 66vw;
  max-width: 30ch;
  height: 66vw;
  max-height: 30ch;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
  overflow: hidden;
}

.profil-picture::after {
  content: attr(data-name);
  position: absolute;
  bottom: 0;
  font-weight: 400;
}

.profil-picture img {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 5px solid var(--clr-background);
  background-color: var(--clr-background);
}

.profile-comment {
  font-size: .8em;
  font-weight: 300;
}
</style>
