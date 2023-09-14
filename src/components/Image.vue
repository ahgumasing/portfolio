<script setup>
defineProps({ blok: Object });

/**
 * Applies the options to the image url
 * Plus also supports WebP where possible
 *
 * Documentation around new url structure: https://www.storyblok.com/cl/image-service-update
 * Documentation around Image Service: https://www.storyblok.com/docs/image-service
 */
function resize(image, option) {
    return image + '/m/' + option;
}
</script>

<template>
    <div
        class="h-12 w-12 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
    >
        <a href="/">
            <img
                class="rounded-full"
                style="color: transparent"
                :src="resize(blok.image, '700x0')"
                alt="me"
            />
        </a>
    </div>
</template>
