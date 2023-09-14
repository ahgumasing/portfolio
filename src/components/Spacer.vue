<template>
    <div
        v-editable="blok"
        :class="{
            'mt-32': blok.spacing === '32',
            'mt-20': blok.spacing === '20',
            'mt-10': blok.spacing === '10',
        }"
    />
</template>

<script setup>
defineProps({ blok: Object });
</script>
