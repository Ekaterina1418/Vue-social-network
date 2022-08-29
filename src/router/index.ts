import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AutorizationPage from '../views/AutorizationPage.vue';
import CreateAccount from '../views/CreateAccount.vue';
import PasswordRecovery from '../views/PasswordRecovery.vue';
import FrendsMessages from '../views/FrendsMessages.vue';
import { auth } from '../firebase';
Vue.use(VueRouter);

const routes = [
   
    {
        path: '/',
        name: 'signup',
        component: CreateAccount,
       
    },
    {
        path: '/signin',
        name: 'signin',
        component: AutorizationPage,
        meta: {
          requiresAuth: true,
      },
    },
    {
        path: '/password-recovery',
        name: 'password-recovery',
        component: PasswordRecovery,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/messages',
        name: 'messages',
        component: FrendsMessages,
        meta: {
            requiresAuth: true,
        },
    },
   
];

// const routes: Array<RouteConfig> = [
//   {

//   },
//   {
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//   },
// ];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
router.beforeEach((to,from,next) => {
  if(to.path === './signin' && auth.currentUser) {
    next('/messages')
    return
  }
   if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/')
    return
   }
   
   next()
})
export default router;
