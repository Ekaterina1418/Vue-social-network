import Vue from "vue";
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './firebase';
import './assets/style/styles.scss';
Vue.config.productionTip = false;

Vue.use(Vuelidate)
let app
auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount('#app');
    }
});
