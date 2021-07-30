<template>
  <card>
    <div v-if='data.isNotLoading'>
      <div class='md:w-4/5 mx-auto py-3 md:py-16 flex flex-wrap'>
        <img
          alt='place image'
          class='md:w-1/2 w-full max-h-96 mt-0 md:mt-3 object-cover object-center rounded'
          :src='data.image'
        />

        <div class='md:w-1/2 w-full md:pl-10 mt-5 md:py-6 md:mt-0'>
          <h2 class='text-sm title-font text-gray-300 tracking-widest'>PLACE NAME</h2>
          <h1 class='text-gray-200 text-3xl title-font font-medium mb-1'>{{ data.name }}</h1>
          <div class='flex my-4'>
            <!-- STAR REVIEW -->

            <span class='flex items-center'>
              <i class='fas fa-star text-yellow-500 mr-1'></i>
              <i class='fas fa-star text-yellow-500 mr-1'></i>
              <i class='fas fa-star text-yellow-500 mr-1'></i>
              <i class='fas fa-star text-yellow-500 mr-1'></i>
              <i class='far fa-star text-yellow-500'></i>
              <span class='text-gray-500 ml-3'>26 Reviews</span>
            </span>

            <!-- DESCRIPTION -->
          </div>
          <p class='leading-relaxed text-gray-300 px-3 md:px-0'>{{ data.description }}</p>

          <div class='flex mt-10 px-3 md:px-0'>
            <span class='title-font font-medium text-2xl text-green-100'>
              Rp.{{
              Intl.NumberFormat(["ban", "id"]).format(data.ticket)
              }}
            </span>
            <router-link
              to='/places'
              class='flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded'
            >
              <span>
                <i class='fas fa-backward'></i> Back
              </span>
            </router-link>
          </div>
        </div>
      </div>

      <TableDetail
        :name='data.name'
        :manager='data.manager'
        :openDay='data.openDay'
        :openTime='data.openTime'
        :ticket='data.ticket'
        :vehicle='data.vehicle'
      />
    </div>

    <div v-else>
      <SkeletonDetail />
    </div>
  </card>
</template>

<script>
import SkeletonDetail from "../SkeletonDetail.vue";
import Card from "../Card.vue";
import TableDetail from "../widgets/Places/TableDetail.vue";

import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  components: { Card, SkeletonDetail, TableDetail },
  setup() {
    const data = reactive({
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
      isNotLoading: false,
    });

    //vue route
    const route = useRoute();
    // const router = useRouter();
    const placeId = route.params.placeId;

    //mounted
    onMounted(() => {
      //get API from Backend
      axios
        .get(`https://ulin-api.herokuapp.com/v1/place/${placeId}`)
        .then((response) => {
          //assign state datas with response data
          data.name = response.data.data.name;
          data.address = response.data.data.address;
          data.city = response.data.data.city;
          data.province = response.data.data.province;
          data.description = response.data.data.description;
          data.image = response.data.data.image;
          data.manager = response.data.data.manager;
          data.openDay = response.data.data.openDay;
          data.openTime = response.data.data.openTime;
          data.ticket = response.data.data.ticket;
          data.vehicle = response.data.data.vehicle;
          data.isNotLoading = true;
        })
        .catch((error) => console.log(error.response.data));
    });

    //return
    return { data };
  },
};
</script>
