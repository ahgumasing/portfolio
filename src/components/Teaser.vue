<template>
    <div
        v-editable="blok"
        class="font-bold max-w-xl"
        :class="{
            'py-8 mt-8 text-5xl': blok.style === 'heading',
            'text-2xl': blok.style === 'medium',
            'text-lg': blok.style === 'base',
            'text-base font-medium': blok.style === 'small',
            'text-sm font-normal text-gray-400': blok.style === 'x-small',
        }"
    >
        <h2>{{ blok.headline }}</h2>
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
