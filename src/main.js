import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

import App from './App.vue';

Vue.use(Vuex);

Axios("https://portal.yug-avto.ru/service/diadoc/api/")
    .then(response => {
        // console.log(response.data);
        const DiadocStore = new Vuex.Store({
            state: response.data
        });
        new Vue({
            render: h => h(App),
            store: DiadocStore,
        })
        .$mount('#diadoc');
    })
    .catch(error => { console.log(error) });





// new Vue({
//     render: h => h(App),
//     data: function { return Start },
//     mounted: function() {

//         console.log(this.Data);
//     }
// })