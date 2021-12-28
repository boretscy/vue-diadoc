// let DiadocUser = User || null;

import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';

import App from './App.vue';

// Vue.use(Vuex);

// Axios("https://portal.yug-avto.ru/service/diadoc/api/?user="+DiadocUser)
//     .then(response => {
//         console.log(response.data);
        
//     })
//     .catch(error => { console.log(error) });


    const DiadocStore = new Vuex.Store({
        state: Start
    });
    new Vue({
        render: h => h(App),
        store: DiadocStore,
    })
    .$mount('#diadoc');


// new Vue({
//     render: h => h(App),
//     data: function { return Start },
//     mounted: function() {

//         console.log(this.Data);
//     }
// })