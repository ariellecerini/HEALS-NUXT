
<template>

   
        <div :class="chat ${class}" > 
                <slot></slot>
        </div>
         
</template>



<script>
    export default {
        name: 'ChatComponent',        
        props: {
            class: {
                type: String, 
                default: "topleft"
            }
        },
    }
</script>


<style>
.row .row-grid{
    display: -webkit-box !important;
    flex-wrap: nowrap !important;
}
</style>


 
