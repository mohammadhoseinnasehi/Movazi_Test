<template>
  <v-row justify="center">
    <v-dialog
      v-model="$store.state.detailDialog"
      transition="dialog-bottom-transition"
      :scrollable="true"
      max-width="1000px"
      min-height="600px"
    >
      <v-card height="100%" class="rounded">
        <v-card
          :scrollable="true"
          class="mx-auto mt-8 rounded-card"
          color="#EEEEEE"
          height="100px"
          max-width="350"
        >
          <v-row>
            <v-col cols="4">
              <v-avatar class="rounded-circle" size="100" tile>
                <v-img
                  src="../assets/images/Profile.jpg"
                  width="100px"
                  height="95px"
                ></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="8" class="mt-3">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title
                    class="black--text font-weight-bold mt-2 mb-3"
                  >
                    محمدحسین ناصحی
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text font-weight-bold"
                    >نام متصدی : محمد علوی</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card>
        <v-card-title class="mt-8 black--text font-weight-bold mx-auto"
          >لیست خرید ارسالی</v-card-title
        >
        <v-container class="mt-16" v-if="isLoading">
          <v-progress-circular
            indeterminate
            style="margin-right: 47%; margin-top: 8px"
            size="64"
          ></v-progress-circular>
          <div style="margin-right: 43%; margin-top: 30px">
            در حال بارگیری اطلاعات ...
          </div>
        </v-container>
        <v-container v-if="!isLoading">
          <v-card
            class="rounded-xl mt-6"
            min-width="140px"
            v-for="product in selectedOrder.order_detail"
            :key="product.id"
          >
            <v-row>
              <v-col
                ><v-img
                  width="120px"
                  height="120px"
                  class="mr-5"
                  :src="removeChar(product.product.featured_image)"
                ></v-img
              ></v-col>

              <v-col
                ><v-card-text
                  class="text-center black--text font-weight-bold mx-auto"
                  >{{ product.product.title }}</v-card-text
                >
                <v-card-text
                  class="text-center black--text font-weight-bold mx-auto"
                  >{{ product.count }} عدد</v-card-text
                >
              </v-col>
              <v-col
                ><v-card-text
                  class="text-center black--text font-weight-bold mx-auto mt-6"
                  >{{ product.total_price }} تومان</v-card-text
                >
              </v-col>
            </v-row>
          </v-card>
          <v-card class="rounded-xl mt-8" min-width="140px">
            <v-row>
              <v-col
                ><v-card-text
                  class="text-center black--text font-weight-bold mx-auto"
                  >فاکتور اجناس</v-card-text
                ></v-col
              >
              <v-col
                ><v-card-text
                  class="text-center black--text font-weight-bold mx-auto"
                  >{{ selectedOrder.total_real_price }} تومان</v-card-text
                ></v-col
              >
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col
                ><v-card-text
                  class="text-center black--text font-weight-bold mx-auto"
                  >هزینه پیک</v-card-text
                ></v-col
              >
              <v-col
                ><v-card-text
                  class="text-center black--text font-weight-bold mx-auto"
                  >{{ selectedOrder.delivery_cost }} تومان</v-card-text
                ></v-col
              >
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col
                ><v-card-text
                  class="text-center black--text font-weight-bold mx-auto"
                  >جمع کل</v-card-text
                ></v-col
              >
              <v-col
                ><v-card-text
                  class="text-center black--text font-weight-bold mx-auto"
                  >{{ selectedOrder.total_all_price }} تومان</v-card-text
                ></v-col
              >
            </v-row>
          </v-card>
          <v-card-text class="text-center mt-3">
            نحوه پرداخت توسط مشتری :
            {{ selectedOrder.payment_method_text }}</v-card-text
          >
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "AddDesign",
  components: {},
  data() {
    return {
      isLoading: true,
      selectedOrder: {}, // this object is a locall copy of every order that i click on it
    };
  },
  methods: {
    async getDetail() {
      // with it I get all information about every order that i click on it
      await axios
        .get(
          `https://easyshop.im/api/easyshop/v1/buyer/order/report?order_id=${this.$store.state.selectedOrder_Id}`,
          {
            headers: {
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        )
        .then((response) => {
          this.selectedOrder = response.data.data.order;
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
          this.isLoading = false;
        });
    },
    removeChar(str) {
      // this function maked for remove " \ " character from url of product image for showing it and use it in src attribute
      return str.replace(/(_)(\d)/, "$12");
    },
  },
  watch: {
    detailId: function () {
      // this is watch id of every order that i click on it to reaction to it and update this component information
      this.isLoading = true;
      this.getDetail();
    },
  },
  computed: {
    detailId() {
      // it is return ID of every order that I click on it
      return this.$store.state.selectedOrder_Id;
    },
  },
};
</script>
<style >
.rounded-card {
  border-radius: 320px !important;
}
</style>