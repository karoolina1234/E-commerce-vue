import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Basket from "../views/Shopping.vue";
import Products from "../views/Products.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/basket",
    name: "Basket",
    component: Basket,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
