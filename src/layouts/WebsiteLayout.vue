<template>
    <div class="flex w-full overflow-x-hidden py-4">
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

                        <footer
                            class="mt-12 border-t px-12 py-8 text-right font-light text-sm"
                        >
                            <p>
                                Built with
                                <a class="font-medium" href="https://vuejs.org/"
                                    >Vue.js,</a
                                >
                                <a
                                    class="font-medium ml-1"
                                    href="https://tailwindcss.com/"
                                    >TailwindCSS,</a
                                >

                                <a
                                    class="font-medium ml-1"
                                    href="https://www.storyblok.com/"
                                    >Storyblok</a
                                >
                                <span class="ml-1">and</span>
                                <a
                                    class="font-medium ml-1"
                                    href="https://www.netlify.com/"
                                    >Netlify</a
                                >
                                🚀
                            </p>
                            <p class="text-gray-400">
                                © 2023 Abette Gumasing. All rights reserved.
                            </p>
                        </footer>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
