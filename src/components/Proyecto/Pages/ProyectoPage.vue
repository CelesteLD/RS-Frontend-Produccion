<template>
  <div>
    <AppNavbar currentPage="proyecto" />
    <AccessibilityMenu class="accessibility-position" />
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
import AppFooter from '../../Generales/Footer/AppFooter.vue';
import AccessibilityMenu from '../../Generales/Accesibilidad/AccesibilityMenu.vue'; // Importa el componente de accesibilidad

export default {
  name: 'ProyectoPage',
  components: {
    AppNavbar,
    ProyectInfo,
    JustifyInfo,
    ObjectiveInfo,
    AppFooter,
    AccessibilityMenu, // Declara el componente AccessibilityMenu
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.innerWidth <= 768) {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const accessibilityMenu = document.querySelector('.accessibility-position');
        accessibilityMenu.style.top = `${120 + currentScroll}px`;
      }
    }
  }
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

/* Posiciona el componente de accesibilidad debajo del navbar */
.accessibility-position {
  position: fixed;
  top: 120px; /* Ajusta esta altura según la altura de tu navbar */
  left: 10px;
  z-index: 1000;
}

/* Estilos adicionales para asegurar que el footer esté centrado */
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .accessibility-position {
    position: absolute; /* Permite que el componente se desplace con el contenido */
    top: 120px; /* Ajusta esta altura según la altura de tu navbar */
    left: 10px;
  }
}
</style>
