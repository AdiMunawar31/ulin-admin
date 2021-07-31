<template>
  <div class='w-full h-screen bg-gray-800'>
    <span class='text-yellow-500 top-1/2 flex justify-center align-center relative'>
      <i class='fas -mt-10 fa-circle-notch fa-spin fa-5x'></i>
    </span>
  </div>
</template>

<script>
import { onMounted, onUpdated } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    const store = useStore();
    const placeId = route.params.placeId;

    onMounted(() => {
      store.dispatch("place/deletePlace", { placeId });
    });

    setTimeout(() => {
      return router.push({ name: "Places" });
    }, 1500);

    // const deleted = computed(() => {
    //   return router.push({ name: "Places" });
    // });

    // return { deleted };
  },
};
</script>
