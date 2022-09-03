import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';
import { getDatabase, ref, set } from 'firebase/database';
import { auth } from '../firebase';
import {
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    FacebookAuthProvider,
    GithubAuthProvider,
} from 'firebase/auth';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        SET_CLEAR(state) {
            state.user = null;
        },
    },
    actions: {
        async register({ dispatch, commit }, details) {
            const { email, password, name } = details;

            try {
                await createUserWithEmailAndPassword(auth, email, password);
                const uid = await dispatch('getUid');
                const database = getDatabase();

                await set(ref(database, 'users/' + uid + '/info'), {
                    bill: 10000,
                    name,
                });
            } catch (error) {
                // throw error
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert('Этот электронный адрес уже занят');
                        break;
                    case 'auth/invalid-email':
                        alert('Недействительный адрес');
                        break;
                    case 'auth/operation-not-allowed':
                        alert('Операция не разрешена');
                        break;
                    case 'auth/weak-password':
                        alert('Слабый пароль');
                        break;
                    default:
                        alert('Что-то пошло не так');
                }
                return;
            }
            commit('SET_USER', auth.currentUser);
            router.push('/signin');
        },
        getUid() {
            const user = auth.currentUser;
            return user ? user.uid : null;
        },

        async login({ commit }, details) {
            const { email, password } = details;

            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert('Пользователь не найден');
                        break;
                    case 'auth/wrong-password':
                        alert('Неправильный пароль');
                        break;
                    default:
                        alert('Что-то пошло не так');
                }
                return;
            }
            commit('SET_USER', auth.currentUser);
            router.push('/messages');
        },
        async logout({ commit }) {
            await signOut(auth);
            commit('CLEAR_USER');
            router.push('/signin');
        },
        // fetchUser({ commit }) {
        //     auth.onAuthStateChanged(async (user) => {
        //         if (user === null) {
        //             commit('CLEAR_USER');
        //         } else {
        //             commit('SET_USER', user);
        //         }
        //     });
        // },
        async forgotPassword({ commit }, email) {
            try {
                await sendPasswordResetEmail(auth, email);
            } catch (error) {
                switch (error.code) {
                    case 'auth/invalid-email':
                        alert('Недействительный адрес');
                        break;
                    case 'auth/email-already-in-use':
                        alert('Этот электронный адрес уже занят');
                        break;
                    default:
                        alert('Что-то пошло не так');
                }
                return;
            }
            commit('SET_USER', auth.currentUser);
        },
        async google() {
            const googleProvider = new GoogleAuthProvider();
            // eslint-disable-next-line no-useless-catch
            try {
                await signInWithPopup(auth, googleProvider);
            } catch (error) {
                throw error;
                // alert(error.message)
            }
        },
        async facebook() {
            const facebookProvider = new FacebookAuthProvider();
            try {
                await signInWithPopup(auth, facebookProvider);
            } catch (error) {
                alert(error.message);
            }
        },
        async gitHub({ commit }) {
            const gitHubProvider = new GithubAuthProvider();
            try {
                await signInWithPopup(auth, gitHubProvider);
            } catch (error) {
                alert(error.message);
            }
            commit('SET_USER', auth.currentUser);
        },
    },
    getters: {
        chekAuthUser(state) {
            return state.user != null;
        },
    },
    modules: {},
});
