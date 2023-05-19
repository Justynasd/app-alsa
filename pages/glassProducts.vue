<template>
  <v-row class="justify-center align-center">
    <v-col cols="12" lg="10" xl="8">
      <v-card color="secondary" class="mx-auto text-body-1 rounded-xl">
        <v-card-title
          class="text-center text-h4 text-md-h3 text-lg-h2 mt-8 mb-12"
          >{{ $t("glassProductsTitle") }}</v-card-title
        >
        <v-card
          class="ma-5 ma-md-5 ma-lg-10 ma-xl-15 justify-center align-center pa-5 pa-md-6 pa-lg-7 pa-xl-8 rounded-shaped"
        >
          {{ $t("glassProductsDesc1") }}
        </v-card>
        <v-card
          class="ma-5 ma-md-5 ma-lg-10 ma-xl-15 justify-center align-center pa-5 pa-md-6 pa-lg-7 pa-xl-8 rounded-shaped"
        >
          {{ $t("glassProductsDesc2") }}
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>
