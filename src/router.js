import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/Home/Home.vue")
    },
    {
      path: "/quotes",
      name: "quotes",
      component: () => import("./components/Quotes/QuotesMain.vue")
    },
    {
      path: "/notes",
      name: "notes",
      component: () => import("./components/Notes/NotesMain.vue")
    }
  ]
});
