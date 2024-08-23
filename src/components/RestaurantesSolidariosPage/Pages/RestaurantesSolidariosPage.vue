<template>
  <div class="page-container">
    <AppNavbar currentPage="restaurantes-solidarios" />
    <AccessibilityMenu class="accessibility-position" /> <!-- Añadir el componente de accesibilidad aquí -->
    <div class="main-content">
      <div v-if="isUnderDevelopment" class="development-message-container">
        <h1>Proyecto en desarrollo</h1>
      </div>
      <div v-else>
        <h1>Restaurantes solidarios adheridos al proyecto</h1>
        <RestaurantList />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from '@/components/Generales/NavBar/AppNavbar.vue';
import AppFooter from '@/components/Generales/Footer/AppFooter.vue';
import RestaurantList from '@/components/RestaurantesSolidariosPage/Components/RestaurantList.vue'; // Ajusta la ruta según tu estructura de proyecto
import AccessibilityMenu from '@/components/Generales/Accesibilidad/AccesibilityMenu.vue'; // Importa el componente de accesibilidad

export default {
  name: 'RestaurantesSolidariosPage',
  components: {
    AppNavbar,
    AppFooter,
    RestaurantList,
    AccessibilityMenu // Declara el componente de accesibilidad
  },
  data() {
    return {
      isUnderDevelopment: true
    };
  },
  methods: {
    handleScroll() {
      if (window.innerWidth <= 768) {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const accessibilityMenu = document.querySelector('.accessibility-position');
        accessibilityMenu.style.top = `${120 + currentScroll}px`;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    // Verificar si la fecha actual es menor al 2 de septiembre de 2024
    const currentDate = new Date();
    const projectStartDate = new Date('2024-09-29');

    if (currentDate >= projectStartDate) {
      this.isUnderDevelopment = false;
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.development-message-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  margin: 0;
}

/* Posiciona el componente de accesibilidad debajo del navbar */
.accessibility-position {
  position: fixed;
  top: 120px; /* Ajusta esta altura según la altura de tu navbar */
  left: 10px;
  z-index: 1000;
}

@media (max-width: 768px) {
  .accessibility-position {
    position: absolute;
  }
}
</style>
