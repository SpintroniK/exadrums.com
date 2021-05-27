<template>
  <section class="about" id="about">
    <h1>About</h1>

    <p class="e-mail">exadrums@contact.com</p>
    
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam nemo
      temporibus id tempore neque officia consequatur eius accusantium quidem
      ipsum?
    </p>

    <div class="external-links-container">
      <a href="#"><img src="assets/github.png" alt="github" /></a>
      <a href="#"><img src="assets/hackaday.png" alt="hackaday" /></a>
      <a href="#"><img src="assets/youtube.png" alt="youtube" /></a>
    </div>

    <hr />

    <Testimonial :testimonials="testimonials"></Testimonial>

    <p class="signature">by Jérémy Oden</p>
  </section>
</template>

<script>
import Testimonial from "./Testimonial.vue";

export default {
  data() {
    return {
      testimonials: [
        {name: 'Robert', image_path: 'http://photo-folio.freewebmaster.fr/photos/mammals/dogs/IMG_4814.jpg', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        {name: 'Alfred', image_path: 'http://photo-folio.freewebmaster.fr/photos/mammals/dogs/IMG_4814.jpg', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        {name: 'Tyler', image_path: 'http://photo-folio.freewebmaster.fr/photos/mammals/dogs/IMG_4814.jpg', comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      ],
    };
  },
  components: {
    Testimonial,
  },
};
</script>

<style>
</style>