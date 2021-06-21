<template>
  <div>
    <p class="listTable">{{entry}}</p>
  </div>
</template>

<script>
import '../../dashboard.css';
// import '../../../assets/style.css'

export default {
  name: 'list-table',
  props: {
    entry: {
      type: String,
      required: true,
      default: "Insert Line Item Here"
    }
  },
};
</script>
