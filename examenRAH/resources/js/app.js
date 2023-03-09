/*
import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
*/
import { createApp } from "vue/dist/vue.esm-bundler";
import tabla from "./componentes/tabla.vue";

createApp({

    components:{
        tabla,
    }

}).mount('#app');
