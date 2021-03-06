import './init';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
