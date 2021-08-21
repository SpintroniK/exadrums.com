<template>
  <div :class="['tooltip', `tooltip-${position}`]" v-if="description" v-html="description"></div>
</template>

<script>
export default {
  props: {
    description: { type: String, required: true },
    position: {type: String, required: false, default: 'center'}
  }
};
</script>

<style>
.tooltip {
  position: absolute;
  opacity: 0;
  top: 120%;
  width: 150%;
  max-width: max-content;
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

.tooltip-center {
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-right {
  left: calc(50% + 3em);
  transform: translateX(-50%);

}

.tooltip-left {
  left: calc(50% - 3em);
  transform: translateX(-50%);

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

.tooltip-center:after {
  content: "";
  left: 50%;
}

.tooltip-right:after {
  content: "";
  left: calc(50% - 3em);
}

.tooltip-left:after {
  content: "";
  left: calc(50% + 3em);
}

.enable-tooltip:hover + .tooltip {
  opacity: 1;
  transition: opacity var(--delay) ease-in-out;
}
</style>