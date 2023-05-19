<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <div>
    <v-card variant="text" color="green-darken-3" :to="localePath('index')">
      <img height="30" src="~/assets/alsa-small.jpg" />
    </v-card>
  </div>
</template>

<style>
img {
  width: 100%;
  height: auto;
}
</style>
