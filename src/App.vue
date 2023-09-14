<script setup>
import WebsiteLayout from './layouts/WebsiteLayout.vue';
import Home from './pages/Home.vue';
import SkeletonLoader from './components/SkeletonLoader.vue';
</script>

<template>
    <WebsiteLayout>
        <Suspense>
            <template #default>
                <Home />
            </template>

            <template #fallback>
                <SkeletonLoader />
            </template>
        </Suspense>
    </WebsiteLayout>
</template>
