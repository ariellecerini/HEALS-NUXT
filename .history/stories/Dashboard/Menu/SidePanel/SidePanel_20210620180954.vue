<template>
    <div>
        {{siteTitle}}
        <menu-item @onClick="onClick" v-bind="{ active: true, label: 'profile' }"/>
    </div>
</template>

<script>
import '../MenuItem/Menu.css';
import MenuItem from '../MenuItem/MenuItem.vue';

export default {
 name: 'side-panel',
 props: {
     title: {
      type: String,
      required: true
    }
 }
}
</script>
