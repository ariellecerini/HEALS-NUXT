<template>
  <div>
    <b-alert :variant="${status}" show>{{Message}}</b-alert>
  </div>
</template>

<script>
  export default {
  name: alert, 
  props:{
    status: {
      type: String,
      required: true,
    }, 
    Message: {
      type: String,
      required: true,
    }
  }
  }
</script>