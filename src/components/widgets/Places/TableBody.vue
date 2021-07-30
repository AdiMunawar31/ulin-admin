<template>
  <tr
    v-for="(place, index) in places"
    :key="index"
    class="border-b border-gray-400 hover:bg-gray-800"
  >
    <td class="py-3 px-6 text-left font-bold">{{ index + 1 }}</td>
    <td class="py-3 px-6 text-left">
      <div class="flex items-start md:items-center">
        <span class="font-medium">{{ place.name }}</span>
      </div>
    </td>
    <td class="py-3 px-6 text-left">
      <div class="flex items-center">
        <span>{{ place.address }}</span>
      </div>
    </td>
    <td class="py-3 px-6 text-center">
      <div class="flex items-center justify-center">
        {{ place.city }}
      </div>
    </td>
    <td class="py-3 px-6 text-center">
      {{ place.province }}
    </td>

    <!-- route by id -->

    <td class="py-3 px-6 text-center">
      <!-- detail -->

      <router-link
        :to="`/places/detail/${place.id}`"
        class="w-2 mr-2 transform hover:scale-110"
      >
        <span
          class="rounded text-white bg-green-600 hover:bg-green-500 px-2 py-1"
        >
          <i class="fas fa-info-circle"></i>
        </span>
      </router-link>

      <!-- Edit -->

      <router-link
        :to="`/places/edit/${place.id}`"
        class="w-2 mr-2 transform hover:scale-110"
      >
        <span
          class="rounded text-white bg-blue-600 hover:bg-blue-500 px-2 py-1"
        >
          <i class="fas fa-edit"></i>
        </span>
      </router-link>

      <!-- Delete -->

      <button
        @click="del(`${place.id}`)"
        class="w-2 mr-2 transform hover:scale-110"
      >
        <span class="rounded text-white bg-red-500 hover:bg-red-600 px-2 py-1">
          <i class="fas fa-trash"></i>
        </span>
      </button>
    </td>
  </tr>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    places: {
      type: Object,
      default: {},
    },
  },
  setup() {
    const router = useRouter();

    const del = (placeId) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#e58808",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete!",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push({ name: "DeletePlace", params: { placeId } });

          Swal.fire("Delete Success!", "Place has been Delete.", "success");
        } else {
          return false;
        }
      });
    };

    return { del };
  },
};
</script>
