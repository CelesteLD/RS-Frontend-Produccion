<template>
    <div class="login-page-container">
      <AppNavbar />
      <div class="login-content">
        <LoginComponent />
      </div>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppNavbar from '@/components/Generales/NavBar/AppNavbar.vue';
  import LoginComponent from '../Components/LoginComponent.vue';
  import AppFooter from '../../Generales/Footer/AppFooter.vue'; // Asegúrate de importar el AppFooter

  
  export default {
    name: 'LoginPage',
    components: {
      AppNavbar,
      LoginComponent,
      AppFooter, // Declara el componente AppFooter
    },
  };
  </script>
  
  <style scoped>
  .login-page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .login-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    .login-page-container {
      justify-content: space-between;
    }
  
    .login-content {
      flex: 1 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .login-page-container > footer {
      flex-shrink: 0;
      margin-top: auto;
    }
  }
  </style>
  