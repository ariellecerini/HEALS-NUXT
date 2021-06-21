<template>
  <div :class="classes" @click="onClick" :style="style">{{ label }}</div>
</template>

<script>
import './MenuItem.css';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    active:{
      type: Boolean,
      default: true
    },
    primary: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
