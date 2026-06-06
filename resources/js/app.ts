// resources/js/app.ts             // ← tu resources/css/app.css (contiene main.css)
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'jsvectormap/dist/jsvectormap.css'
import 'flatpickr/dist/flatpickr.css'
import 'vue-sonner/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
app.use(router)
app.use(VueApexCharts)
app.mount('#app')