import Vue from "vue";
import App from "./App.vue";
import signatureH5 from "./packages";

Vue.use(signatureH5);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
