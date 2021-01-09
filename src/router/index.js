import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '../views/Search.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});