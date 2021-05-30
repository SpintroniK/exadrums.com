<template>
  <div class="testimonial-container">
    <div class="prev-testimonial" @click="prevTestimonial">❮</div>
    <div
      v-for="currents in currentTestimonials"
      :key="currents"
      class="profiles-container">
      <div
      v-for="testimonial in currents"
      :key="testimonial.name"
      :data-name="testimonial.name"
      class="profile">
          <div class="profile-picture" :style="{ backgroundImage: `url('./assets/sticks.svg')`}">
            <img :src="testimonial.image_path" alt="testimonial image" />
          </div>
          <p class="profile-name">{{ testimonial.name }}</p>
          <p class="profile-comment">{{ testimonial.comment }}</p>
      </div>
    </div>
    <div class="next-testimonial" @click="nextTestimonial">❯</div>
  </div>
  <!--   <div class="testimonial-container" ref="testimonial">
    <div class="profil-picture" :style="{ backgroundImage: `url('./assets/sticks.svg')`}" :data-name="testimonials[current].name">
      <div class="prev-testimonial" @click="previousTestimonial">❮</div>
      <img :src="testimonials[current].image_path" alt="testimonial image" />
      <div class="next-testimonial" @click="nextTestimonial">❯</div>
    </div>
    <p class="profile-comment">{{ testimonials[current].comment }}</p>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      testimonials: this.testimonials,
      current: 0,
      number: 2,
    };
  },
  props: {
    testimonials: { type: Array, required: true },
  },
  computed: {
    currentTestimonials: function () {
      return new Array(this.testimonials.slice(this.current, this.number));
    },
  },
  methods: {
    nextTestimonial() {
      this.current < this.number ? (this.current += 1) : (this.current = 0);
    },
    prevTestimonial() {
      this.current > 0 ? (this.current -= 1) : (this.current = this.number);
    },
  },
};
</script>

<style>
.testimonial-container {
  width: 100%;
  margin: calc(2 * var(--spacer)) auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(var(--spacer) / 2);
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

.profiles-container {
  display: flex;
  justify-content: space-around;
  gap: var(--spacer);
  width: 100%;
}

profiles-container:first-child,
profiles-container:last-child {
  opacity: 0.5;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 20ch;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  overflow: hidden;
}

.profile-picture {
  display: flex;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.profile-picture img {
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 5px solid var(--clr-background);
  background-color: var(--clr-background);
}

.profile-picture:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.profile-name {
  font-weight: 400;
}

.profile-comment {
  font-size: 0.8em;
  font-weight: 300;
}
</style>
