<template>
    <div>
        <menu-item @onClick="onClick" v-bind="{ active: true, label: 'profile' }"/>
    </div>
</template>

<script>
import '../MenuItem/Menu.css';
import MenuItem from './MenuItem.vue';

export default {
 name: 'side-panel',
 props: {
     siteTitle: {
      type: String,
      required: true
    }
 }
}
</script>
