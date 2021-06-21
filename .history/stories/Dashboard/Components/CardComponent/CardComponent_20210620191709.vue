<template>
  <div :class="classes">{{ content }}</div>
</template>

<script>
import '../../dashboard.css'
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
