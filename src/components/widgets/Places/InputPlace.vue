<template>
  <div class="block md:flex">
    <!-- Place Name -->
    <div class="w-full mx-0 md:mx-2">
      <span class="text-md text-gray-300 font-semibold">Place Name</span>
      <div class="w-full flex mt-2 mb-3 md:mb-5">
        <input
          v-model="name_"
          type="text"
          class="
            bg-gray-800
            text-yellow-300
            flex-auto
            border border-grey-light
            rounded
            p-2
          "
          placeholder="Name :"
        />
      </div>
    </div>

    <!-- Address -->
    <div class="w-full mx-0 md:mx-2">
      <span class="text-md text-gray-300 font-semibold">Place Address</span>
      <div class="w-full flex mt-2 mb-3 md:mb-5">
        <input
          v-model="address"
          type="text"
          class="
            bg-gray-800
            text-yellow-300
            flex-auto
            border border-grey-light
            rounded
            p-2
          "
          placeholder="Address :"
        />
      </div>
    </div>
  </div>

  <!-- ROW 2 -->

  <div class="block md:flex">
    <!-- City -->
    <div class="w-full mx-0 md:mx-2">
      <span class="text-md text-gray-300 font-semibold">Place City</span>
      <div class="w-full flex mt-2 mb-3 md:mb-5">
        <input
          v-model="city_"
          type="text"
          class="
            bg-gray-800
            text-yellow-300
            flex-auto
            border border-grey-light
            rounded
            p-2
          "
          placeholder="City :"
        />
      </div>
    </div>

    <!-- Province -->
    <div class="w-full mx-0 md:mx-2">
      <span class="text-md text-gray-300 font-semibold">Place Province</span>
      <div class="w-full flex mt-2 mb-3 md:mb-5">
        <input
          v-model="province_"
          type="text"
          class="
            bg-gray-800
            text-yellow-300
            flex-auto
            border border-grey-light
            rounded
            p-2
          "
          placeholder="Province :"
        />
      </div>
    </div>
  </div>

  <!-- ROW 3 -->

  <div class="block md:flex">
    <!-- Manager -->
    <div class="w-full mx-0 md:mx-2">
      <span class="text-md text-gray-300 font-semibold">Manager</span>
      <div class="w-full flex mt-2 mb-3 md:mb-5">
        <input
          v-model="manager_"
          type="text"
          class="
            bg-gray-800
            text-yellow-300
            flex-auto
            border border-grey-light
            rounded
            p-2
          "
          placeholder="Manager :"
        />
      </div>
    </div>

    <!-- ticket -->
    <div class="w-full mx-0 md:mx-2">
      <span class="text-md text-gray-300 font-semibold">Ticket</span>
      <div class="w-full flex mt-2 mb-3 md:mb-5">
        <input
          v-model="ticket_"
          type="number"
          class="
            bg-gray-800
            text-yellow-300
            flex-auto
            border border-grey-light
            rounded
            p-2
          "
          placeholder="Ticket :"
        />
      </div>
    </div>
  </div>

  <!-- ROW 4 -->

  <div class="block md:flex">
    <!-- Open Time -->
    <div class="w-full mx-0 md:mx-2">
      <span class="text-md text-gray-300 font-semibold">Open Time</span>
      <div class="w-full flex mt-2 mb-3 md:mb-0">
        <input
          v-model="openTime_"
          type="text"
          class="
            bg-gray-800
            text-yellow-300
            flex-auto
            border border-grey-light
            rounded
            p-2
          "
          placeholder="Open Time :"
        />
      </div>
      <i class="text-xs text-yellow-400"
        >*Masukan format, example : "08:00-18-00" .
      </i>
    </div>

    <!-- Open Day -->
    <div class="w-full mx-0 md:mx-2 mt-3 md:mt-0">
      <span class="text-md text-gray-300 font-semibold">Open Day</span>
      <div class="w-full flex mt-2 mb-3 md:mb-0">
        <input
          v-model="openDay_"
          type="text"
          class="
            bg-gray-800
            text-yellow-300
            flex-auto
            border border-grey-light
            rounded
            p-2
          "
          placeholder="Open Day :"
        />
      </div>
      <i class="text-xs text-yellow-400"
        >*Masukan format, example : "Senin-Sabtu" .
      </i>
    </div>
  </div>

  <!-- ROW 5 -->

  <div class="block md:flex mt-3 md:mt-5">
    <!-- Image -->
    <div class="w-full mx-0 md:mx-2">
      <span class="text-md text-gray-300 font-semibold">Image</span>
      <div class="w-full flex mt-2 mb-3 md:mb-0">
        <input
          v-model="image_"
          type="text"
          class="
            bg-gray-800
            text-yellow-300
            flex-auto
            border border-grey-light
            rounded
            p-2
          "
          placeholder="Image :"
        />
      </div>
    </div>

    <!-- Vehicle -->
    <div class="w-full mx-0 md:mx-2">
      <span class="text-md text-gray-300 font-semibold">Vehicle</span>
      <div class="w-full flex mt-2 mb-3 md:mb-0">
        <input
          v-model="vehicle_"
          type="text"
          class="
            bg-gray-800
            text-yellow-300
            flex-auto
            border border-grey-light
            rounded
            p-2
          "
          placeholder="Vehicle :"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  props: {
    name: { String, default: "" },
    address: { String, default: "" },
    city: { String, default: "" },
    province: { String, default: "" },
    manager: { String, default: "" },
    ticket: { Number, default: 0 },
    openTime: { String, default: "" },
    openDay: { String, default: "" },
    image: { String, default: "" },
    vehicle: { String, default: "" },
  },
  emits: [
    "update:name",
    "update:address",
    "update:city",
    "update:province",
    "update:manager",
    "update:ticket",
    "update:openDay",
    "update:openTime",
    "update:image",
    "update:vehicle",
  ],
  setup(props, { emit }) {
    const {
      name,
      address,
      city,
      province,
      manager,
      ticket,
      openTime,
      openDay,
      image,
      vehicle,
    } = toRefs(props);

    const name_ = computed({
      get: () => name.value,
      set: (val) => emit("update:name", val),
    });

    const address_ = computed({
      get: () => address.value,
      set: (val) => emit("update:address", val),
    });

    const city_ = computed({
      get: () => city.value,
      set: (val) => emit("update:city", val),
    });

    const province_ = computed({
      get: () => province.value,
      set: (val) => emit("update:province", val),
    });

    const manager_ = computed({
      get: () => manager.value,
      set: (val) => emit("update:manager", val),
    });

    const ticket_ = computed({
      get: () => ticket.value,
      set: (val) => emit("update:ticket", val),
    });

    const openTime_ = computed({
      get: () => openTime.value,
      set: (val) => emit("update:openTime", val),
    });

    const openDay_ = computed({
      get: () => openDay.value,
      set: (val) => emit("update:openDay", val),
    });

    const image_ = computed({
      get: () => image.value,
      set: (val) => emit("update:image", val),
    });

    const vehicle_ = computed({
      get: () => vehicle.value,
      set: (val) => emit("update:vehicle", val),
    });

    return {
      name_,
      address_,
      city_,
      province_,
      manager_,
      ticket_,
      openTime_,
      openDay_,
      image_,
      vehicle_,
    };
  },
};
</script>
