import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/page/index';
import List from '@/page/list';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/list',
    name: 'list',
    component: List
  }]
});

//# sourceMappingURL=index-compiled.js.map