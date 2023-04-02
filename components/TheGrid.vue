<script setup>
const props = defineProps({
  data: Array, // if first element goup = true will use next element as full row
  columns: Array,
});
</script>

<template>
  <v-table v-if="data.length">
    <thead>
      <tr>
        <th v-for="value in columns">
          {{ $t(value) }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data">
        <td v-if="item.group" colspan="5">
          {{ item["columnName"] }}
        </td>
        <td v-else v-for="key in columns">
          {{ item[key] }}
        </td>
      </tr>
    </tbody>
  </v-table>
  <!-- <p v-else>{{ $t("tableNoDataFound") }}</p> -->
</template>

<style>
/* table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
} */

th {
  background-color: #d1f3e4;
  /* color: rgba(255, 255, 255, 0.66); */
  cursor: pointer;
  user-select: none;
}

/* td {
  background-color: #f9f9f9;
} */

/* th,
td {
  min-width: 60px;
  padding: 10px 20px;
} */
</style>
