<template>
  <CardComponent class="card">
    <h3 class="card-title card dashboard">{{title}}</h3>
  </CardComponent>
</template>

<script>
import '../../dashboard.css';
import CardComponent from '../Card Component/CardComponent.vue';
// import '../../../assets/style.css'

export default {
  name: 'info-module',
  components: { CardComponent },
  props: {
    title: {
      type: String,
      required: true,
      default: "Insert Title Here"
    }
  },
};
</script>
