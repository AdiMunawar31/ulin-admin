import { createWebHistory, createRouter } from "vue-router";
import { store } from '../vuex'

import Home from "../pages/Home.vue";
import Places from "../pages/Places/Places.vue";
import Login from "../pages/Login.vue";
// import Register from "../pages/Register.vue";
import Admin from "../pages/Admin.vue";
import CreatePlace from "../pages/Places/CreatePlace.vue";
import DetailPlace from "../pages/Places/DetailPlace.vue";
import EditPlace from "../pages/Places/EditPlace.vue";
import DeletePlace from "../pages/Places/DeletePlace.vue";
import About from "../pages/About.vue";
import Reports from "../pages/Reports.vue";
import Setting from "../pages/Setting.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { authRequired: true }
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: Register,
  //   meta: { authRequired: true }
  // },
  {
    path: "/",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
        meta: { authRequired: false },
      },

      {
        path: "places",
        name: "Places",
        component: Places,
        meta: { authRequired: false },
      },
      {
        path: "places/create",
        name: "CreatePlace",
        component: CreatePlace,
        meta: { authRequired: false },
      },
      {
        path: "places/detail/:placeId",
        name: "DetailPlace",
        component: DetailPlace,
        meta: { authRequired: false },
      },
      {
        path: "places/edit/:placeId",
        name: "EditPlace",
        component: EditPlace,
        meta: { authRequired: false },
      },
      {
        path: "places/delete/:placeId",
        name: "DeletePlace",
        component: DeletePlace,
        meta: { authRequired: false },
      },

      {
        path: "/about",
        name: "About",
        component: About,
        meta: { authRequired: false },
      },
      {
        path: "/reports",
        name: "Reports",
        component: Reports,
        meta: { authRequired: false },
      },
      {
        path: "/setting",
        name: "Setting",
        component: Setting,
        meta: { authRequired: false },
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  const authData = store.getters['auth/getAuthData']
  if (!authData.accessToken) {
    const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN')
    const REFRESH_TOKEN = localStorage.getItem('REFRESH_TOKEN')
    if (ACCESS_TOKEN) {
      const data = {
        accessToken: ACCESS_TOKEN,
        refreshToken: REFRESH_TOKEN
      }
      store.commit('auth/setAuthData', data)
    }
  }

  const isAuthenticated = store.getters['auth/isAliveToken']
  const access = localStorage.getItem("ACCESS_TOKEN");
  // console.log(`Auth : ${isAuthenticated}`);
  // console.log(`Access : ${access}`);
  // console.log(`meta : ${!to.meta.authRequired}`);


  if (!isAuthenticated && !to.meta.authRequired && !access) {
    next({ name: "Login" })
  } else if (isAuthenticated && to.meta.authRequired && access) {
    next({ name: "Home" })
  } else {
    next()
  }

});

export default router;
