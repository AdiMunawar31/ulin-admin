<template>
  <Card>
    <Banner />

    <div class='flex pt-7 mx-5 pb-3 text-white'>
      <h3 class='text-lg font-bold border-b border-yellow-500'>ULIN TEAM</h3>
    </div>

    <div class='w-full block md:flex'>
      <Profile
        images='https://avatars.githubusercontent.com/u/57015700?v=4'
        name='Adi Munawar'
        place='Kuningan'
        skill='WEB DEVELOPER'
      />
      <Profile
        images='https://avatars.githubusercontent.com/u/71208589?v=4'
        name='Agung Saepudin'
        place='Cirebon'
        skill='WEB DEVELOPER'
      />
    </div>
  </Card>
</template>

<script>
import Card from "../Card.vue";
import Banner from "../widgets/AboutComp/Banner.vue";
import Profile from "../widgets/AboutComp/Profile.vue";

export default {
  components: { Card, Banner, Profile },
  setup() {},
};
</script>
