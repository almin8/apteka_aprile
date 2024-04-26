<template>
  <div>
    <div class="flexCol">
      <table>
        <thead>
          <tr>
            <th class="paddingId">ID</th>
            <th class="padding">Country</th>
            <th class="padding">Model</th>
            <th class="padding">Mark</th>
          </tr>
        </thead>
        <tbody>
          <tr
            @click.stop="store.showModalFunc(car)"
            v-for="car in paginatedItems"
            :key="car.Mfr_ID"
          >
            <td class="paddingId">
              {{ car?.Mfr_ID }}
            </td>
            <td class="padding">
              {{ car?.Country }}
            </td>
            <td class="padding">
              {{ car?.Mfr_CommonName || "-" }}
            </td>
            <td class="padding">
              {{ car?.Mfr_Name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { apiStore } from "../stores/api";
const store = apiStore();

const props = defineProps({
  paginatedItems: Array,
});
</script>

<style scoped>
@import "../styles/SearchRowsComponent.scss";
</style>
