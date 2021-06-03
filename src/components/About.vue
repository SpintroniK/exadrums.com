<template>
  <section class="about" id="about">
    <h1>About</h1>

    <p class="e-mail">exadrums@contact.com</p>

    <p class="plain-text">
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
          name: "Toto1",
          image_path:
            "http://photo-folio.freewebmaster.fr/photos/mammals/dogs/IMG_4814.jpg",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Toto2",
          image_path:
            "http://photo-folio.freewebmaster.fr/photos/mammals/dogs/IMG_4814.jpg",
          comment:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          name: "Toto3",
          image_path:
            "http://photo-folio.freewebmaster.fr/photos/mammals/dogs/IMG_4814.jpg",
          comment:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          name: "Toto4",
          image_path:
            "http://photo-folio.freewebmaster.fr/photos/mammals/dogs/IMG_4814.jpg",
          comment:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          name: "Toto5",
          image_path:
            "http://photo-folio.freewebmaster.fr/photos/mammals/dogs/IMG_4814.jpg",
          comment:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          name: "Toto6",
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
  position: relative;
  margin: auto 0;
  min-height: 100vh;
}

.e-mail {
  text-align: center;
  font-size: clamp(1.5em, 8vw, 3em);
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
  justify-content: space-evenly;
  margin: calc(2 * var(--spacer)) auto;
}

.external-links-container a {
  width: clamp(2rem, 10vw, 4rem);
  height: clamp(2rem, 10vw, 4rem);
  background-color: var(--clr-ternary);
  border-radius: 25%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow var(--delay);
}

.external-links-container a:hover {
  box-shadow: 0 0 0em 0.15em var(--clr-ascent);
}

.external-links-container a::after {
  content: attr(data-link) " ";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  font-size: 0.8em;
  font-weight: 300;
  color: var(--clr-secondary);
  text-decoration: none;
  transition: color var(--delay);
}

.external-links-container a:hover::after {
  color: var(--clr-ascent);
}

.external-links-container img {
  height: clamp(1.33rem, 6vw, 2.25rem);
  min-width: auto;
}

.signature {
  position: absolute;
  bottom: 0;
  width: 95%;
  text-align: center;
}
</style>
