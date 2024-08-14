<template>
  <div>
    <NavbarLogin />
    <div class="main-content">
      <OptionsComponent @select-option="selectedComponent = $event" />
      <ContentContainer>
        <component :is="selectedComponent" />
      </ContentContainer>
    </div>
  </div>
</template>

<script>
import NavbarLogin from '../../Generales/NavBar/AppNavbar.vue';
import OptionsComponent from '../Components/OptionsComponent.vue';
import ContentContainer from '../Components/ContentContainer.vue';
import AddRestaurantForm from '../Components/AddRestaurantForm.vue'; 
import AddUserAdminForm from '../Components/AddUserAdminForm.vue';
import AddNoticeForm from '../Components/AddNoticeForm.vue';
import AddPublicidadForm from '../Components/AddPublicidadForm.vue';
import VerRestaurantes from '../Components/VerRestaurantes.vue';
import AddUserForm from '../Components/AddUserForm.vue';
import VerUsuarios from '../Components/VerUsuarios.vue';

export default {
  name: 'MainComercialPage',
  components: {
    NavbarLogin,
    OptionsComponent,
    ContentContainer,
    AddRestaurantForm,
    AddUserAdminForm,
    VerUsuarios,
    AddNoticeForm,
    AddPublicidadForm,
    AddUserForm,
    VerRestaurantes // Agrega el nuevo componente a los componentes del objeto
  },
  data() {
    return {
      selectedComponent: null
    };
  }
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 80px); /* Ajustar la altura según sea necesario */
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column; /* Cambiar a columna en pantallas pequeñas */
  }
}
</style>
