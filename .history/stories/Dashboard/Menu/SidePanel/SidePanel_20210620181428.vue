<template>
    <div style="display: flexbox; flex-direction: vertical">
        {{ title }}
        <menu-item @onClick="onClick" v-bind="{ active: true, label: 'profile' }"/>
    </div>
</template>

<script>
import '../MenuItem/Menu.css';
import MenuItem from '../MenuItem/MenuItem.vue';

export default {
 name: 'side-panel',
  components: { MenuItem },
 props: {
     title: {
      type: String,
      required: true
    }
 }
}
</script>
