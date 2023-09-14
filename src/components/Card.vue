<template>
    <div v-editable="blok">
        <div v-for="blok in blok.blocks" :key="blok._uid">
            <StoryblokComponent :blok="blok" />
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
