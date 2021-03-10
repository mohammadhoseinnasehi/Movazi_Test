<template>
  <v-app-bar app dark flat dense color="#ffcc00" class="pr-0">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    سفارشات
    <v-spacer></v-spacer>
    <v-btn rounded color="#fff7d9" elevation="0">
      <v-img src="../assets/images/logo.png" contain 
      width="5rem"
      ></v-img>
      <v-img
        src="../assets/images/basket.png"
        contain
        width="1.5rem"
        class="mr-5"
      ></v-img>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
    name: "TheHeader",
    
}
</script>
