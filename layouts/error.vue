<script setup>
const props = defineProps({
  error: Object,
  //   layout: 'error',
});
const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <button @click="handleError">{{ $t('homeButton') }}</button>
    <!-- <NuxtLink to="/">Home page</NuxtLink> -->
  </div>
</template>
