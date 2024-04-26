<template>
  <div @click="store.showModalFunc" class="modalWrapper">
    <div @click.stop class="modalWindow">
      <div>
        <div class="gridChildElem">
          <div class="rowSt"><b>ID:</b> {{ store.modalData?.Mfr_ID }}</div>

          <div class="rowSt"><b>Country:</b></div>
          {{ store.modalData?.Country }}
        </div>
        <div class="gridChildElem">
          <div class="rowSt"><b>Model: </b></div>
          {{ store.modalData?.Mfr_CommonName || "-" }}
        </div>
        <div>
          <div class="rowSt"><b>Mark:</b></div>
          {{ store.modalData?.Mfr_Name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { apiStore } from "../stores/api";
const store = apiStore();
</script>

<style scoped>
@import "../styles/ModalComponent.scss";
</style>
