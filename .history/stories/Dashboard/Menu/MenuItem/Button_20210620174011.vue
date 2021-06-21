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
    rounded: {
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
        'nav-item': true,
        'nav-item--active': this.active,
        'nav-item--rounded': this.rounded,
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
