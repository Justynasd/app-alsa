<template>
  <v-card color="secondary" class="mx-auto text-body-1 rounded-xl">
    <v-card-title class="text-center text-h4 text-md-h3 text-lg-h2 ma-8">{{
      $t("aboutTitle")
    }}</v-card-title>

    <v-row class="ma-10 justify-center align-center">
      <v-col cols="12" md="4">
        <img width="200" src="~/assets/rocket.png" alt="Apie Alsa" />
      </v-col>
      <v-col cols="12" md="4">
        <v-card-text class="text-h5">
          {{ $t("aboutSubtitle1") }}
        </v-card-text>
        <v-card-text class="text-h5">
          {{ $t("aboutSubtitle2") }}
        </v-card-text>
        <v-card-text class="text-h5">
          {{ $t("aboutSubtitle3") }}
        </v-card-text>
      </v-col>
    </v-row>

    <v-row class="ma-1 ma-md-3 ma-lg-5 ma-xl-8 align-center">
      <v-col cols="12" md="5">
        <v-card class="pa-5 rounded-shaped">
          {{ $t("aboutDesc1") }}
        </v-card>
      </v-col>
      <v-col cols="12" md="7">
        <v-card class="pa-5 rounded-shaped">
          {{ $t("aboutDesc2") }}
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-1 ma-md-3 ma-lg-5 ma-xl-8 align-center">
      <v-col cols="12" md="8">
        <v-card class="pa-5 rounded-shaped">
          {{ $t("aboutDesc3") }}
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-5 rounded-shaped">
          {{ $t("aboutDesc4") }}
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-4 ma-md-5 ma-lg-6 ma-xl-8 justify-center align-center">
      <v-card class="mb-4 pa-5 rounded-shaped">
        {{ $t("aboutDesc5") }}
      </v-card>
    </v-row>
  </v-card>
</template>
