<template>
  <div class='h-full w-full mt-5 mb-10'>
    <!-- Statistics Cards -->

    <Stats />

    <!-- ./Statistics Cards -->

    <Card>
      <div class='flex justify-between pt-1 ml-1 text-white'>
        <h3 class='text-lg font-bold border-b border-yellow-500'>ULIN PANEL ADMIN</h3>
        <svg
          class='h-4 fill-current text-gray-300 dark:text-gray-500 cursor-pointer'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7
            0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z' />
        </svg>
      </div>
      <!--  CODE HERE ------------------------------------------------------------------------------------------ -->
      <div class='flex flex-wrap px:0 md:px-7'>
        <PlaceCard
          image='https://1.bp.blogspot.com/-FE0ARo-3_kc/X27to4Vr22I/AAAAAAAAF5w/_NDsobXXV781gamgzuMQV28TBm_VjhSmwCLcBGAsYHQ/s1080/tiket-masuk-kebun-raya-kuningan.jpg'
          name='Taman Kuning'
          place=' Kuningan, Jawa Barat'
        />
        <PlaceCard
          image='https://images.unsplash.com/photo-1555071941-45994dc79d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1534&amp;q=80'
          name='Terasering Panyaweuan'
          place=' Majalengka, Jawa Barat'
        />
      </div>
      <PlaceView />
      <CardInfo />
    </Card>
  </div>
</template>

<script>
import Card from "../Card.vue";
import CardInfo from "../widgets/Dashboard/CardInfo.vue";
import Stats from "../widgets/Dashboard/Stats.vue";
import PlaceCard from "../widgets/Dashboard/PlaceCard.vue";
import PlaceView from "../widgets/Dashboard/PlaceView.vue";

export default {
  components: { Card, CardInfo, Stats, PlaceCard, PlaceView },
};
</script>
