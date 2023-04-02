<script lang="ts" setup>
//color="#26c6da"
</script>

<template>
  <v-card class="mx-auto" color="secondary rounded-xl">
    <v-row class="mx-10 justify-center align-center">
      <v-card-title class="text-center text-h4 text-md-h3 text-lg-h2 ma-8">{{
        $t("careerTitle")
      }}</v-card-title>

      <v-col cols="5" md="4">
        <img width="200" src="/megaphone_rs.png" />
      </v-col>
    </v-row>
    <v-card-text class="text-body-1 py-2 ma-5">
      {{ $t("careerDesc1") }}
    </v-card-text>
    <v-card-text class="text-body-1 py-2 ma-5">
      {{ $t("careerDesc2") }}
    </v-card-text>

    <v-card-text class="text-body-1 py-2 ma-5">
      {{ $t("careerDesc3") }}
    </v-card-text>
    <v-card-text class="text-body-1 py-2 ma-5">
      {{ $t("careerDesc4") }}
    </v-card-text>
    <v-card-text class="text-body-1 py-2 ma-5">
      {{ $t("careerDesc5") }}
    </v-card-text>

    <!-- <v-img src="/megaphone.png"></v-img> -->

    <v-card-actions>
      <!-- <v-list-item class="w-100">
        <v-list-item-title>Evan You</v-list-item-title>

        <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>

        <div class="justify-self-end">
          <v-icon class="me-1" icon="mdi-heart"></v-icon>
          <span class="subheading me-2">256</span>
          <span class="me-1">·</span>
          <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
          <span class="subheading">45</span>
        </div>
      </v-list-item> -->
    </v-card-actions>
    <!-- </v-card> -->
  </v-card>
</template>
