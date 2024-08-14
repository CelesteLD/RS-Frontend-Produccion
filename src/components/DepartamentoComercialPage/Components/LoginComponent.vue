<template>
  <div class="login-container">
    <h1>Bienvenido al departamento comercial</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Introduce el nombre de usuario</label>
        <input type="text" id="username" v-model="username" placeholder="usuario" required />
      </div>
      <div class="form-group">
        <label for="password">Introduce la contraseña</label>
        <input type="password" id="password" v-model="password" placeholder="contraseña" required />
      </div>
      <button type="submit">Acceder</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import { login } from '../../../../src/Services/AuthService.js';

export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '', // Variable para almacenar el mensaje de error
    };
  },
  created() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token && role) {
      this.$router.push('/depto-comercial/comercial');
    }
  },
  methods: {
    async login() {
      try {
        const response = await login({
          username: this.username,
          contraseña: this.password,
        });

        // Almacenar el token y el rol en el local storage
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.rol);

        this.$router.push('/depto-comercial/comercial');
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        this.errorMessage = 'Credenciales incorrectas. Inténtelo de nuevo.';
        this.username = '';
        this.password = '';
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  background-color: white; /* Color de fondo cambiado a blanco */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px; /* Ancho aumentado */
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

button {
  padding: 10px 20px;
  background-color: #001A66; /* Azul oscuro para el botón */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #002C99; /* Azul más oscuro para el hover */
}

.error-message {
  color: red;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .login-container {
    box-shadow: none; /* Quitar sombra en pantallas pequeñas */
  }
}
</style>