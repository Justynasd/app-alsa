<template>
  <v-card color="secondary" class="mx-auto text-body-1 rounded-xl">
    <v-card-title class="text-center text-h4 text-md-h3 text-lg-h2 mt-8 mb-12">
      {{ $t("glassUnitsTitle") }}
    </v-card-title>
    <v-row class="mx-1 mx-md-3 mx-lg-5 mx-xl-15 align-center">
      <v-col cols="12" md="8">
        <v-card class="pa-4 pa-md-5 pa-lg-6 pa-xl-7 rounded-shaped">
          {{ $t("glassUnitsDesc1") }}
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-4 pa-md-5 pa-lg-6 pa-xl-7 rounded-shaped">
          {{ $t("glassUnitsDesc2") }}
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-1 mx-md-3 mx-lg-5 mx-xl-15 align-center">
      <v-col cols="12" md="7">
        <v-card class="pa-4 pa-md-5 pa-lg-6 pa-xl-7 rounded-shaped">
          {{ $t("glassUnitsDesc3") }}
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="pa-4 pa-md-5 pa-lg-6 pa-xl-7 rounded-shaped">
          {{ $t("glassUnitsDesc4") }}
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-1 mx-md-3 mx-lg-5 mx-xl-15 align-center">
      <v-col cols="12" md="12">
        <v-card class="pa-4 pa-md-5 pa-lg-6 pa-xl-7 rounded-shaped">
          {{ $t("glassUnitsDesc5") }}
        </v-card>
      </v-col>
    </v-row>

    <v-tabs
      class="my-6 my-md-8 my-lg-10 my-xl-12"
      v-model="glassModel"
      stacked
      center-active
      show-arrows
      bg-color="transparent"
      align-tabs="center"
    >
      <v-tab v-for="item in items">
        <v-icon size="large" class="mb-3">{{ item.icon }}</v-icon>
        {{ $t(item.item) }}
      </v-tab>
    </v-tabs>

    <v-window
      class="ma-4 ma-md-6 ma-lg-5 ma-xl-15 align-center text-body-1"
      v-model="glassModel"
      disabled
    >
      <v-window-item v-for="item in items">
        <v-card class="pa-4 pa-md-5 pa-lg-6 pa-xl-7 rounded-shaped">
          {{ $t(item.card1) }} <br /><br />
          {{ $t(item.card2) }} <br /><br />
          <div v-show="item.card3 != ''">{{ $t(item.card3) }} <br /><br /></div>
          <div v-show="item.card4 != ''">{{ $t(item.card4) }}</div>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts" setup>
const glassModel = ref(null);
const items = ref([
  {
    item: "tabStandard",
    icon: "mdi-window-closed-variant",
    card1: "cardStandard1",
    card2: "cardStandard2",
    card3: "cardStandard3",
    card4: "cardStandard4",
  },
  {
    item: "tabHeat",
    icon: "mdi-heat-wave",
    card1: "cardHeat1",
    card2: "cardHeat2",
    card3: "",
    card4: "",
  },
  {
    item: "tabSun",
    icon: "mdi-white-balance-sunny",
    card1: "cardSun1",
    card2: "cardSun2",
    card3: "cardSun3",
    card4: "cardSun4",
  },
  {
    item: "tabSafe",
    icon: "mdi-shield-home",
    card1: "cardSafe1",
    card2: "cardSafe2",
    card3: "cardSafe3",
    card4: "",
  },
  {
    item: "tabMute",
    icon: "mdi-volume-mute",
    card1: "cardMute1",
    card2: "cardMute2",
    card3: "cardMute3",
    card4: "",
  },
  {
    item: "tabDecorative",
    icon: "mdi-diamond-stone",
    card1: "cardDecorative1",
    card2: "cardDecorative2",
    card3: "cardDecorative3",
    card4: "",
  },
]);
</script>
