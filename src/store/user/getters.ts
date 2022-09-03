import { GetterTree } from "vuex";
import { UserState } from "./types";

export const getters:GetterTree<UserState,unknown> ={
    chekAuthUser(state) {
        return state.user != null;
    },
}