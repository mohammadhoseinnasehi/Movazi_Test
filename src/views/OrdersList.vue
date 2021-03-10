<template>
  <v-container fluid class="pt-0">
    <v-row class="loading pt-10 mt-16 pb-10" v-if="isLoading">
      <v-col v-for="i in 12" cols="12" :key="i">
        <v-skeleton-loader
          class="mx-auto"
          max-width="1100px"
          height="250px"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <detail-modal />
    <v-row class="pt-10 mt-16 pb-10" v-if="!isLoading">
      <v-col
        v-for="order in $store.state.orders"
        class="mt-5"
        cols="12"
        :key="order.id"
      >
        <order-card :order="order"></order-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import OrderCard from "../components/OrderCard.vue";
import DetailModal from "../components/DetailModal.vue";

export default {
  name: "OrdersList",
  components: { OrderCard, DetailModal },
  data() {
    return {
      isLoading: true,
    };
  },

  async created() {
    // i use it for get all data about orders from api and use and show it
    await axios
      .get(
        "https://easyshop.im/api/easyshop/v1/buyer/order?page=0&per_page=100",
        {
          headers: {
            Authorization: "Bearer " + this.$store.state.token,
          },
        }
      )
      .then((response) => {
        this.$store.state.orders = response.data.data.orders;
        this.isLoading = false;
      })
      .catch((e) => {
        console.log(e);
        this.isLoading = false;
      });
  },
};
</script>

<style >
.loading {
  background-color: white;
  height: 100%;
}
.v-skeleton-loader {
  border-radius: 10px !important;
  background-color: rgb(209, 209, 209);
}
</style>





