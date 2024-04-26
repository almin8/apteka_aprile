<template>
  <div class="base">
    <div class="searchBut">
      <input
        v-model.trim="searchQuery"
        type="text"
        name=""
        id=""
        class="padding"
      />

      <button @click="store.chooseComponentFunc()">
        {{ store.chooseComponent ? "Сетка" : "Строка" }}
      </button>
    </div>

    <Teleport to="body"> <ModalComponent v-if="store.showModal" /> </Teleport>

    <SearchRowsComponent
      v-if="!store.chooseComponent && paginatedItems.length"
      :paginatedItems="paginatedItems"
    />
    <SearchGridComponent
      v-if="store.chooseComponent && paginatedItems.length"
      :paginatedItems="paginatedItems"
    />

    <div v-if="!paginatedItems.length">Нет результатов</div>

    <div class="flexRow">
      <div
        :class="{ currentPageClass: currentPage == el }"
        @click="nextPage(el)"
        class="gridBord"
        v-for="el in totalPages"
        :key="el"
      >
        {{ el }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { apiStore } from "../stores/api";
import { computed, onMounted, ref } from "vue";

const store = apiStore();

const chooseComponent = ref<boolean>(true);

const searchQuery = ref<string>("");
onMounted(() => {
  store.fetchData();
});
const cars = computed(() => store.cars);

const pages = ref<number>(null);

const currentPage = ref<number>(1);
const pageSize = ref<number>(24);

const totalPages = computed<number>(() => {
  return (pages.value = Math.ceil(filteredItems.value.length / pageSize.value));
});

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  return filteredItems.value.slice(startIndex, endIndex);
});

const filteredItems = computed(() => {
  currentPage.value = 1;
  const searchTerm = searchQuery.value.toLowerCase();
  return cars.value.filter((item) => {
    return Object.values(item).some(
      (value) => value?.toString()?.toLowerCase().includes(searchTerm) || false
    );
  });
});

const nextPage = (numPage: number) => {
  currentPage.value = numPage;
};
</script>

<style lang="scss" scoped>
@import "../styles/SearchComponent.scss";
</style>
