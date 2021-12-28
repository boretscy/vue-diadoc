import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';

const DiadocStore = new Vuex.Store({
    state: DiadocStart
});
new Vue({
    render: h => h(App),
    store: DiadocStore,
})
.$mount('#diadoc');