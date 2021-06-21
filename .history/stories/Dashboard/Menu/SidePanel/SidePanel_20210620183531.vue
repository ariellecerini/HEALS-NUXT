<template>
    <div class="sidebar menu navholder">
        <div class="site-title">{{ title }}</div>
        <menu-item @onClick="onClick" v-bind="{ active: true, label: 'profile' }"/>
        <menu-item @onClick="onClick" v-bind="{ active: true, label: 'summary' }"/>
        <menu-item @onClick="onClick" v-bind="{ active: true, label: 'timeline' }"/>
        <menu-item @onClick="onClick" v-bind="{ active: true, label: 'insights' }"/>



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
