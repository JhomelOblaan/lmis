import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import App from './pages/layout/sidebar.vue'
// import Dashboard from './components/Dashboard.vue'
// import './index.css'
// import Router from 'vue-router'
// import Dashboard from '@/components/Dashboard'
// import DashboardHome from 'pages/Home.vue'
// import '@/assets/css/tailwind.css'
// import store from './store'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
// Vue.config.productionTip = false

// Vue.use(Router)

// const routes = [
//   { path: '/', redirect: { name: 'DashboardHome' } },
//   { path: '/dashboard', component: Dashboard, children: [
//       { path: '/', redirect: { name: 'DashboardHome' } },
//       { path: 'home', name: 'DashboardHome', component: DashboardHome }
//     ]
//   }
// ]

// const router = new Router({
//   mode: 'history',
//   routes
// })

// new Vue({
//   render: h => h(App),
//   router,
//   store
// }).$mount('#app')

