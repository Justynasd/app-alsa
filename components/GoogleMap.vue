<template>
  <div id="map" ref="mapDiv"></div>
</template>

<script setup lang="ts">
import { Loader } from "@googlemaps/js-api-loader";
const config = useRuntimeConfig();
const mapDiv = ref<HTMLElement | null>(null);
const loader = new Loader({
  apiKey: config.apiKey,
});
onMounted(async () => {
  await loader.load();
  const center = {
    lat: 54.705894337486754,
    lng: 25.27500567845598,
  };
  const map = new google.maps.Map(mapDiv.value as HTMLElement, {
    center: center,
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: center,
    map: map,
  });
});
</script>

<style>
#map {
  height: 400px; /* The height is 400 pixels */
  width: 100%; /* The width is the width of the web page */
}
</style>
