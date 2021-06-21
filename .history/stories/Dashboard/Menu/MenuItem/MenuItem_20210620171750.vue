<template>
    <div>
        <div :class="classes">
        {{ pageName }}
        </div>
    </div>
</template>

<script>
import "./MenuItem.css";

export default {
   name: menu-item,
   props: {
    type: {
      type: String,
      default: "primary",
      description: "Navbar type (e.g default, primary etc)"
    },
    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
      description: "Explicit id for the menu. By default it's a generated random number"
    },
    round: {
      type: Boolean,
      default: true,
      description: "Whether nav has rounded corners"
    },
    active: {
      type: Boolean,
      default: false,
      description: "Whether navitem should contain `navitem-active` class"
    },
    pageName: {
      type: String,
      default: "primary"
    }
    },
    computed: {
    classes() {
      return {
        'navitem': true,
        'navitem-active': this.active,
        'rounded': this.rounded,
        [`bg-${this.type}`]: true,
      };
    },
    // style() {
    //   return {
    //     backgroundColor: this.backgroundColor,
    //   };
    // },
  }
 
}
</script>
