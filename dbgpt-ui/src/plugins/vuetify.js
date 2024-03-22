import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#000000",
        secondary: "#333333",
        accent: "#777777",
        info: "#FFFFFF",
        text: "#000000",
      },
    },
  },
});

import "vuetify/dist/vuetify.min.css";
