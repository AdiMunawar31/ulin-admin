import { createStore } from "vuex";
import auth from './modules/auth'
import place from './modules/place'

export const store = createStore({
  modules: {
    auth,
    place
  }
});
