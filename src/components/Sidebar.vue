<template>
  <aside class='w-80 min-h-auto bg-gray-800 shadow-md hidden sm:block'>
    <div class='flex flex-col justify-between min-h-screen p-4 bg-gray-800'>
      <div class='text-sm'>
        <div class='bg-gray-900 text-white p-5 rounded cursor-pointer font-bold'>
          <i class='fas fa-shield-alt mr-2'></i> ULIN ADMIN
        </div>

        <!-- DASHBOARD ---------------------------------------------------------------------------------------------- -->

        <div
          :key='index'
          v-for='(route, index) in routes'
        >
          <router-link
            :to='route.to'
            class='bg-gray-900 flex items-center text-white p-2 rounded mt-2 cursor-pointer focus:bg-gray-700 focus:text-yellow-300'
          >
            <span>
              <i :class='route.icon'></i>
              {{ route.name }}
            </span>
          </router-link>
        </div>

        <!-- LOGOUT ----------------------------------------------------------------------------------------------- -->

        <div
          @click='logout'
          class='flex mt-7 p-2 text-white bg-gradient-to-br from-red-500 to-red-700 hover:bg-red-400 rounded justify-start items-center cursor-pointer text-center text-sm'
        >
          <button class='rounded text-center'>
            <span class='font-semibold'>
              <i class='fas fa-sign-out-alt mr-1'></i>
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from 'vue-router';
export default {
  setup() {
    const routes = reactive([
      { name: "Dashboard", icon: "fas fa-tachometer-alt mr-2", to: "/" },
      { name: "Places", icon: "fas fa-compass mr-2", to: "/places" },
      { name: "About", icon: "fas fa-users mr-2", to: "/about" },
      { name: "Reports", icon: "fas fa-bug mr-2", to: "/reports" },
    ]);

    const router = useRouter()

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



    return { routes, logout };
  },
};
</script>
