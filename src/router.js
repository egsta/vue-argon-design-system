import Vue from "vue";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import store from './store/auth'
import VueRouter from "vue-router";
import Logout from "./views/Logout.vue";
Vue.use(VueRouter);


  const routes= [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/logout",
      name: "logout",
      components: {
        header: AppHeader,
        default: Logout,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      },
       // Indicamos que la ruta requiere autenticación
      meta: { requireAuth: true }
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// Verificando si hay token en el estado
// Este método realiza una logica al cambiar de rutas
router.beforeEach((to, from, next)=>{
  console.log("Store", store.state.token)
  // Usamos to para verificar si requiera autenticación
  const protectedRoute = to.matched.some(record => record.meta.requireAuth)
  // Procedemos a verificar el token
  if (protectedRoute && store.state.token === null) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router
  // scrollBehavior: to => {
  //   if (to.hash) {
  //     return { selector: to.hash };
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // }



// Verificando si hay token en el estado
// Este método realiza una logica al cambiar de rutas
// router.beforeEach((to, from, next)=>{
//   // Usamos to para verificar si requiera autenticación
//   const protectedRoute = to.matched.some(record => record.meta.requireAuth)
//   // Procedemos a verificar el token
//   if (protectedRoute && store.state.token === null) {
//     next({name: '#'})
//   } else {
//     next()
//   }
// })
