<template>
  <div :class="classes">{{ content }}</div>
</template>

<script>

// import '../../../assets/style.css'

export default {
  name: 'card-component',

  props: {
    content: {
      type: Array,
      required: true,
    }
  },
};
</script>
