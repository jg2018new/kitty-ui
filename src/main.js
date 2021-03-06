import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import '@/theme/theme-green/index.css';
import api from '@/http'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(api);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
