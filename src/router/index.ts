import Vue from 'vue';
import VueRouter from 'vue-router';
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
    },
    {
        path: '/password-recovery',
        name: 'password-recovery',
        component: PasswordRecovery,
       
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
router.beforeEach((to, from, next) => {
    const currentUser = auth.currentUser;
    const requierAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (requierAuth && !currentUser) {
        next('/');
    } else {
        next();
    }
});
export default router;
