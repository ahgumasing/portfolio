<template>
    <div class="flex w-full">
        <div class="fixed inset-0 flex justify-center sm:px-8">
            <div class="flex w-full max-w-7xl lg:px-8">
                <div class="w-full bg-white ring-1 ring-zinc-100" />
            </div>
        </div>

        <div class="relative flex w-full flex-col">
            <main class="flex-auto">
                <div class="sm:px-8 mt-9">
                    <div class="mx-auto w-full max-w-7xl lg:px-8">
                        <div class="relative px-4 sm:px-8 lg:px-12">
                            <div class="mx-auto max-w-2xl lg:max-w-5xl">
                                <slot />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
