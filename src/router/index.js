import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
  {
    path: "/contact",
    alias: "/get-in-touch",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/ContactPage.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
1;
