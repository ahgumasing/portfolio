<script setup>
defineProps({
    blok: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="h-6 w-6 rounded-md mt-5">
        <a :href="blok.link.url" target="_blank">
            <img class="object-cover h-full rounded-md" :src="blok.image" />
        </a>
    </div>
</template>
