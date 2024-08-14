import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


loadFonts()

import MainPage from './components/MainPage/Pages/MainPage.vue'
import ProyectoPage from './components/Proyecto/Pages/ProyectoPage.vue'
import ContactoPage from './components/ContactoPage/Pages/ContactoPage.vue'
import DepartamentoComercialPage from './components/DepartamentoComercialPage/Pages/DepartamentoComercialPage.vue'
import MainComercialPage from './components/ComercialUserPage/Pages/MainComercialPage.vue'
import CookiesPage from '../src/components/Generales/Politicas/CookiesPage.vue'
import PoliticaPrivacidadPage from '../src/components/Generales/Politicas/PoliticaPrivacidadPage.vue'
import AvisosLegalesPage from '../src/components/Generales/Politicas/AvisosLegalesPage.vue'
import RestaurantesSolidariosPage from './components/RestaurantesSolidariosPage/Pages/RestaurantesSolidariosPage.vue'
import EditRestaurantPage from './components/ComercialUserPage/Pages/EditRestaurantPage.vue'
import EditUserPage from './components/ComercialUserPage/Pages/EditUserPage.vue'

const router  = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main-page',
            component: MainPage
        }, {
        path: '/proyecto',
        name: 'proyecto',
        component: ProyectoPage
    }, {
        path: '/contacto',
        name: 'contactoPage',
        component: ContactoPage
    }, {
        path: '/depto-comercial',
        name: 'depto-comercial',
        component: DepartamentoComercialPage
    }, {
        path: '/restaurantes-solidarios',
        name: 'restaurantes-solidarios',
        component: RestaurantesSolidariosPage
    },{
        path: '/politica-cookies',
        name: 'politica-cookies',
        component: CookiesPage
    }, {
        path: '/politica-privacidad',
        name: 'politica-privacidad',
        component: PoliticaPrivacidadPage
    }, {
        path: '/avisos-legales',
        name: 'avisos-legales',
        component: AvisosLegalesPage
    },{
        path: '/depto-comercial/comercial',
        name: 'MainComercialPage',
        component: MainComercialPage,
        meta: { requiresAuth: true }, // Proteger la ruta si es necesario
      }, {
        path: '/editar-restaurante/:id', // Define la nueva ruta
        name: 'EditarRestaurantePage',
        component: EditRestaurantPage,
      }, {
        path: '/editar-usuario/:id', // Define la nueva ruta
        name: 'EditUserPage',
        component: EditUserPage,
      },
]
});

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
