import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '../assets/font.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: { dark: false },
    icons: {
        iconfont: 'mdi',

    },
    rtl: true,
});

// this file for configure vuetify options like Icons , Direction , ...