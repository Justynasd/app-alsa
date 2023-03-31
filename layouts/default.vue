<script lang="ts" setup></script>

<template>
  <v-app id="alsa">
    <TheNavbar height="90" />
    <v-main class="my-5">
      <v-container max-width="1580px">
        <v-sheet max-width="1580px">
          <slot />
        </v-sheet>
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<style scoped></style>
