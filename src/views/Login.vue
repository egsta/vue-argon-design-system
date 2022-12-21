<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form class="form" @submit.prevent="login(user)" >
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="user.email"
                                            type="email"
                                            id="email"
                                            required
                                            >
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="user.password"
                                            id="password"
                                            required>
                                </base-input>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
                                <div class="text-center">
                                    <base-button class="my-4"  type="primary" nativeType="submit">Sign In
                                        <!-- <input class="my-4" type="submit" value="Login"> -->
                                    </base-button>
                                    <!-- <base-button  class="my-4"  type="submit" value="login">Sign In</base-button> -->
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" class="text-light">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: 'login',
    data() {
        return {
           user:  {
                email: "",
                password: "",
                error: false
           }
        }
    },
  methods: {
    // login(user) {
    //     console.log("user", user)
    //     console.log("mapActions", ...mapActions(['login']))
    // },
    ...mapActions(['login']),
    //  login() {
        
    //    console.log(this.email);
    //    console.log(this.password);
    //  }
  }
};
</script>
<style>
</style>
