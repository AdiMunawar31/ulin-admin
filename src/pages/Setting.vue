<template>
  <div class='card border rounded bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 w-full hover:shadow-none relative flex flex-col mx-auto shadow-lg'>
    <div class='profile w-full flex m-3 ml-4 text-white'>
      <img
        class='w-28 h-28 p-1 bg-gray-900 rounded-full'
        src='../assets/icon.png'
        alt
      />
      <div class='title mt-9 ml-3 font-bold flex flex-col'>
        <div class='uppercase text-sm mb-2 break-words'>{{ gettersAuthdata.username }}</div>
        <!--  add [dark] class for bright background -->
        <div class='add font-semibold text-sm italic dark'>Admin</div>
      </div>
    </div>
    <div class='buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3'>
      <div class='add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white'>Contact</div>
      <!-- <div class="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Bio</div> -->
    </div>
  </div>

  <div class='flex items-center border-b bg-gray-900 py-3 shadow rounded mt-2 px-3'>
    <div class='flex items-center rounded-lg rounded-l-none'>
      <p class='text-sm font-semibold text-gray-300'>
        <i class='fas fa-moon mr-2'></i> Switch Dark Mode
      </p>
    </div>
    <div class='flex justify-end flex-1'>
      <div class='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
        <input
          type='checkbox'
          name='toggle'
          id='toggle'
          class='toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer'
        />
        <label
          for='toggle'
          class='toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer'
        ></label>
      </div>
    </div>
  </div>

  <div class='flex items-center border-b bg-gradient-to-br bg-gray-900 py-3 shadow rounded mt-3 px-3'>
    <div class='flex items-center rounded-lg rounded-l-none'>
      <p class='text-sm font-semibold text-gray-300'>
        <i class='fas fa-bookmark mr-2'></i> Bookmark
      </p>
    </div>
  </div>

  <div class='flex items-center border-b bg-gradient-to-br bg-gray-900 py-3 shadow rounded mt-3 px-3'>
    <div class='flex items-center rounded-lg rounded-l-none'>
      <p class='text-sm font-semibold text-gray-300'>
        <i class='fas fa-question-circle mr-2'></i> Help
      </p>
    </div>
  </div>

  <div class='flex items-center border-b bg-gradient-to-br bg-gray-900 py-3 shadow rounded mt-3 px-3'>
    <div class='flex items-center rounded-lg rounded-l-none'>
      <p class='text-sm font-semibold text-gray-300'>
        <i class='fas fa-envelope-open-text mr-2'></i> Support Inbox
      </p>
    </div>
  </div>

  <div class='flex items-center border-b bg-gradient-to-br bg-gray-900 py-3 shadow rounded mt-3 px-3'>
    <div class='flex items-center rounded-lg rounded-l-none'>
      <p class='text-sm font-semibold text-gray-300'>
        <i class='fas fa-exclamation-triangle mr-2'></i> Report a Problem
      </p>
    </div>
  </div>

  <!-- LOGOUT -->

  <div
    @click='logout'
    class='md:hidden flex items-center bg-gradient-to-br from-red-500 to-red-700 py-3 shadow rounded mt-5 px-3'
  >
    <div class='flex items-center rounded-lg rounded-l-none'>
      <p class='text-sm font-semibold text-gray-300'>
        <i class='fas fa-sign-out-alt mr-2'></i> Logout
      </p>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { computed } from 'vue';
// import Reports from "../components/ReportsComp/Reports.vue";

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    const gettersAuthdata = computed(() => {
      return store.state.auth.authData
    })

    const logout = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to logout!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#e58808",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('ACCESS_TOKEN')
          localStorage.removeItem('REFRESH_TOKEN')
          router.push({ path: '/login' });

          Swal.fire("Logout Success!", "Place has been Logout.", "success");
        } else {
          return false;
        }
      });
    }

    return { logout, gettersAuthdata }
  },
  // computed: {
  //   ...mapGetters('auth', { gettersAuthdata: 'getAuthData' })
  // }
};
</script>
