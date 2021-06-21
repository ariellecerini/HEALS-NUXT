<template>
<div>
    <div class="navitem"
         :class="[
            {'navitem-active': active},
            {[`bg-${type}`]: type},
            {'rounded': round}
         ]">
        <slot/>
    </div>
    </div>
</template>

<script>
import "./MenuItem.css";

export default {
   name: MenuItem,
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
    }
    
    }
 
}
</script>
