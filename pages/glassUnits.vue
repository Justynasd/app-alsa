<template>
  <v-card color="secondary" class="mx-auto text-body-1 rounded-xl">
    <v-card-title class="text-center text-h4 text-md-h3 text-lg-h2 ma-8">
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
      class="my-5"
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

    <v-window class="ma-4" v-model="glassModel" disabled>
      <v-window-item v-for="item in items">
        <v-card class="overflow-x-auto rounded-xl">
          <TheGrid :data="gridData" :columns="gridColumns"> </TheGrid>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts" setup>
import gridData from "../data/heat.json";

const glassModel = ref(null);
const items = ref([
  { item: "tabStandard", icon: "mdi-window-closed-variant" },
  { item: "tabHeat", icon: "mdi-heat-wave" },
  { item: "tabSun", icon: "mdi-white-balance-sunny" },
  { item: "tabSafe", icon: "mdi-shield-home" },
  { item: "tabMute", icon: "mdi-volume-mute" },
  { item: "tabDecorative", icon: "mdi-diamond-stone" },
]);

const gridColumns = ref([
  "columnName",
  "columnUnitThickness",
  "columnHeatTransfer",
  "columnLightTransmission",
  "columnLightReflection",
  "columnSolarFactor",
]);

// "columnSafeName": "Stiklas",
//   "columnSafeEN356": "Saugumo klasė pagal EN356",
//   "columnSafeEN12600": "Saugumo klasė pagal EN12600",
//   "columnThickness": "Storis, mm",
//   "columnWeight": "Svoris, kg",
//   "columnName": "Stiklo paketo struktūra, Pavadinimas",
//   "columnUnitThickness": "Paketo storis, mm",
//   "columnHeatTransfer": "Šilumos perdavimo koeficientas, Ug, W/m2K",
//   "columnLightTransmission": "Šviesos laidumas, LT, %",
//   "columnLightReflection": "Šviesos atspindėjimas, LR, %",
//   "columnSolarFactor": "Saulės faktorius, g, %",
//   "columnMute": "Garso izoliacija, Rw(C;Ctr) dB",

// const gridData = [
//   { columnName: "Vienos kameros stiklo paketas" },
//   {
//     columnName: "4 - 16Ar - 4 Low e",
//     thickness: "24",
//     heatTransfer: "1,12",
//     lightTransmission: "82",
//     lightReflection: "12/13",
//     solarFactor: "65",
//   },
//   {
//     columnName: "4 - 10Kr - 4 Low e*",
//     thickness: "18",
//     heatTransfer: "1,04",
//     lightTransmission: "82",
//     lightReflection: "12/13",
//     solarFactor: "65",
//   },
//   {
//     columnName:
//       "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*",
//     thickness: "36",
//     heatTransfer: "0,49",
//     lightTransmission: "74",
//     lightReflection: "14/14",
//     solarFactor: "53",
//   },
//   {
//     columnName:
//       "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1",
//     thickness: "44",
//     heatTransfer: "0,58",
//     lightTransmission: "75",
//     lightReflection: "16/16",
//     solarFactor: "54",
//   },
//   {
//     columnName:
//       "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1",
//     thickness: "52",
//     heatTransfer: "0,52",
//     lightTransmission: "75",
//     lightReflection: "16/16",
//     solarFactor: "54",
//   },
//   {
//     columnName:
//       "Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*",
//     thickness: "58",
//     heatTransfer: "0,30",
//     lightTransmission: "68",
//     lightReflection: "19/19",
//     solarFactor: "48",
//   },
//   {
//     columnName:
//       "Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1",
//     thickness: "68",
//     heatTransfer: "0,39",
//     lightTransmission: "68",
//     lightReflection: "19/19",
//     solarFactor: "48",
//   },
// ];
</script>
