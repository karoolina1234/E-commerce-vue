import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {},
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    loadProducts() {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        this.commit("loadProducts", response.data);
      });
    },
  },
  modules: {},
});
