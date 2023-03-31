<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <div>
    <v-card variant="text" color="green-darken-3" :to="localePath('index')">
      <v-img width="30" src="/alsa.jpg" />
    </v-card>
  </div>
</template>
