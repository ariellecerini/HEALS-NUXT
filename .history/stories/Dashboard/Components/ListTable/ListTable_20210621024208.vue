<template>
  <div class="listTable">
    <ListItem v-bind="info" />
    <ListItem v-bind="info" />
    <ListItem v-bind="info" />
  </div>
</template>

<script>
import '../../dashboard.css';
// import '../../../assets/style.css'
import '../ListItem/ListItem.vue'
export default {
  name: 'list-table',
  components: { ListItem },
  props: {
    entry: {
      type: String,
      required: true,
      default: "Insert Line Item Here"
    }
  },
};
</script>
