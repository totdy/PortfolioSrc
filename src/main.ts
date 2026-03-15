import { createApp } from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css'

const theme = localStorage.getItem("theme");
if(theme!=null){
    document.documentElement.dataset.theme = theme;
}else{
    document.documentElement.dataset.theme = "light";
}

createApp(App).mount('#app')