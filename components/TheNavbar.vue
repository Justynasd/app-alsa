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
      <v-toolbar color="white" height="90" variant="text">
        <the-logo />
        <v-spacer></v-spacer>

        <div class="d-none d-md-flex">
          <div class="mt-1">
            <v-btn
              color="green-darken-3"
              v-for="link in links"
              variant="text"
              :to="localePath(link.item)"
            >
              {{ $t(link.item) }}
            </v-btn>
          </div>

          <div class="pl-8">
            <v-chip-group mandatory="force">
              <v-chip
                variant="text"
                text="LT"
                color="green-darken-3"
                :to="switchLocalePath('lt')"
                >LT</v-chip
              >
              <v-chip
                variant="text"
                text="EN"
                color="green-darken-3"
                :to="switchLocalePath('en')"
                >EN</v-chip
              ></v-chip-group
            >
          </div>
        </div>

        <v-spacer></v-spacer>

        <v-row class="d-md-none justify-end">
          <v-chip-group mandatory="force">
            <v-chip
              variant="text"
              text="LT"
              color="green-darken-3"
              :to="switchLocalePath('lt')"
            />
            <v-chip
              variant="text"
              text="EN"
              color="green-darken-3"
              :to="switchLocalePath('en')"
            />
          </v-chip-group>
          <v-app-bar-nav-icon
            id="menu-activator"
            variant="text"
          ></v-app-bar-nav-icon>
        </v-row>

        <v-menu activator="#menu-activator" transition="scale-transition">
          <v-list width="300">
            <v-list-item
              v-for="link in links"
              variant="text"
              :to="localePath(link.item)"
              :close-on-content-click="true"
            >
              <v-list-item-title>{{ $t(link.item) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-container>
  </v-app-bar>
</template>
