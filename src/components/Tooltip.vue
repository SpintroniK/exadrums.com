<template>
  <div class="tooltip" v-if="description" v-html="description"></div>
</template>

<script>
export default {
  props: {
    description: { type: String, required: true },
  },
};
</script>

<style>
.tooltip {
  position: absolute;
  opacity: 0;
  top: 120%;
  width: max-content;
  max-width: 200px;
  height: auto;
  border-radius: calc(var(--spacer) / 4);
  background-color: var(--clr-primary);
  color: var(--clr-background);
  text-align: justify;
  text-justify: inter-word;
  padding: calc(0.75 * var(--spacer));
  z-index: 10;
  transition: opacity var(--delay) ease-in-out;
}

.tooltip-middle {
  left: calc(-100% - 25px);
}

.tooltip-left {
  left: 0;
}

.tooltip-right {
  right: 0;
}

.tooltip:after {
  content: "";
  position: absolute;
  bottom: 100%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent var(--clr-primary) transparent;
}

.tooltip-middle:after {
  content: "";
  left: 50%;
}

.tooltip-left:after {
  content: "";
  left: calc(1.5 * var(--spacer));
}

.tooltip-right:after {
  content: "";
  right: calc(1.5 * var(--spacer));
}

.enable-tooltip:hover + .tooltip {
  opacity: 1;
  transition: opacity var(--delay) ease-in-out;
}
</style>