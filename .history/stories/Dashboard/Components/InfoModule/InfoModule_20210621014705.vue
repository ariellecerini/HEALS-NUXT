<template>
  <card-component class="card">{{ content }}</card-component>
</template>

<script>
import '../../dashboard.css';
import CardComponent from '../Card Component/CardComponent.vue';
// import '../../../assets/style.css'

export default {
  name: 'info-module',
  components: { CardComponent },
  props: {
    content: {
      type: Array,
      required: true,
    }
  },
};
</script>
