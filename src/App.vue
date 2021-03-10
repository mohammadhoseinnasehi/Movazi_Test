<template>
  <v-app>
    <the-header />
    <v-main>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-main>
  </v-app>
</template>
<script>
// this is parent component of all components and i use router-view instead of <component is > because i use router
// and i use keep-alive to prevent destroy information that get
import TheHeader from "./components/TheHeader.vue";
export default { 
  components: { TheHeader },
};
</script>

