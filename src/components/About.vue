<template>
  <section class="about" id="about">
    <h1>About</h1>

    <p class="e-mail">contact@exadrums.com</p>


    <p class="plain-text">
      You can find more information or seek help on social media:
    </p>

    <div class="social-container">
      <a href="https://github.com/SpintroniK/eXaDrums" data-link="github">
        <img width="30" height="30" src="assets/github_logo.svg" alt="github" />
      </a>
      <a href="https://hackaday.io/project/9350-exadrums" data-link="hackaday">
        <img width="30" height="30" src="assets/hackaday_logo.svg" alt="hackaday" />
      </a>
      <a href="https://www.youtube.com/channel/UCKlsf7RHYXHVrS000hyja3A" data-link="youtube">
        <img width="30" height="30" src="assets/youtube_logo.svg" alt="youtube" />
      </a>
    </div>

    <hr>

    <Testimonial v-if="testimonials.length > 0"
      :testimonials="testimonials"
      class="testimonials">
    </Testimonial>

    <p class="signature">by Jérémy Oden</p>
  </section>
</template>

<script>
import Testimonial from "./Testimonial.vue";

export default {
  data() {
    return {
      testimonials: []
      /* [
        {
          name: "Toto1",
          image_path:
            "assets/tux_logo.svg",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Toto2",
          image_path:
            "assets/tux_logo.svg",
          comment:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          name: "Toto3",
          image_path:
            "assets/tux_logo.svg",
          comment:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          name: "Toto4",
          image_path:
            "assets/tux_logo.svg",
          comment:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          name: "Toto5",
          image_path:
            "assets/tux_logo.svg",
          comment:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          name: "Toto6",
          image_path:
            "assets/tux_logo.svg",
          comment:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ] */,
    };
  },
  components: {
    Testimonial,
  },
};
</script>

<style>
.about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto 0;
}

.e-mail {
  text-align: center;
  font-size: clamp(1.2em, 8vw, 2.5em);
  color: var(--clr-ascent);
  margin: var(--spacer) auto;
}

.social-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: calc(2 * var(--spacer)) 0;
}

.social-container a {
  width: clamp(2rem, 10vw, 3rem);
  height: clamp(2rem, 10vw, 3rem);
  background-color: var(--clr-ternary);
  border-radius: 25%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow var(--delay);
}

.social-container a:hover {
  background-color: var(--clr-background);
  box-shadow: 0 0 0em 0.15em var(--clr-ascent);
}

.social-container a::after {
  content: attr(data-link) " ";
  position: absolute;
  bottom: calc( -1 * var(--spacer) / 3);
  left: 50%;
  transform: translate(-50%, 100%);
  font-size: 0.8em;
  font-weight: 300;
  color: var(--clr-secondary);
  text-decoration: none;
  transition: color var(--delay);
}

.social-container a:hover::after {
  color: var(--clr-ascent);
}

.social-container img {
  width: clamp(1.25rem, 6vw, 1.4rem);
  height: auto;
}

.signature {
  text-align: center;
  padding: var(--spacer);
}

@media only screen and (min-width: 85ch) {
  .about {
    display: grid;
    grid-template-areas:
      ". title title ."
      ". hr hr ."
      ". text text ."
      ". email social ."
      ". testimonials testimonials ."
      ". signature signature .";
    grid-template-columns: auto auto 200px auto;
    color: var(--clr-background);
    background-color: var(--clr-secondary);
    min-height: 100vh;
    padding-bottom: 0;
  }

  .about h1 {
    margin: unset;
    grid-area: title;
    justify-self: center;
    align-self: end;
  }

  .about hr {
    grid-area: hr;
    justify-self: center;
    align-self: center;
    width: 40%;
  }

  .about .plain-text {
    grid-area: text;
    max-width: 50ch;
    margin: var(--spacer) auto;
    text-align: center;
    font-size: 1.5em;
    font-weight: 200;
    line-height: 1.1;
  }

  .e-mail {
    color: unset;
    grid-area: email;
    font-size: clamp(1.3em, 4vw, 3em);
    align-self: center;
  }

  .social-container {
    margin: unset;
    grid-area: social;
  }

  .social-container a:hover::after {
    color: var(--clr-ternary);
  }

  .testimonials {
    grid-area: testimonials;
  }

  .signature {
    grid-area: signature;
    align-self: center;
  }
}
</style>
