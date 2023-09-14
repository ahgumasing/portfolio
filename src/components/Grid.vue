<template>
    <div
        v-editable="blok"
        class="flex"
        :class="{
            'grid grid-cols-2 ': blok.style === 'two',
            'space-x-2': blok.spacing === 'two',
            'w-full flex flex-wrap space-x-0 gap-x-3':
                blok.responsive == 'responsive',
        }"
    >
        <div v-for="blok in blok.columns" :key="blok._uid">
            <StoryblokComponent :blok="blok" />
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
