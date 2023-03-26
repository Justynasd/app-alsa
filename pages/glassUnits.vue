<template>
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h4 text-basil">{{ $("glassUnits") }}</h1>
    </v-card-title>

    <v-tabs stacked center-active show-arrows bg-color="transparent">
      <v-tab v-for="item in items" :key="item" :value="item">
        <v-icon>{{ item.icon }}</v-icon>
        {{ item.item }}
      </v-tab>
    </v-tabs>

    <v-window>
      <v-window-item v-for="item in items" :key="item" :value="item">
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: "Appetizers",
      items: [
        { item: "standart", icon: "mdi-window-closed-variant" },
        { item: "heat", icon: "mdi-heat-wave" },
        { item: "sun", icon: "mdi-white-balance-sunny" },
        { item: "hammer", icon: "mdi-hammer" },
        { item: "mute", icon: "mdi-volume-mute" },
        { item: "decor", icon: "mdi-hops" },
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<!-- <script lang="ts" setup>
const fieldsSimple = ref([
  {
    label: "gridName",
    key: "name",
  },
  {
    label: "gridThickness",
    key: "thickness",
  },
  {
    label: "gridHeatTransfer",
    key: "heatTransfer",
  },
  {
    label: "gridLightTransmission",
    key: "LightTransmission",
  },
  {
    label: "gridLightReflection",
    key: "LightReflection",
  },
  {
    label: "gridSolarFactor",
    key: "SolarFactor",
  },
]);

const items = ref([
  { name: "STANDART Vienos kameros stiklo paketas" },
  {
    name: "4 - 16Ar - 4 Low e",
    thickness: "24",
    heatTransfer: "1,12",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "4 - 10Kr - 4 Low e*",
    thickness: "18",
    heatTransfer: "1,04",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  { name: "Dviejų kamerų stiklo paketas" },
  {
    name: "4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*",
    thickness: "36",
    heatTransfer: "0,49",
    lightTransmission: "74",
    lightReflection: "14/14",
    solarFactor: "53",
  },
  {
    name: "4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1",
    thickness: "44",
    heatTransfer: "0,58",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1",
    thickness: "52",
    heatTransfer: "0,52",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  { name: "Trijų kamerų stiklo paketas" },
  {
    name: "4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*",
    thickness: "58",
    heatTransfer: "0,30",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
  {
    name: "4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1",
    thickness: "68",
    heatTransfer: "0,39",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
]);

const gridColumns = [
  "name",
  "thickness",
  "heatTransfer",
  "lightTransmission",
  "lightReflection",
  "solarFactor",
];

const gridDataStandart = [
  { name: "STANDART Vienos kameros stiklo paketas" },
  {
    name: "4 - 16Ar - 4 Low e",
    thickness: "24",
    heatTransfer: "1,12",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "4 - 10Kr - 4 Low e*",
    thickness: "18",
    heatTransfer: "1,04",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "STANDART Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*",
    thickness: "36",
    heatTransfer: "0,49",
    lightTransmission: "74",
    lightReflection: "14/14",
    solarFactor: "53",
  },
  {
    name: "STANDART Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1",
    thickness: "44",
    heatTransfer: "0,58",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "STANDART Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1",
    thickness: "52",
    heatTransfer: "0,52",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "STANDART Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*",
    thickness: "58",
    heatTransfer: "0,30",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
  {
    name: "STANDART Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1",
    thickness: "68",
    heatTransfer: "0,39",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
];

const gridDataHeat = [
  { name: "HEAT Vienos kameros stiklo paketas" },
  {
    name: "4 - 16Ar - 4 Low e",
    thickness: "24",
    heatTransfer: "1,12",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "4 - 10Kr - 4 Low e*",
    thickness: "18",
    heatTransfer: "1,04",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "HEAT Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*",
    thickness: "36",
    heatTransfer: "0,49",
    lightTransmission: "74",
    lightReflection: "14/14",
    solarFactor: "53",
  },
  {
    name: "HEAT Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1",
    thickness: "44",
    heatTransfer: "0,58",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "HEAT Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1",
    thickness: "52",
    heatTransfer: "0,52",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "HEAT Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*",
    thickness: "58",
    heatTransfer: "0,30",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
  {
    name: "HEAT Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1",
    thickness: "68",
    heatTransfer: "0,39",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
];

const gridDataSun = [
  { name: "SUN Vienos kameros stiklo paketas" },
  {
    name: "4 - 16Ar - 4 Low e",
    thickness: "24",
    heatTransfer: "1,12",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "4 - 10Kr - 4 Low e*",
    thickness: "18",
    heatTransfer: "1,04",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*",
    thickness: "36",
    heatTransfer: "0,49",
    lightTransmission: "74",
    lightReflection: "14/14",
    solarFactor: "53",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1",
    thickness: "44",
    heatTransfer: "0,58",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1",
    thickness: "52",
    heatTransfer: "0,52",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*",
    thickness: "58",
    heatTransfer: "0,30",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
  {
    name: "Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1",
    thickness: "68",
    heatTransfer: "0,39",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
];
const gridDataSafe = [
  { name: "SAFE Vienos kameros stiklo paketas" },
  {
    name: "4 - 16Ar - 4 Low e",
    thickness: "24",
    heatTransfer: "1,12",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "4 - 10Kr - 4 Low e*",
    thickness: "18",
    heatTransfer: "1,04",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*",
    thickness: "36",
    heatTransfer: "0,49",
    lightTransmission: "74",
    lightReflection: "14/14",
    solarFactor: "53",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1",
    thickness: "44",
    heatTransfer: "0,58",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1",
    thickness: "52",
    heatTransfer: "0,52",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*",
    thickness: "58",
    heatTransfer: "0,30",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
  {
    name: "Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1",
    thickness: "68",
    heatTransfer: "0,39",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
];
const gridDataMute = [
  { name: "MUTE Vienos kameros stiklo paketas" },
  {
    name: "4 - 16Ar - 4 Low e",
    thickness: "24",
    heatTransfer: "1,12",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "4 - 10Kr - 4 Low e*",
    thickness: "18",
    heatTransfer: "1,04",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*",
    thickness: "36",
    heatTransfer: "0,49",
    lightTransmission: "74",
    lightReflection: "14/14",
    solarFactor: "53",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1",
    thickness: "44",
    heatTransfer: "0,58",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1",
    thickness: "52",
    heatTransfer: "0,52",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*",
    thickness: "58",
    heatTransfer: "0,30",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
  {
    name: "Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1",
    thickness: "68",
    heatTransfer: "0,39",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
];
const gridDataDecor = [
  { name: "DECOR Vienos kameros stiklo paketas" },
  {
    name: "4 - 16Ar - 4 Low e",
    thickness: "24",
    heatTransfer: "1,12",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "4 - 10Kr - 4 Low e*",
    thickness: "18",
    heatTransfer: "1,04",
    lightTransmission: "82",
    lightReflection: "12/13",
    solarFactor: "65",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*",
    thickness: "36",
    heatTransfer: "0,49",
    lightTransmission: "74",
    lightReflection: "14/14",
    solarFactor: "53",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1",
    thickness: "44",
    heatTransfer: "0,58",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1",
    thickness: "52",
    heatTransfer: "0,52",
    lightTransmission: "75",
    lightReflection: "16/16",
    solarFactor: "54",
  },
  {
    name: "Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*",
    thickness: "58",
    heatTransfer: "0,30",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
  {
    name: "Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1",
    thickness: "68",
    heatTransfer: "0,39",
    lightTransmission: "68",
    lightReflection: "19/19",
    solarFactor: "48",
  },
];
</script> -->
