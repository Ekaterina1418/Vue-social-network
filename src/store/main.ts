import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { UserState} from './user/types';
import { user } from '@/store/user';

Vue.use(Vuex);

const store: StoreOptions<UserState> = {
// state: {
// user: null
// },
modules: {
    user
}
}
export default new Vuex.Store<UserState>(store)