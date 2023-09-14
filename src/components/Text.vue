<template>
    <div v-editable="blok" class="text-gray-400 max-w-2xl">
        <p>{{ blok.text }}</p>
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
