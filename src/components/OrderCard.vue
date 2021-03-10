<template>
  <v-card
    class="mx-auto rounded-xl"
    max-width="1100px"
    min-height="200px"
    hover
    @click.stop="getDetail(order)"
  >
    <v-card-text>
      <v-row>
        <v-col style="" cols="3">
          <v-avatar class="mr-10 mt-8" size="120" color="#eaebed">
            <v-icon size="110" color="#b7b8bc" dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col cols="9">
          <v-card-title
            class="black--text text--darken-2 font-weight-black pt-0"
            >نام خریدار : محمدحسین ناصحی</v-card-title
          >
          <v-card-subtitle class="black--text font-weight-bold mt-1"
            >شماره تماس : 09114598284</v-card-subtitle
          >
          <v-card-subtitle class="black--text font-weight-bold pt-0"
            >تاریخ سفارش : {{ dateFormatted }}
          </v-card-subtitle>
          <v-card-subtitle class="black--text font-weight-bold pt-0"
            >نوع پرداخت : {{ order.payment_method_text }}</v-card-subtitle
          >
          <v-card-subtitle
            class="blue--text font-weight-bold text--darken-3 pt-0"
            >کد سفارش : {{ order.code }}</v-card-subtitle
          >
          <v-card-subtitle class="black--text font-weight-bold pt-0"
            >قیمت کالا : {{ order.total_real_price }}</v-card-subtitle
          >
        </v-col>

        <v-card-text
          style="background-color:#2196F3; width='100%'"
          class="white--text font-weight-bold text-center rounded-xl"
        >
          وضعیت : {{ order.status_text }}
        </v-card-text>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import moment from "moment-jalaali"; // for convert english date to persian
import "moment/locale/fa"; // for convert english date to persian
export default {
  name: "OrderCard",
  props: { order: Object }, // we can describe more about props option but no need it for this project yet
  data() {
    return {};
  },
  methods: {
    getDetail(order) {
      // with this function we can access to every item ID for using it in wacher for reaction to it's change
      this.$store.state.detailDialog = true;
      this.$store.state.selectedOrder_Id = order.id;
    },
  },
  computed: {
    dateFormatted() {
      // this is used for converting english date and options to persian
      moment.loadPersian({ dialect: "persian-modern" });
      return this.randomDate
        ? moment(this.randomDate).format("jDD / jMM / jYYYY  ")
        : "";
    },
    randomDate() {
      // I think the api some dates were wrong (very old) , so I create a function that gives us a random date in a certain range.
      var date = new Date(
        +new Date(2020, 0, 1) +
          Math.random() * (new Date() - new Date(2020, 0, 1))
      );
      var hour = (0 + Math.random() * (24 - 0)) | 0;
      date.setHours(hour);
      return date;
    },
  },
};
</script>

