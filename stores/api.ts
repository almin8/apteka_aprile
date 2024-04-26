import { defineStore } from "pinia";
import { Cars, State, ManufactureData } from "~/interfaces/interfaces";
import HttpService from "../services/http.service";

export const apiStore = defineStore("api", {
  state: (): State => ({
    cars: [],
    chooseComponent: false,
    showModal: false,
    modalData: null,
  }),

  actions: {
    async fetchData() {
      const data = await HttpService.get<ManufactureData>(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json"
      );

      if (data) {
        this.cars = data.Results;
      }
    },

    chooseComponentFunc() {
      this.chooseComponent = !this.chooseComponent;
    },
    showModalFunc(el: Cars) {
      this.showModal = !this.showModal;
      this.modalData = el;
    },
  },
});
