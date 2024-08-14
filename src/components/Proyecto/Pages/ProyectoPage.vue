<template>
  <div>
    <AppNavbar currentPage="proyecto" />
    <div class="content">
      <h1 class="section-title">Conoce más sobre el proyecto Restaurantes Solidarios</h1>
      <ProyectInfo />
      <JustifyInfo />
      <ObjectiveInfo />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from '../../Generales/NavBar/AppNavbar.vue';
import ProyectInfo from '../../Proyecto/Components/ProyectInfo.vue';
import JustifyInfo from '../../Proyecto/Components/JustifyInfo.vue';
import ObjectiveInfo from '../../Proyecto/Components/ObjectiveInfo.vue';
import AppFooter from '../../Generales/Footer/AppFooter.vue'; // Importa el componente AppFooter

export default {
  name: 'ProyectoPage',
  components: {
    AppNavbar,
    ProyectInfo,
    JustifyInfo,
    ObjectiveInfo,
    AppFooter, // Declara el componente AppFooter
  },
};
</script>

<style scoped>
.content {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px; /* Espacio entre el título y el primer componente */
  color: #333; /* Color del texto */
}

/* Estilos adicionales para asegurar que el footer esté centrado */
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
