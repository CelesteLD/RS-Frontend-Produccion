<template>
  <div>
    <AppNavbar currentPage="restaurantes-solidarios" />
    <div class="main-content">
      <h1>Restaurantes solidarios adheridos al proyecto</h1>
      <RestaurantList />
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
  }
};
</script>

<style scoped>
.main-content {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-top: 50px;
}
</style>
