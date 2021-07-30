<template>
  <div class='min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-700 md:to-gray-800 to-gray-700 px-5 pd:mx-0'>
    <div class='flex flex-col bg-gray-800 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md'>
      <div class='self-center text-lg sm:text-2xl uppercase text-gray-200'>Register Your Account</div>

      <!-- EMAIL -->

      <div class='mt-10'>
        <form @submit.prevent='register'>
          <!-- NAME FORM -->

          <div
            class='flex flex-col mb-6'
            :class='{ error: v$.form.username.$errors.length }'
          >
            <label
              class='mb-1 text-gray-200'
              for='email'
            >Username</label>
            <div class='relative'>
              <div class='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 rounded-tl-sm rounded-bl-sm bg-gray-600 text-gray-300'>
                <span>
                  <i class='fas fa-user'></i>
                </span>
              </div>

              <input
                class='text-sm pl-14 pr-4 rounded-sm w-full py-2 focus:outline-none'
                id='username'
                name='username'
                placeholder='Username :'
                type='text'
                v-model='v$.form.username.$model'
              />
            </div>

            <!-- error message -->
            <div
              class='input-errors'
              v-for='(error, index) of v$.form.username.$errors'
              :key='index'
            >
              <div class='error-msg text-xs mt-1 text-red-400'>{{ error.$message }}</div>
            </div>
          </div>

          <!-- NAME FORM -->

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

          <!-- PASSWORD 2 -->

          <div
            class='flex flex-col mb-6'
            :class='{ error: v$.form.password2.$errors.length }'
          >
            <label
              class='mb-1 text-gray-200'
              for='password'
            >Repeat Password</label>
            <div class='relative'>
              <div class='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 rounded-tl-sm rounded-bl-sm bg-gray-600 text-gray-300'>
                <span>
                  <i class='fas fa-unlock-alt'></i>
                </span>
              </div>

              <input
                class='text-sm pl-14 pr-4 rounded-sm w-full py-2 focus:outline-none'
                id='password2'
                name='password2'
                placeholder='Repeat Password :'
                type='password'
                v-model='v$.form.password2.$model'
              />
            </div>
            <div
              class='input-errors'
              v-for='(error, index) of v$.form.password2.$errors'
              :key='index'
            >
              <div class='error-msg text-xs mt-1 text-red-400'>{{ error.$message }}</div>
            </div>
          </div>

          <!-- REGISTER -->

          <div class='flex w-full'>
            <button
              class='flex justify-center text-white text-sm bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-700 hover:bg-yellow-400 rounded py-2 w-full'
              type='submit'
              :disabled='v$.form.$invalid'
            >
              <span class='mr-2 uppercase'>Register</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Login -->
      <div class='flex justify-center items-center mt-6'>
        <div class='text-xs items-center text-yellow-500 hover:text-yellow-700'>
          <span>
            <i class='fas fa-user'></i>
            <router-link
              class='ml-1'
              to='/login'
            >Already have an account?</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export default {
  setup() {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        password2: '',

      }
    }
  },

  /* Validation Form */
  validations() {
    return {
      form: {
        username: {
          required,
          min: minLength(2)
        },
        email: {
          required,
          email
        },
        password: {
          required,
          min: minLength(6)
        },
        password2: {
          required,
          min: minLength(6),
          sameAsPassword: sameAs(this.form.password)
        }
      }

    }
  },

  methods: {

    ...mapActions('auth', { actionRegister: 'register' }),

    async register() {

      await this.actionRegister({ username: this.form.username, email: this.form.email, password: this.form.password });

    }
  }
}
</script>