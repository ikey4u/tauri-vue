import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'

const routes = [
  {
    path: '/test',
    component: Test,
  },
  {
    path: '/hello',
    component: HelloWorld,
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  routes,
});

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
