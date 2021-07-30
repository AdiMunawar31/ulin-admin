<template>
  <Card>
    <div class='flex justify-between pt-1 ml-1 pb-10 text-white'>
      <h3 class='text-lg font-bold border-b border-yellow-500'>Edit Place Form</h3>
      <svg
        class='h-4 fill-current text-gray-300 dark:text-gray-500 cursor-pointer'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path d='M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z' />
      </svg>
    </div>

    <!-- CODE HERE -->

    <div class='mt-0 p-4'>
      <form @submit.prevent='update'>
        <!-- <input type="hidden" v-model="uid" /> -->
        <div class='mx-0 md:mx-5'>
          <!-- Main -->

          <div class='block md:flex'>
            <!-- Place Name -->
            <div class='w-full mx-0 md:mx-2'>
              <span class='text-md text-gray-300 font-semibold'>Place Name</span>
              <div class='w-full flex mt-2 mb-3 md:mb-5'>
                <input
                  v-model='name'
                  type='text'
                  class='bg-gray-800 text-yellow-300 flex-auto border border-grey-light rounded p-2'
                  required
                  placeholder='Name :'
                />
              </div>
            </div>

            <!-- Address -->
            <div class='w-full mx-0 md:mx-2'>
              <span class='text-md text-gray-300 font-semibold'>Place Address</span>
              <div class='w-full flex mt-2 mb-3 md:mb-5'>
                <input
                  v-model='address'
                  type='text'
                  class='bg-gray-800 text-yellow-300 flex-auto border border-grey-light rounded p-2'
                  required
                  placeholder='Address :'
                />
              </div>
            </div>
          </div>

          <!-- ROW 2 -->

          <div class='block md:flex'>
            <!-- City -->
            <div class='w-full mx-0 md:mx-2'>
              <span class='text-md text-gray-300 font-semibold'>Place City</span>
              <div class='w-full flex mt-2 mb-3 md:mb-5'>
                <input
                  v-model='city'
                  type='text'
                  class='bg-gray-800 text-yellow-300 flex-auto border border-grey-light rounded p-2'
                  required
                  placeholder='City :'
                />
              </div>
            </div>

            <!-- Province -->
            <div class='w-full mx-0 md:mx-2'>
              <span class='text-md text-gray-300 font-semibold'>Place Province</span>
              <div class='w-full flex mt-2 mb-3 md:mb-5'>
                <input
                  v-model='province'
                  type='text'
                  class='bg-gray-800 text-yellow-300 flex-auto border border-grey-light rounded p-2'
                  required
                  placeholder='Province :'
                />
              </div>
            </div>
          </div>

          <!-- ROW 3 -->

          <div class='block md:flex'>
            <!-- Manager -->
            <div class='w-full mx-0 md:mx-2'>
              <span class='text-md text-gray-300 font-semibold'>Manager</span>
              <div class='w-full flex mt-2 mb-3 md:mb-5'>
                <input
                  v-model='manager'
                  type='text'
                  class='bg-gray-800 text-yellow-300 flex-auto border border-grey-light rounded p-2'
                  required
                  placeholder='Manager :'
                />
              </div>
            </div>

            <!-- ticket -->
            <div class='w-full mx-0 md:mx-2'>
              <span class='text-md text-gray-300 font-semibold'>Ticket</span>
              <div class='w-full flex mt-2 mb-3 md:mb-5'>
                <input
                  v-model='ticket'
                  type='number'
                  class='bg-gray-800 text-yellow-300 flex-auto border border-grey-light rounded p-2'
                  required
                  placeholder='Ticket :'
                />
              </div>
            </div>
          </div>

          <!-- ROW 4 -->

          <div class='block md:flex'>
            <!-- Open Time -->
            <div class='w-full mx-0 md:mx-2'>
              <span class='text-md text-gray-300 font-semibold'>Open Time</span>
              <div class='w-full flex mt-2 mb-3 md:mb-0'>
                <input
                  v-model='openTime'
                  type='text'
                  class='bg-gray-800 text-yellow-300 flex-auto border border-grey-light rounded p-2'
                  required
                  placeholder='Open Time :'
                />
              </div>
              <i class='text-xs text-yellow-400'>*Masukan format, example : "08:00-18-00" .</i>
            </div>

            <!-- Open Day -->
            <div class='w-full mx-0 md:mx-2 mt-3 md:mt-0'>
              <span class='text-md text-gray-300 font-semibold'>Open Day</span>
              <div class='w-full flex mt-2 mb-3 md:mb-0'>
                <input
                  v-model='openDay'
                  type='text'
                  class='bg-gray-800 text-yellow-300 flex-auto border border-grey-light rounded p-2'
                  required
                  placeholder='Open Day :'
                />
              </div>
              <i class='text-xs text-yellow-400'>*Masukan format, example : "Senin-Sabtu" .</i>
            </div>
          </div>

          <!-- ROW 5 -->

          <div class='block md:flex mt-3 md:mt-5'>
            <!-- Image -->
            <div class='w-full mx-0 md:mx-2'>
              <span class='text-md text-gray-300 font-semibold'>Image</span>
              <div class='w-full flex mt-2 mb-3 md:mb-0'>
                <input
                  v-model='image'
                  type='text'
                  class='bg-gray-800 text-yellow-300 flex-auto border border-grey-light rounded p-2'
                  required
                  placeholder='Image :'
                />
              </div>
            </div>

            <!-- Vehicle -->
            <div class='w-full mx-0 md:mx-2'>
              <span class='text-md text-gray-300 font-semibold'>Vehicle</span>
              <div class='w-full flex mt-2 mb-3 md:mb-0'>
                <input
                  v-model='vehicle'
                  type='text'
                  class='bg-gray-800 text-yellow-300 flex-auto border border-grey-light rounded p-2'
                  required
                  placeholder='Vehicle :'
                />
              </div>
            </div>
          </div>

          <!-- textarea -->

          <div class='block md:flex flex-row my-6'>
            <div class='relative w-full appearance-none label-floating'>
              <div class='font-semibold mr-7 my-2 md:my-0 text-gray-300 text-md'>Description</div>
              <textarea
                v-model='description'
                class='mt-3 py-2 pb-20 px-4 mb-3 w-full text-yellow-300 bg-gray-800 border border-gray-400 rounded'
                id='message'
                type='text'
                required
                placeholder='Description :'
              ></textarea>
            </div>
          </div>
        </div>

        <!-- BUTTON -->

        <div class='flex p-2 mt-0 md:mt-4'>
          <div class='flex-auto flex flex-row-reverse'>
            <button
              type='submit'
              class='ml-2 flex justify-center px-3 py-1 rounded font-bold cursor-pointer hover:bg-yellow-300 bg-yellow-500 text-yellow-100'
            >
              <span>
                <i class='fas fa-save'></i> Update
              </span>
            </button>

            <!-- Button 2 -->
            <router-link
              to='/places'
              class='flex justify-center px-3 py-1 rounded font-bold cursor-pointer hover:bg-red-500 bg-red-600 text-red-200'
            >
              <span>
                <i class='fas fa-backward'></i> Back
              </span>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </Card>
