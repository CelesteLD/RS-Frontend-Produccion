<template>
  <div class="page-container">
    <AppNavbar currentPage="restaurantes-solidarios" />
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

export default {
  name: 'RestaurantesSolidariosPage',
  components: {
    AppNavbar,
    AppFooter,
    RestaurantList
  },
  data() {
    return {
      isUnderDevelopment: true
    };
  },
  mounted() {
    // Verificar si la fecha actual es menor al 2 de septiembre de 2024
    const currentDate = new Date();
    const projectStartDate = new Date('2024-09-29');

    if (currentDate >= projectStartDate) {
      this.isUnderDevelopment = false;
    }
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
</style>
