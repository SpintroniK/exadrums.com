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
      <a href="#" data-link="github">
        <img src="assets/github.png" alt="github" />
        </a>
      <a href="#" data-link="hackaday">
        <img src="assets/hackaday.png" alt="hackaday" />
      </a>
      <a href="#" data-link="youtube">
        <img src="assets/youtube.png" alt="youtube" />
      </a>
    </div>

    <hr>

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
        {
          name: "Lorem",
          image_path:
            "http://photo-folio.freewebmaster.fr/photos/mammals/dogs/IMG_4814.jpg",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Ipsum",
          image_path:
            "http://photo-folio.freewebmaster.fr/photos/mammals/dogs/IMG_4814.jpg",
          comment:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          name: "Dolor",
          image_path:
            "http://photo-folio.freewebmaster.fr/photos/mammals/dogs/IMG_4814.jpg",
          comment:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ],
    };
  },
  components: {
    Testimonial,
  },
};
</script>

<style>
.about {
  margin: auto 0;
  padding-left: 2.5%;
  padding-right: 2.5%;
  min-height: 100vh;
}

.about h1 {
  font-size: 1.75em;
  margin-bottom: calc(var(--spacer) / 2);
  line-height: 1;
  font-weight: 600;
  text-align: center;
}

.e-mail {
  text-align: center;
  font-size: 8vw;
  color: var(--clr-ascent);
  margin: var(--spacer) auto;
}

.contact-links-container span {
  display: block;
  text-align: center;
}

.external-links-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: calc(2 * var(--spacer)) auto;
}

.external-links-container a {
  width: calc(2.5 * var(--spacer));
  height: calc(2.5 * var(--spacer));
  background-color: var(--clr-ternary);
  border-radius: 25%;
  display: flex;
  justify-content:center;
  align-items: center;
}

.external-links-container a img {
  height: calc(1.25 * var(--spacer));
  min-width: auto;
}

.signature {
  text-align: center;
}
</style>
