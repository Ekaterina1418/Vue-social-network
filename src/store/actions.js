import router from '@/router';
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


export default  {
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
            return console.log(details);
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
        commit('SET_CLEAR');
        router.push('/signin');
    },
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
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
             alert(error.message)
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
    }
};
