<template>
  <section class="about" id="about">
    <h1>About</h1>

    <p class="plain-text">
      You can find more information or seek help on social media.
    </p>

    <div class="social-container">
      <a href="https://github.com/SpintroniK/eXaDrums" target="_blank" rel="noopener" data-link="github">
        <img width="30" height="30" src="assets/github_logo.svg" alt="github" />
      </a>
      <a href="https://hackaday.io/project/9350-exadrums" target="_blank" rel="noopener" data-link="hackaday">
        <img width="30" height="30" src="assets/hackaday_logo.svg" alt="hackaday" />
      </a>
      <a href="https://youtube.com/playlist?list=PLLkwPhhEVhJUe0AelzuqNdIghLr7N7o8V" target="_blank" rel="noopener" data-link="youtube">
        <img width="30" height="30" src="assets/youtube_logo.svg" alt="youtube" />
      </a>
    </div>

    <p class="e-mail">
      <span>c</span>
      <span>n</span>
      <span>o</span>
      <span>o</span>
      <span>n</span>
      <span>s</span>
      <span>t</span>
      <span>p</span>
      <span>a</span>
      <span>a</span>
      <span>c</span>
      <span>m</span>
      <span>t</span>
      <span>.</span>
      <span>@</span>
      <span>p</span>
      <span>e</span>
      <span>l</span>
      <span>x</span>
      <span>e</span>
      <span>a</span>
      <span>a</span>
      <span>d</span>
      <span>s</span>
      <span>r</span>
      <span>e</span>
      <span>u</span>
      <span>@</span>
      <span>m</span>
      <span>t</span>
      <span>s</span>
      <span>h</span>
      <span>.</span>
      <span>a</span>
      <span>c</span>
      <span>n</span>
      <span>o</span>
      <span>k</span>
      <span>m</span>
      <span>s</span>
    </p>
    
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
  min-height: 100vh;
  margin: auto 0;
  color: var(--clr-background);
  background-color: var(--clr-secondary);
}

.e-mail {
  text-align: center;
  font-size: clamp(1.2em, 8vw, 2.5em);
  color: var(--clr-ternary);
  margin: var(--spacer) auto;
}

.e-mail > span:nth-child(even) {
  display: none;
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
  color: var(--clr-ternary);
}

.social-container img {
  width: clamp(1.25rem, 6vw, 1.4rem);
  height: auto;
}

.signature {
  text-align: center;
  padding: var(--spacer);
}

.about hr {
  margin-bottom: 25vh;
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
    font-size: clamp(1.15em, 4vw, 2em);
    align-self: center;
  }

  .social-container {
    margin: unset;
    grid-area: social;
  }

  .testimonials {
    grid-area: testimonials;
  }

  .signature {
    grid-area: signature;
    align-self: center;
  }

  .about hr {
    margin-bottom: unset;
  }
}
</style>
