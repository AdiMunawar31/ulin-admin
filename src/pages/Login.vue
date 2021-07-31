<template>
  <div class='min-h-screen flex flex-col items-center -mt-7 justify-center bg-gradient-to-r from-gray-900 md:to-gray-800 to-gray-800 px-5 pd:mx-0'>
    <div>
      <img
        class='h-28 -mb-1'
        src='../assets/icon.png'
        alt='logo'
      />
    </div>
    <div class='flex flex-col bg-gray-800 shadow-lg px-4 md:px-6 lg:px-10 py-8 rounded-md w-full max-w-md border-t-4 border-l border-r border-yellow-400'>
      <div class='self-center text-lg sm:text-2xl font-bold uppercase text-gray-200 border-b-2 border-yellow-400'>Ulin Admin</div>

      <!-- <h1 class='text-white text-3xl'>{{ email }}</h1> -->
      <!-- EMAIL -->

      <div class='mt-9'>
        <form @submit.prevent='login'>
          <div
            class='flex flex-col mb-6'
            :class='{ error: v$.form.email.$errors.length }'
          >
            <label
              class='mb-1 text-gray-200'
              for='email'
            >Email</label>
            <div class='relative'>
              <div class='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 rounded-tl-sm rounded-bl-sm bg-gray-600 text-gray-300'>
                <span>
                  <i class='fas fa-at'></i>
                </span>
              </div>

              <input
                class='text-sm pl-14 pr-4 rounded-sm w-full py-2 focus:outline-none'
                id='email'
                name='email'
                placeholder='Email :'
                type='email'
                v-model='v$.form.email.$model'
              />
            </div>

            <!-- error message -->
            <div
              class='input-errors'
              v-for='(error, index) of v$.form.email.$errors'
              :key='index'
            >
              <div class='error-msg text-xs mt-1 text-red-400'>{{ error.$message }}</div>
            </div>
          </div>

          <!-- PASSWORD -->

          <div
            class='flex flex-col mb-6'
            :class='{ error: v$.form.password.$errors.length }'
          >
            <label
              class='mb-1 text-gray-200'
              for='password'
            >Password</label>
            <div class='relative'>
              <div class='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 rounded-tl-sm rounded-bl-sm bg-gray-600 text-gray-300'>
                <span>
                  <i class='fas fa-unlock-alt'></i>
                </span>
              </div>

              <input
                class='text-sm pl-14 pr-4 rounded-sm w-full py-2 focus:outline-none'
                id='password'
                name='password'
                placeholder='Password :'
                type='password'
                v-model='v$.form.password.$model'
              />
            </div>
            <div
              class='input-errors'
              v-for='(error, index) of v$.form.password.$errors'
              :key='index'
            >
              <div class='error-msg text-xs mt-1 text-red-400'>{{ error.$message }}</div>
            </div>
          </div>

          <!-- FORGOT PASSWORD -->

          <div class='flex items-center mb-6 -mt-4'>
            <div class='flex ml-auto'>
              <a
                href='#'
                class='inline-flex text-xs sm:text-sm text-yellow-500 hover:text-yellow-700'
              >Forgot Your Password?</a>
            </div>
          </div>

          <!-- REGISTER -->

          <div class='flex w-full mb-2 md:mb-5'>
            <button
              type='submit'
              :disabled='v$.form.$invalid'
              class='flex justify-center text-white text-sm bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-700 hover:bg-yellow-400 rounded py-2 w-full'
            >
              <span class='mr-2 uppercase'>Login</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Login -->
      <!-- <div class='flex justify-center items-center mt-6'>
        <div class='text-xs items-center text-yellow-500 hover:text-yellow-700'>
          <span>
            <i class='fas fa-user-plus'></i>
            <router-link
              to='/register'
              class='ml-1'
            >You don't have an account?</router-link>
          </span>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  setup() {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },

  /* Validation Form */
  validations() {
    return {
      form: {
        email: {
          required,
          email
        },
        password: {
          required,
          min: minLength(6)
        }
      }

    }
  },


  methods: {

    ...mapActions('auth', { actionLogin: 'login' }),

    async login() {

      await this.actionLogin({ email: this.form.email, password: this.form.password })

    }
  }

};
</script>
