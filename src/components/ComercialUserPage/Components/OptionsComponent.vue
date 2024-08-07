<template>
  <div class="options-container">
    <button class="logout-button" @click="logout">CERRAR SESIÓN</button>
    <div class="control-panel">
      <h2>Panel de control</h2>
      <ul>
        <li v-for="option in controlOptions" :key="option.text">
          <a
            @click.prevent="selectOption(option.component)"
            :class="['control-option', { active: selectedOption === option.component }]"
          >
            {{ option.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionsComponent',
  data() {
    return {
      role: localStorage.getItem('role'), // Obtener el rol del almacenamiento local
      selectedOption: null, // Guardar la opción seleccionada
    };
  },
  computed: {
    controlOptions() {
      if (this.role === 'administrador') {
        return [
          { text: 'Ver restaurantes', component: 'VerRestaurantes' },
          { text: 'Añadir nuevo restaurante', component: 'AddRestaurantForm' },
          { text: 'Ver usuarios', component: 'VerUsuarios' },
          { text: 'Añadir nuevo usuario administrador', component: 'AddUserAdminForm' },
          { text: 'Añadir nueva noticia', component: 'AddNoticeForm' },
          { text: 'Añadir publicidad de restaurante', component: 'AddPublicidadForm' },
          { text: 'Añadir usuario participante en el proyecto', component: 'AddUserForm' }
      ];
    } else if (this.role === 'comercial') {
        return [
          { text: 'Ver restaurantes', component: 'VerRestaurantes' },
          { text: 'Añadir nuevo restaurante', component: 'AddRestaurantForm' },
          { text: 'C. Satisfacción', component: 'SatisfactionComponent' },
          { text: 'C. Calidad', component: 'QualityComponent' },
          { text: 'C. Retroalimentación', component: 'FeedbackComponent' },
        ];
      } else {
        return []; // Por si acaso, manejar otros casos
      }
    },
  },
  methods: {
    selectOption(component) {
      this.selectedOption = component;
      this.$emit('select-option', component);
    },
    logout() {
      // Borrar el token y el rol del almacenamiento local
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      // Redirigir al usuario a la página de inicio de sesión
      this.$router.push('/depto-comercial');
    }
  }
};
</script>

<style scoped>
.options-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px; /* Ajustar el ancho del contenedor */
  margin: 0 auto; /* Centrar el contenedor */
}

.logout-button {
  background-color: #6bc9db;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  margin-bottom: 20px;
}

.logout-button:hover {
  background-color: #3abbd4;
}

.control-panel {
  width: 100%;
  background-color: #e0e0e0;
  padding: 20px;
  border-radius: 10px;
}

.control-panel h2 {
  text-align: center;
  margin-bottom: 20px;
}

.control-panel ul {
  list-style: none;
  padding: 0;
}

.control-option {
  display: block;
  background-color: white;
  padding: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
  text-align: center;
  color: black;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.control-option:hover {
  background-color: #ccc;
}

.control-option.active {
  background-color: #6bc9db; /* Color de fondo cuando está activa */
  color: white; /* Color de texto cuando está activa */
}

@media (max-width: 768px) {
  .options-container {
    margin-bottom: 20px; /* Añadir espacio entre el contenedor de opciones y el contenido */
  }
}
</style>
