<template>
  <div class="columns-1 md:columns-2">
    <div class="bg-center text-center gap-1">
      <h1>{{ $t("contacts") }}</h1>
      <p>{{ $t("companyName") }}</p>
      <p>{{ $t("companyAddress") }}</p>
      <p>{{ $t("headquarters") }}</p>
      <p>{{ $t("headquartersPhone") }}</p>
      <p>{{ $t("headquartersEmail") }}</p>
      <p>{{ $t("sales") }}</p>
      <p>{{ $t("salesPhone") }}</p>
      <p>{{ $t("salesEmail") }}</p>
      <p>{{ $t("accounting") }}</p>
      <p>{{ $t("accountingPhone") }}</p>
      <p>{{ $t("accountingEmail") }}</p>
    </div>
    <div>
      <GoogleMap />
    </div>
  </div>
</template>
