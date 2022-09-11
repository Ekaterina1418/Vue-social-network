
import { Module } from "vuex";
import { UserState } from "./types";
import { getters } from "@/store/user/getters";
import { mutations } from "@/store/user/mutations"
import { actions } from "@/store/user/actions";
const state: UserState = {
    user: null
}

export  const user: Module<UserState,unknown> ={
     state,
     getters,
     mutations, 
     actions
}