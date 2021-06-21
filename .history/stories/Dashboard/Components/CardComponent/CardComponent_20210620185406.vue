<template>
    <div class="card">
       {{content}}
        <slot/>
<!-- onclick function needs to be added 
        set all 'active' props to false except for the menu item that was clicked 
        switch the displayed info to the page that corresponds with the menu item
    -->
    
    </div>
</template>

<script>
import '../../dashboard.css';

export default {
 name: 'card',
 props: {
     content: {
      type: String,
      required: false
    }
 }
}
</script>
