<script>
import CarouselHomePage from "./CarouselHomePage.vue";
import CardAgenda from "./CardAgenda.vue";
import CardInformation from "./CardInformation.vue";
import RecentActivities from "./RecentActivities.vue";
import ListCool from "./ListCool.vue";
import AboutMe from "./AboutMe.vue";

export default {
  name: "HomePage",
  components: {
    CarouselHomePage,
    CardAgenda,
    CardInformation,
    RecentActivities,
    ListCool,
    AboutMe,
  },
};
</script>

<template>
  <CarouselHomePage />
  <CardAgenda />
  <CardInformation />
  <RecentActivities />
  <ListCool />
  <AboutMe />
</template>
