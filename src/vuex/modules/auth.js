import axios from "axios"
import router from '../../router'
import { aliveToken, jwtDecrypt } from "../../shared/jwt_helper"


const state = () => ({
    authData: {
        accessToken: '',
        refreshToken: '',
        email: '',
        username: '',
        userId: '',
        exp: '',
    },
})

const getters = {

    getAuthData(state) {
        return state.authData
    },

    isAliveToken(state) {
        if (!state.authData.exp) {
            return false
        }
        return aliveToken(state.authData.exp)
    }
}

const mutations = {

    setAuthData(state, data) {

        localStorage.setItem('ACCESS_TOKEN', data.accessToken)
        localStorage.setItem('REFRESH_TOKEN', data.refreshToken)

        const decryptedAuth = jwtDecrypt(data.accessToken)
        // console.log(decryptedAuth);

        const newAuthData = {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            email: data.email,
            username: decryptedAuth.sub,
            userId: decryptedAuth.aud,
            exp: decryptedAuth.exp,
        }
        state.authData = newAuthData

    },

}

const actions = {
    async login({ commit }, { email, password }) {

        await axios.post('https://ulin-api.herokuapp.com/auth/login', { email, password })
            .then(response => {
                commit('setAuthData', response.data)
                Swal.fire(
                    'Login Success!',
                    'Welcome to ULIN ADMIN!',
                    'success'
                ).then(result => {
                    if (result.isConfirmed) {
                        router.push({ path: '/' })
                    } else {
                        return false
                    }
                })
            })
            .catch(err => {
                console.log(err);
                Swal.fire(
                    'Error!',
                    `Error: ${err.message}`,
                    'error'
                )

            })

    },

    // async register({ commit }, { username, email, password }) {

    //     await axios.post(`https://ulin-api.herokuapp.com/auth/register`, { username, email, password })
    //         .then(response => {
    //             Swal.fire(
    //                 'Register Success!',
    //                 `Hello ${username}, Please Login!`,
    //                 'success'
    //             ).then(result => {
    //                 if (result.isConfirmed) {
    //                     router.push({ path: '/login' })
    //                 } else {
    //                     return false
    //                 }
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             Swal.fire(
    //                 'Error!',
    //                 `Error: ${err.message}`,
    //                 'error'
    //             )

    //         })
    // },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}