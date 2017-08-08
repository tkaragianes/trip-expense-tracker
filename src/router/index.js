import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import List from '@/components/List';
import Add from '@/components/Add';
import Send from '@/components/Send';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path: '/add',
      name: 'Add',
      component: Add,
    },
    {
      path: '/send',
      name: 'Send',
      component: Send,
    },
  ],
});
