<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <v-footer absolute>
    <v-container class="d-flex h-20">
      <v-card variant="text" class="mx-auto" max-width="500">
        <!-- <v-card-item>
          <v-card-title class="text-h5"> {{ $t("contacts") }} </v-card-title>
        </v-card-item> -->

        <v-list class="bg-primary">
          <v-list-item
            prepend-icon="mdi-phone"
            title="+370 650 92099"
            href="tel:+370 650 92099"
          ></v-list-item>

          <v-divider inset></v-divider>

          <v-list-item
            prepend-icon="mdi-email"
            title="info@alsa.lt"
            href="mailto:info@alsa.lt"
          ></v-list-item>

          <v-divider inset></v-divider>
          <v-list-item
            prepend-icon="mdi-map-marker"
            title="Žalgirio g. 131, LT-08217 Vilnius"
            :to="localePath('contacts')"
          ></v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-footer>
</template>
