<template>
    <div v-editable="blok" class="flex mb-6">
        <div
            v-for="blok in blok.columns"
            :key="blok._uid"
            class="px-2"
            :class="{ 'flex justify-between': blok.value === 2 }"
        >
            <StoryblokComponent :blok="blok" />
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
