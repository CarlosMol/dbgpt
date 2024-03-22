import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from "./plugins/vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css'


new Vue({
  el: "#app",
  router,
  vuetify,
  render: (h) => h(App),
});