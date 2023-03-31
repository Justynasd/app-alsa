<template>
  <v-card color="secondary" class="mx-auto text-body-1 rounded-xl">
    <v-card-title class="text-center text-h4 text-md-h3 text-lg-h2 ma-8">{{
      $t("aboutTitle")
    }}</v-card-title>

    <!-- <div class="d-flex justify-center flex-column-reverse flex-sm-row mx-8">
      <div class="w-md-50">
        <v-card-text height="150" width="250">
          <v-card-text class="text-h5 my-2">{{
            $t("aboutSubtitle")
          }}</v-card-text>
        </v-card-text>
      </div>
      <div class="w-md-50">
        <img width="200" src="/rocketdab.png" />
      </div>
    </div> -->

    <v-row class="ma-10 justify-center align-center">
      <v-col cols="12" md="4">
        <img width="200" src="/rocketdab.png" />
      </v-col>
      <v-col cols="12" md="4">
        <v-card-text class="text-h5 my-2">{{
          $t("aboutSubtitle")
        }}</v-card-text>
      </v-col>
    </v-row>

    <!-- <v-sheet class="ma-10 text-body-1"> -->
    <v-row class="ma-1 ma-md-5 ma-lg-10 ma-xl-15 align-center">
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
    <v-row class="ma-1 ma-md-5 ma-lg-10 ma-xl-15 align-center">
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
    <v-row class="ma-4 ma-md-7 ma-lg-12 ma-xl-15 justify-center align-center">
      <v-card class="mb-4 pa-5 rounded-shaped">
        {{ $t("aboutDesc4") }}
      </v-card>
    </v-row>
    <!-- </v-sheet> -->
  </v-card>
</template>
