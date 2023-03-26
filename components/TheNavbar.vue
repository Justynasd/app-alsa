<script lang="ts" setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const links = ref([
  { item: "about" },
  { item: "glassUnits" },
  { item: "glassProducts" },
  { item: "career" },
  { item: "contacts" },
]);
const drawer = ref(false);
</script>

<template>
  <v-app-bar>
    <v-container>
      <v-toolbar variant="text" class="bg-primary">
        <v-btn height="90" max-height="90" width="90" max-width="90">
          <the-logo />
        </v-btn>
        <v-spacer></v-spacer>

        <div class="d-none d-md-flex justify-center">
          <div class="justify-center">
            <v-btn
              v-for="link in links"
              variant="text"
              :to="localePath(link.item)"
            >
              {{ $t(link.item) }}
            </v-btn>
          </div>

          <v-spacer class="ml-3"></v-spacer>
          <div class="justify-end">
            <v-btn width="20" :to="switchLocalePath('en')">EN</v-btn>
            <v-btn :to="switchLocalePath('lt')">LT</v-btn>
          </div>
        </div>
        <v-spacer></v-spacer>
        <div class="d-md-none">
          <v-btn :to="switchLocalePath('en')">EN</v-btn>
          <v-btn :to="switchLocalePath('lt')">LT</v-btn>
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </div>
        <v-navigation-drawer
          name="mobile-menu"
          v-model="drawer"
          order="-1"
          location="top"
          permanent
        >
          <v-list>
            <v-list-item
              v-for="link in links"
              variant="text"
              :to="localePath(link.item)"
              @click.stop="drawer = !drawer"
            >
              <v-list-item-title>{{ $t(link.item) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-toolbar>
    </v-container>
  </v-app-bar>
</template>
