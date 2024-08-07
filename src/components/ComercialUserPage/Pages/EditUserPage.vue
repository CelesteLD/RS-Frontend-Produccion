<template>
    <div>
      <Navbar />
      <div class="edit-user-form">
        <h2>Editar usuario</h2>
        <form @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-column">
              <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" v-model="user.nombre" required />
              </div>
              <div class="form-group">
                <label for="apellido1">Primer Apellido</label>
                <input type="text" id="apellido1" v-model="user.apellido1" required />
              </div>
              <div class="form-group">
                <label for="apellido2">Segundo Apellido</label>
                <input type="text" id="apellido2" v-model="user.apellido2" required />
              </div>
              <div class="form-group">
                <label for="fecha_nacimiento">Fecha de Nacimiento</label>
                <input type="date" id="fecha_nacimiento" v-model="user.fecha_nacimiento" required />
              </div>
              <div class="form-group">
                <label for="genero">Género</label>
                <select id="genero" v-model="user.genero" required>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group button-container">
            <button type="submit">Guardar cambios</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from '@/backend.js';
  import Navbar from '@/components/Generales/NavBar/AppNavbar.vue';
  
  export default {
    components: {
      Navbar
    },
    name: 'EditUserPage',
    data() {
      return {
        user: {
          nombre: '',
          apellido1: '',
          apellido2: '',
          fecha_nacimiento: '',
          genero: 'masculino',
          activo: 'true' // Campo activo por defecto a true
        }
      };
    },
    methods: {
      async fetchUserDetails() {
        const id = this.$route.params.id;
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`/api/usuario/${id}`, {
            headers: {
              Authorization: `${token}`
            }
          });
          this.user = response.data;
        } catch (error) {
          console.error('Error al obtener los detalles del usuario:', error);
        }
      },
      async submitForm() {
        const id = this.$route.params.id;
        try {
          const token = localStorage.getItem('token');
          
          // Actualizar datos del usuario
          await axios.put(`/api/usuario/${id}`, this.user, {
            headers: {
              Authorization: `${token}`
            }
          });
  
          alert('Usuario actualizado exitosamente');
          this.$router.push('/depto-comercial');
        } catch (error) {
          console.error('Error al actualizar usuario:', error);
          alert('Error al actualizar usuario');
        }
      }
    },
    mounted() {
      this.fetchUserDetails();
    }
  };
  </script>
  
  <style scoped>
  .edit-user-form {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box; /* Incluye el padding en el ancho total */
    width: 100%;
  }
  
  .form-row {
    display: flex;
    flex-wrap: wrap; /* Permite que las columnas se ajusten en pantallas más pequeñas */
  }
  
  .form-column {
    flex: 1;
    min-width: 300px; /* Ajusta el ancho mínimo según sea necesario */
    padding: 10px;
    box-sizing: border-box; /* Incluye el padding en el ancho total */
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; /* Incluye el padding en el ancho del input */
  }
  
  .button-container {
    display: flex;
    justify-content: center; /* Centra el contenedor del botón */
  }
  
  button {
    padding: 10px 20px;
    background-color: #6bc9db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2090b6;
  }
  </style>
  