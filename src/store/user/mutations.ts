import { MutationTree } from "vuex";
import { UserState } from "./types";

export const mutations:MutationTree<UserState> ={
    SET_USER(state, user) {
        state.user = user;
    },
    SET_CLEAR(state) {
        state.user = null;
    },
}