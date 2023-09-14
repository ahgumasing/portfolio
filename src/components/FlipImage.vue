<script setup>
defineProps({ blok: Object });

function resize(image, option) {
    return image + '/m/' + option;
}
</script>

<template>
    <div class="flex w-full">
        <div class="relative flex w-full flex-col">
            <main class="flex-auto">
                <div class="mt-16 sm:mt-20">
                    <div
                        class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
                    >
                        <div
                            class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl"
                        >
                            <img
                                class="absolute inset-0 h-full w-full object-cover"
                                :src="resize(blok.image, '700x0')"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
