<template>
    <div
        v-editable="blok"
        class="mt-2 rounded-full bg-gray-200 text-black w-24 text-xs text-center py-1"
    >
        {{ blok.text }}
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
