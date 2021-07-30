<template>
  <header class='w-full bg-gray-800 p-4 flex justify-between items-center'>
    <nav class='flex items-center'>
      <img
        class='h-7 ml-3'
        src='../assets/logo_white2.png'
      />
      <div class='text-white text-xs hidden sm:block ml-5'>
        <a
          href='#'
          class='bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer'
        >Dashboard</a>
        <a
          href='#'
          class='bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1'
        >Projects</a>
        <a
          href='#'
          class='bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1'
        >Issues</a>
        <a
          href='#'
          class='bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1'
        >Boards</a>
      </div>
    </nav>

    <div class='bg-gray-900 rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-700'>
      <button class='outline-none focus:outline-none'>
        <svg
          class='w-5 text-gray-400 h-5 cursor-pointer'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
        </svg>
      </button>
      <input
        type='search'
        name
        id
        placeholder='Search'
        class='w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent'
      />
    </div>

    <div class='flex mx-3'>
      <svg
        class='h-12 md:h-7 text-gray-300 hover:text-yellow-400'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>

      <!-- SETTING -->

      <router-link to='/setting'>
        <svg
          class='h-12 mx-3 md:h-7 text-gray-100 hover:text-yellow-400 animate animate-spin'
          style='animation-duration: 7000ms'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='{2}'
            d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
          />
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='{2}'
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      </router-link>
      <span class='text-white text-sm mt-1 mr-3'>{{gettersAuthdata.username}}</span>

      <div class='w-8 h-8 cursor-pointer'>
        <img
          class='rounded-full'
          src='../assets/icon.png'
        />
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('auth', { gettersAuthdata: 'getAuthData' })
  }
}
</script>