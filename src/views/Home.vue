<template lang="">
    <div class="home">
        <h2>Home View</h2>
        <h2>count:{{counterStore.count}}</h2>
    </div>
</template>
<script setup>
import useCounter from "@/stores/counter.js";

const counterStore = useCounter()
console.log('1231321');
</script>
<style lang="">
    
</style>