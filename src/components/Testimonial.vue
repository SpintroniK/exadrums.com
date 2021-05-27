<template>
  <div class="testimonial-container" ref="testimonial">
    <div class="profil-container" v-for="testimonial in testimonials" :key="testimonial.name" ref="testimonialElement">
      <div class="profil-picture" :style="{ backgroundImage: `url('./assets/sticks.svg')`}" :data-name="testimonial.name">
        <img :src="testimonial.image_path" alt="testimonial image" />
      </div>
      <p class="profile-comment">{{ testimonial.comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: this.testimonials,
    };
  },
  props: {
    testimonials: { type: Array, required: true },
  },
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
