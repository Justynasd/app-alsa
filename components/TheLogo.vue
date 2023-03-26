<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <div>
    <NuxtLink :to="localePath('index')">
      <!-- <img src="~/assets/images/alsa.jpg" width="60" /> -->
      <v-img
        :width="60"
        aspect-ratio="1"
        cover
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-img>
    </NuxtLink>
  </div>
</template>
