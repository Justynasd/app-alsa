<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <v-footer absolute>
    <v-container class="d-flex-row h-20">
      <v-divider></v-divider>
      <v-sheet variant="text" class="ma-auto" max-width="350">
        <v-list>
          <v-list-item
            prepend-icon="mdi-phone"
            title="+370 650 92099"
            href="tel:+370 650 92099"
            variant="plain"
          ></v-list-item>

          <v-divider inset></v-divider>

          <v-list-item
            prepend-icon="mdi-email"
            title="info@alsa.lt"
            href="mailto:info@alsa.lt"
            variant="plain"
          ></v-list-item>

          <v-divider inset></v-divider>

          <v-list-item
            prepend-icon="mdi-map-marker"
            title="Žalgirio g. 131, LT-08217 Vilnius"
            :to="localePath('contacts')"
            variant="plain"
          ></v-list-item>

          <v-divider inset></v-divider>
        </v-list>
      </v-sheet>
    </v-container>
  </v-footer>
</template>
