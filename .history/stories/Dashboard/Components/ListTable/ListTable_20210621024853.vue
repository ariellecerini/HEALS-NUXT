<template>
  <div class="listTable">
    <ListItem v-bind="entry=info" />
    <ListItem v-bind="entry=info" />
    <ListItem v-bind="entry=info" />
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
  computed: {
    info() {
      return {
        'this.entry': true
      };
    },
  }
};
</script>
