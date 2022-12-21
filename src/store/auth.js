import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import GestorUrls from '../config/urls'
import axios from 'axios'

 Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
    }
  },
  actions: {
    async login({ commit }, user) {
        console.log("Login", user)
        console.log("User", user.email)
        console.log("Password", user.password)
       
        const email = user.email
        const password = user.password
      try {
         const res = await axios.post(`${GestorUrls.api}/auth/login`, 
           { email, password}
         )
         // con fetch no funciona, no me devolvia res.data
        // const res = await fetch('http://localhost:8005/api/user/login', {
         // {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(user)
        // })
        console.log("res", res)
        if(res.data.success){
            console.log("token", res.data.data.token)
        //const userDB = await res.json()
            commit('setToken', res.data.data.token)
            localStorage.setItem('token', res.data.data.token)
            router.push('/profile');
        }
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    getToken({commit}) {
        console.log("Get Token")
        if(localStorage.getItem('token')) {
          commit('setToken', localStorage.getItem('token'))
        } else {
          commit('setToken', null)
        }
      },
    logout({commit}) {
            commit('setToken', null)
            localStorage.removeItem('token')
     }
  },
  modules: {
  }
})


// const store = createStore({
//     state () {
//         return {
//             token: null
//         }
//     },
//     mutations: {
//         setToken(state, payload){
//             state.token = payload
//         }
//     },
//     actions: {
//         async login({ commit }, user) {
//             try {
//                 const res = await fetch('http://localhost:8005/api/user/login', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(user)
//                 })
//                 const userDB = await res.json()
//                 commit('setToken', userDB.data.token)
//                 localStorage.setItem('token', userDB.data.token)
//             } catch (error) {
//                 console.log('Error: ', error)
//             }
//         },
//         getToken({commit}) {
//             if(localStorage.getItem('token')) {
//                 commit('setToken', localStorage.getItem('token'))
//             } else {
//                 commit('setToken', null)
//             }
//         },
//         logout({commit}) {
//             commit('setToken', null)
//             localStorage.removeItem('token')
//         }
//     },
//     modules: {
//     }
// })

// export default store
