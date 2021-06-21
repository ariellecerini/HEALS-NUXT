<template>
  <div class="listTable">
    <p class="listItem">{{title}}</p>
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
