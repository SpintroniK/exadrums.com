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
  gap: calc(var(--spacer));
  max-width: 100%;
  overflow: hidden;
  margin: var(--spacer) auto;
}

.profil-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 66vw;
  padding: var(--spacer);
}

.profil-picture {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width: 66vw;
  height: 66vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
  overflow: hidden;
}

.profil-picture::after {
  content: attr(data-name);
  position: absolute;
  bottom: 0;
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
  font-weight: 200;
}
</style>
