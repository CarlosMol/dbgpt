import Vue from "vue";
import VueRouter from "vue-router";
import CrudPage from "./pages/CrudPage.vue";
import Dashboard from "./pages/Dashboard.vue";
import Asistente from "./pages/Asistente.vue";
import Chat from "./pages/Chat.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/dashboard", component:Dashboard},
  { path: "/crud/:nombre", component: CrudPage,props:true },
  { path: "/asistente", component:Asistente},
  { path: "/chat", component:Chat}
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
