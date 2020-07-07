import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './main.vue'

Vue.config.devtools = true;
Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: '/exhibits/cite-grid/',
  routes: [
    {path: '/', component: Main, name: 'main'},
    {path: '*', redirect: '/'},
  ]
});
new Vue({
  el: '#app',
  components: { Main },
  template: '<Main/>',
  router
});