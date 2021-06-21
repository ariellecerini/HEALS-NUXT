<template>
<div>
  <b-button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</b-button>
    <b-button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</b-button>

  <b-button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</b-button>
</div>
</template>

<script>

export default {
  name: 'button-group',
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
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
