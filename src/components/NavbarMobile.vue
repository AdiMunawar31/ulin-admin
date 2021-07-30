<template>
  <div class='flex justify-around bg-gray-800 border-t border-gray-900 shadow-lg rounded fixed w-full bottom-0'>
    <div class='flex pb-1'>
      <div
        class='flex-1 group'
        v-for='(route, index) in routes'
        :key='index'
      >
        <router-link
          :to='route.link'
          class='flex items-center text-center px-5 text-gray-400 group-hover:text-yellow-500'
        >
          <span class='block px-1'>
            <i :class='route.icon'></i>
            <span class='block text-xs'>{{ route.name }}</span>
            <span class='block w-5 group-hover:bg-yellow-500 rounded-full'></span>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const routes = reactive([
      {
        name: "Home",
        icon: "fas fa-home text-lg pt-1 block text-gray-200 group-hover:text-yellow-500",
        link: "/",
      },
      {
        name: "Places",
        icon: "fas fa-compass text-lg pt-1 block text-gray-200 group-hover:text-yellow-500",
        link: "/places",
      },
      {
        name: "About",
        icon: "fas fa-users text-lg pt-1 block text-gray-200 group-hover:text-yellow-500",
        link: "/about",
      },
      {
        name: "Settings",
        icon: "fas fa-cog text-lg pt-1 block text-gray-200 group-hover:text-yellow-500",
        link: "/setting",
      },
    ]);

    return { routes };
  },
};
</script>
