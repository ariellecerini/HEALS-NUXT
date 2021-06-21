<template>
  <div class="listItem">
    <h3 class="card-title dashboard">{{title}}</h3>
  </div>
</template>

<script>
import '../../dashboard.css';
// import '../../../assets/style.css'

export default {
  name: 'list-item',
  props: {
    title: {
      type: String,
      required: true,
      default: "Insert Title Here"
    }
  },
};
</script>
