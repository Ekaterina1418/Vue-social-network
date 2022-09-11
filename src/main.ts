import Vue from 'vue';
import Vuelidate from 'vuelidate';
import "./vuelidate/registerComponentHooks";
import App from './App.vue';
import router from './router';
import store from '@/store/main'
import { auth } from './firebase';
import './assets/style/styles.scss';
import { CombinedVueInstance } from 'vue/types/vue';
Vue.config.productionTip = false;

Vue.use(Vuelidate as never);
let app: CombinedVueInstance<Vue, object, object, object, Record<never, any>>;
auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount('#app');
    }
});
