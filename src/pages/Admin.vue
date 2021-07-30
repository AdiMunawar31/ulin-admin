<template>
  <Navbar class="md:flex hidden" />
  <main class="flex w-full h-full">
    <Sidebar />

    <section class="w-full h-full p-2">
      <div class="w-full border-none p-5 text-md">
        <router-view />
      </div>
    </section>
  </main>
  <Footer />
  <NavbarMobile class="flex md:hidden" />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NavbarMobile from "../components/NavbarMobile.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Navbar, NavbarMobile, Sidebar, Footer },
};
</script>
