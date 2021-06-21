<template>
    <div class="card">
        <div class="card">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
     name: 'card',
};
</script>

<style>
.card {
        width: 330px;
        border-radius: 16px;
        background: #553333;
}
</style>
