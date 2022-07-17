import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AutorizationPage from "../views/AutorizationPage.vue";
import CreateAccount from "../views/CreateAccount.vue";
import PasswordRecovery from "../views/PasswordRecovery.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signup",
    component: CreateAccount,
  },
  {
    path: "/signin",
    name: "signin",
    component: AutorizationPage,
  },
  {
    path: "/password-recovery",
    name: "password-recovery",
    component: PasswordRecovery,
  },
];

// const routes: Array<RouteConfig> = [
//   {

//   },
//   {
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//   },
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
