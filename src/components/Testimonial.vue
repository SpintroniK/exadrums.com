<template>
  <div class="testimonial-container" ref="container">
    <div class="prev-testimonial" @click="prevTestimonial">❮</div>
    <div
      v-for="currents in currentTestimonials"
      :key="currents"
      class="profiles-container"
    >
      <div
        v-for="testimonial in currents"
        :key="testimonial.name"
        :data-name="testimonial.name"
        class="profile"
      >
        <div
          class="profile-picture"
        >
          <img :src="testimonial.image_path" alt="testimonial image" />
        </div>
        <p class="profile-name">{{ testimonial.name }}</p>
        <p class="profile-comment">{{ testimonial.comment }}</p>
      </div>
    </div>
    <div class="next-testimonial" @click="nextTestimonial">❯</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      number: 1,
    };
  },
  mounted: function () {
    this.number = this.$refs.container.offsetWidth > 800 ? 3 : 1
  },
  props: {
    testimonials: { type: Array, required: true },
  },
  computed: {
    currentTestimonials: function () {
      const currentTest = [];
      for (let i = this.current; i < this.current + this.number; i++) {
        if (i >= 0 && i <= this.testimonials.length - 1) {
          currentTest.push(this.testimonials[i]);
        } else if (i >= this.testimonials.length) {
          currentTest.push(this.testimonials[i - this.testimonials.length]);
        }
      }
      return new Array(currentTest);
    },
  },
  methods: {
    nextTestimonial() {
      this.current < this.testimonials.length - 1
        ? (this.current += 1)
        : (this.current = 0);
    },
    prevTestimonial() {
      this.current > 0
        ? (this.current -= 1)
        : (this.current = this.testimonials.length - 1);
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
  gap: calc(var(--spacer) / 2);
  width: 100%;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 22ch;
  padding: calc(var(--spacer) / 2);
  overflow: hidden;
}

.profile-picture {
  position: relative;
  display: flex;
  overflow: hidden;
  background-image: url('/assets/sticks.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.profile-picture:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.profile-picture img {
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  background-color: var(--clr-background);
  border: 4px solid var(--clr-background);
}

.profile-name {
  font-weight: 400;
}

.profile-comment {
  font-size: 0.8em;
  font-weight: 300;
}

@media only screen and (min-width: 80ch) {
  .profile-picture img {
    background-color: var(--clr-secondary);
    border: 4px solid var(--clr-secondary);
  }
}
</style>
