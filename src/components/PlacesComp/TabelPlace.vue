<template>
  <Card>
    <Expense />

    <div class='flex justify-between py-6 md:py-3 px-2 md:px-5 text-white'>
      <h3 class='text-lg font-semibold'>Table Data :</h3>
      <router-link
        to='/places/create'
        class='px-4 p-1 text-gray-900 transform bg-yellow-400 hover:bg-yellow-500 border-yellow-600 rounded-sm text-md'
      >
        <i class='fas fa-plus'></i>
        <span class='font-semibold'>Add Place</span>
      </router-link>
    </div>

    <!-- CODE HERE -->

    <div class='w-full p-0 md:p-3'>
      <div
        class='bg-gray-700 shadow-md rounded overflow-x-scroll'
        v-if='isLoading'
      >
        <table class='min-w-max w-full'>
          <thead>
            <tr class='bg-gray-900 text-gray-300 uppercase text-sm leading-normal'>
              <th class='py-3 px-6 text-left'>No</th>
              <th class='py-3 px-6 text-left'>Place Name</th>
              <th class='py-3 px-6 text-left'>Address</th>
              <th class='py-3 px-6 text-center'>City</th>
              <th class='py-3 px-6 text-center'>Province</th>
              <th class='py-3 px-6 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody class='text-gray-300 text-sm font-light'>
            <TableBody :places='data' />
          </tbody>
        </table>
        <!-- This is an Pagination component -->
        <Pagination />
      </div>
      <div
        class='w-full'
        v-else
      >
        <Loader />
      </div>
    </div>
  </Card>
</template>

<script>
import Expense from "../widgets/Places/Expense.vue";
import TableBody from "../widgets/Places/TableBody.vue";
import Pagination from "../widgets/Places/Pagination.vue";
import Card from "../Card.vue";
import Loader from "../Loader.vue";

import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  components: { Expense, TableBody, Pagination, Card, Loader },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("place/getPlaces");
    });

    const isLoading = computed(() => {
      return store.state.place.isLoading;
    });

    const data = computed(() => {
      return store.state.place.places;
    });

    return { data, isLoading };
  },

};
</script>
