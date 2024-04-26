<template>
  <div>
    <div class="tile">
      <div
        @click.stop="store.showModalFunc(car)"
        v-for="car in paginatedItems"
        :key="car.Mfr_ID"
        class="gridBord"
      >
        <div class="gridChildElem"><b>ID:</b> {{ car?.Mfr_ID }}</div>
        <div class="gridChildElem"><b>Country:</b> {{ car?.Country }}</div>
        <div class="gridChildElem">
          <b>Model:</b> {{ car?.Mfr_CommonName || "-" }}
        </div>
        <div class="gridChildElem"><b>Mark: </b> {{ car?.Mfr_Name }}</div>
      </div>
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
@import "../styles/SearchGridComponent.scss";
</style>
