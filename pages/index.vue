<script lang="ts" setup>
const localePath = useLocalePath();
const messages = ref([
  {
    from: "homeBullet1",
    message: "homeText1",
    color: "teal-accent-4",
  },
  {
    from: "homeBullet2",
    message: "homeText2",
    color: "teal-accent-4",
  },
]);
</script>

<template>
  <v-row class="justify-center align-center">
    <v-col cols="12" lg="10" xl="8">
      <v-card color="secondary">
        <v-img :min-width="400" aspect-ratio="4/3" src="/home.jpg" />
        <v-card-text>
          <v-timeline density="compact" class="ml-5">
            <v-timeline-item
              v-for="message in messages"
              :dot-color="message.color"
              size="x-small"
            >
              <div class="mb-1">
                <div class="font-weight-normal">
                  <v-card-title>{{ $t(message.from) }}</v-card-title>
                  {{ $t(message.message) }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
        <v-card-actions class="ml-2 ml-lg-3 ml-xl-4">
          <v-btn
            size="lg"
            variant="text"
            color="teal-accent-4"
            :to="localePath('glassUnits')"
          >
            {{ $t("more") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
