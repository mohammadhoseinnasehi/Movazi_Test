import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        orders: [], // for collect all orders locally 
        selectedOrder_Id: null, // for updating DetailModal component Information with Wather
        detailDialog: false, // for show and hide DetailModal component
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNjA2NDYxMjhjODJkYjFkMjk4Z" +
            "TQ4M2VkZTkwOTI3YWFjNjZjNGUyNzliYTJkMTE1MWJjMDZkZGRhNzI3NThiMmYwNzM3YTRmZGZmNmZlYTkiLCJpYXQiOjE2MTUz" + "MDIyMzAsIm5iZiI6MTYxNTMwMjIzMCwiZXhwIjoxNjQ2ODM4MjMwLCJzdWIiOiIzNSIsInNjb3BlcyI6WyJidXllcl9wYW5lbCJdfQ.Gzn7e1_mP8ni_9jaen8_qTRxX84Og__-FOg" +
            "D3rVsZSIC176A9tQeVKRlha1QMuIPFfUX15cwPZR4RSE3Iek8SgSFhfALQr0YIUlOTfKNKa8iVD9msSEoPDgTQR4Om8kNSpe1F3sWdWKVJX6LhTCVclbvnkgrI_gkHO1QvohmNt_r9UCgTs4PF6UiZMEXuTc93wbQw3AJpwC2UlB9GnxYqvT323a6Oe-kSXPMLL29VyprPH-muD091B5grtuO1DGRFC2PTtBT7hVQySqAQtD8nCpu4" +
            "_se6n8bpMYAT8Heeby6SwYQMEi9rUzemh_tH-FlszBr_KoHGQuYksAo9V-TMmecCj3t1YxBkJQ4QhAfKFGv7ZByq4SMFrVceEgrT33qSZfEl9JAoyehlOrbs1biBpLBSgRpTYbhQxhffog2U3AQBJb-N0cHXAb2CdUceb-X9WH332XRvgWkAPimo_MNa-qGM7dNCnx8Zz3JlEnjVSohXssobGoqPv_3HIGKjFR-zicE2VbGLQ0WOzzkPUh" +
            "MxOkQiG1X6X85EQYfI2w-V12btrcqaZRa3FAq1CI3VM0K3990HOTNO2E96PQjwi3L0pOCp8VC1onMgC5D8SuzkSkG5y1fGABqRoFXwAN0awXQAupLO2J4CYrLoDmbBnI85Hjfq8QnOEynenZLjzZYi74",
        // this is token for Auth for request from server 
    },
    mutations: {},
    getters: {}, // I did not use these because the dimensions of this project have not been enlarged yet and it is an experiment 
    actions: {}
})



export default store