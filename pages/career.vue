<template>
  <v-card class="mx-auto" color="secondary rounded-xl">
    <v-row class="mx-10 justify-center align-center">
      <v-card-title class="text-center text-h4 text-md-h3 text-lg-h2 mt-8">{{
        $t("careerTitle")
      }}</v-card-title>

      <v-col cols="5" md="4">
        <img width="200" src="~/assets/megaphone.png" alt="Karjera Alsa" />
      </v-col>
    </v-row>
    <v-row class="mx-1 mx-md-3 mx-lg-5 mx-xl-15 align-center">
      <v-col cols="12" md="8">
        <v-card class="pa-4 pa-md-5 pa-lg-6 pa-xl-7 rounded-shaped">
          {{ $t("careerDesc1") }}
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-4 pa-md-5 pa-lg-6 pa-xl-7 rounded-shaped">
          {{ $t("careerDesc2") }}
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-1 mx-md-3 mx-lg-5 mx-xl-15 align-center">
      <v-col cols="12" md="6">
        <v-card class="pa-4 pa-md-5 pa-lg-6 pa-xl-7 rounded-shaped">
          {{ $t("careerDesc3") }}
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4 pa-md-5 pa-lg-6 pa-xl-7 rounded-shaped">
          {{ $t("careerDesc4") }}
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-1 ma-md-3 ma-lg-5 ma-xl-15 align-center">
      <v-col cols="12" md="12">
        <v-card class="pa-4 pa-md-5 pa-lg-6 pa-xl-7 rounded-shaped">
          {{ $t("careerDesc5") }}
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
