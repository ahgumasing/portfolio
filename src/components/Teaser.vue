<template>
    <div
        v-editable="blok"
        class="py-8 text-5xl font-bold max-w-xl"
        :class="{ 'text-3xl': blok.style === 'medium' }"
    >
        <h2 class="mt-8">{{ blok.headline }}</h2>
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
