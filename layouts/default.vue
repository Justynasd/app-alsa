<script lang="ts" setup></script>

<template>
  <!-- <div class="container"> -->
  <v-app id="alsa">
    <TheNavbar class="bg-primary" />
    <!-- <TheHeader class="my-5" /> -->
    <v-main class="my-5">
      <v-container class="bg-secondary">
        <slot />
      </v-container>
    </v-main>
    <TheFooter class="bg-primary" />
  </v-app>
  <!-- </div> -->
</template>

<style scoped></style>
