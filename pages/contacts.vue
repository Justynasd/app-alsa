<template>
  <v-card color="secondary" class="mx-auto text-center rounded-xl">
    <!-- <v-sheet -->
    <v-card-title class="text-center text-h4 text-md-h3 text-lg-h2 ma-8">{{
      $t("contactsTitle")
    }}</v-card-title>
    <v-card-text class="text-center text-h5">{{
      $t("companyName")
    }}</v-card-text>
    <v-card-text class="text-center text-body-1">{{
      $t("companyAddress")
    }}</v-card-text>
    <v-card class="ma-2 ma-md-5 ma-lg-10 ma-xl-15 rounded-lg">
      <GoogleMap />
    </v-card>
    <v-row class="ma-1 ma-md-5 ma-lg-10 ma-xl-15">
      <v-col cols="12" sm="6" md="4">
        <v-card class="rounded-xl">
          <v-list>
            <v-list-item prepend-icon="mdi-home"
              ><p>{{ $t("headquarters") }}</p></v-list-item
            >
            <v-divider inset></v-divider>
            <v-list-item
              prepend-icon="mdi-phone"
              title="+370 650 92099"
              href="tel:+370 650 92099"
            ></v-list-item>

            <v-divider inset></v-divider>

            <v-list-item
              prepend-icon="mdi-email"
              title="info@alsa.lt"
              href="mailto:info@alsa.lt"
            ></v-list-item>

            <v-divider inset></v-divider>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card class="rounded-xl">
          <v-list>
            <v-list-item prepend-icon="mdi-home"
              ><v-list-item-title>{{
                $t("sales")
              }}</v-list-item-title></v-list-item
            >
            <v-divider inset></v-divider>
            <v-list-item
              prepend-icon="mdi-phone"
              title="+370 687 52363"
              href="tel:+370 687 52363"
            ></v-list-item>

            <v-divider inset></v-divider>

            <v-list-item
              prepend-icon="mdi-email"
              title="stiklas@alsa.lt"
              href="mailto:stiklas@alsa.lt"
            ></v-list-item>

            <v-divider inset></v-divider>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="rounded-xl">
          <v-list>
            <v-list-item prepend-icon="mdi-home"
              ><p>{{ $t("accounting") }}</p></v-list-item
            >
            <v-divider inset></v-divider>
            <v-list-item
              prepend-icon="mdi-phone"
              title="+370 656 72680"
              href="tel:+370 656 72680"
            ></v-list-item>

            <v-divider inset></v-divider>

            <v-list-item
              prepend-icon="mdi-email"
              title="buhalterija@alsa.lt"
              href="mailto:buhalterija@alsa.lt"
            ></v-list-item>

            <v-divider inset></v-divider>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
