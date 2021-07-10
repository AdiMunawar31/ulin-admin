import { createApp } from "vue";
import { store } from "./vuex";
import App from "./App.vue";
import router from "./router";
import "./index.css";

createApp(App).use(router).use(store).mount("#app");
