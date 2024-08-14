<template>
  <div class="add-user-form">
    <h2>Añadir nuevo usuario</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="user.nombre" required />
      </div>
      <div class="form-group">
        <label for="username">Nombre de Usuario</label>
        <input type="text" id="username" v-model="user.username" required />
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico</label>
        <input type="email" id="email" v-model="user.email" required />
      </div>
      <div class="form-group">
        <label for="contraseña">Contraseña</label>
        <input type="password" id="contraseña" v-model="user.contraseña" required />
      </div>
      <div class="form-group">
        <label for="rol">Rol</label>
        <select id="rol" v-model="user.rol" required>
          <option value="administrador">Administrador</option>
          <option value="comercial">Comercial</option>
        </select>
      </div>
      <div class="form-group button-group">
        <button type="submit">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from '../../../backend.js';

export default {
  name: 'AddUserForm',
  data() {
    return {
      user: {
        nombre: '',
        username: '',
        email: '',
        contraseña: '',
        rol: 'comercial' // Valor por defecto
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const token = localStorage.getItem('token');

        // Enviar datos del usuario
        await axios.post('/api/user/add', this.user, {
          headers: {
            Authorization: `${token}`
          }
        });

        // Limpiar el formulario
        this.user = {
          nombre: '',
          username: '',
          email: '',
          contraseña: '',
          rol: 'comercial' // Restablecer a valor por defecto
        };

        alert('Usuario añadido correctamente');
      } catch (error) {
        console.error('Error al añadir usuario:', error);
        alert('Error al añadir usuario');
      }
    }
  }
};
</script>

<style scoped>
.add-user-form {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-group {
  display: flex;
  justify-content: center; /* Centrar el botón horizontalmente */
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