</template>

<script>
import Card from "../Card.vue";

import { reactive, onMounted, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { useStore } from "vuex";

export default {
  components: { Card },
  setup() {
    const place = reactive({
      placeId: 0,
      name: "",
      address: "",
      city: "",
      province: "",
      description: "",
      image: "",
      manager: "",
      openDay: "",
      openTime: "",
      ticket: 0,
      vehicle: "",
    });

    // vuex
    const store = useStore();

    //vue route
    const route = useRoute();
    const router = useRouter();
    const placeId = route.params.placeId;

    //mounted
    onMounted(() => {
      //get API from Laravel Backend
      axios
        .get(`https://ulin-api.herokuapp.com/v1/place/${placeId}`)
        .then((response) => {
          //assign state places with response data
          place.placeId = response.data.data._id;
          place.name = response.data.data.name;
          place.address = response.data.data.address;
          place.city = response.data.data.city;
          place.province = response.data.data.province;
          place.description = response.data.data.description;
          place.image = response.data.data.image;
          place.manager = response.data.data.manager;
          place.openDay = response.data.data.openDay;
          place.openTime = response.data.data.openTime;
          place.ticket = response.data.data.ticket;
          place.vehicle = response.data.data.vehicle;
        })
        .catch((error) => console.log(error.response.data));
    });

    const update = () => {
      const payload = {
        placeId: place.placeId,
        name: place.name,
        address: place.address,
        city: place.city,
        province: place.province,
        description: place.description,
        image: place.image,
        manager: place.manager,
        openDay: place.openDay,
        openTime: place.openTime,
        ticket: place.ticket,
        vehicle: place.vehicle,
      };

      Swal.fire("Updated Success!", "Place Has Been Updated!", "success").then(
        (result) => {
          if (result.isConfirmed) {
            store.dispatch("place/EditPlace", payload);
            router.push({ name: "Places" });
            store.dispatch("place/getPlaces");
          } else {
            return false;
          }
        }
      );
    };

    //return
    return {
      ...toRefs(place),
      update,
    };
  },
};
</script>
