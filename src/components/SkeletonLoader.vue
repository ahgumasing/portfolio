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
                                <div
                                    class="bg-gray-100 rounded-full animate-pulse h-12 w-12"
                                />

                                <div class="bg-gray-100 mt-32 h-8 w-56" />
                                <div class="bg-gray-100 h-8 w-96 mt-2" />

                                <div class="bg-gray-100 h-4 w-96 mt-6" />
                                <div class="bg-gray-100 h-4 w-52 mt-2" />

                                <div class="mt-56 flex space-x-4">
                                    <div
                                        v-for="x in 3"
                                        :key="x"
                                        class="w-96 h-56 rounded-md bg-gray-100 mb-4"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
