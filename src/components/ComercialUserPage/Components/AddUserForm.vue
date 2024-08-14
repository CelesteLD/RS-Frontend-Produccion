<template>
    <div class="add-user-form">
      <h2>Añadir nuevo usuario</h2>
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-column">
            <div class="form-group">
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" v-model="usuario.nombre" required />
            </div>
            <div class="form-group">
              <label for="apellido1">Primer Apellido</label>
              <input type="text" id="apellido1" v-model="usuario.apellido1" required />
            </div>
            <div class="form-group">
              <label for="apellido2">Segundo Apellido</label>
              <input type="text" id="apellido2" v-model="usuario.apellido2" required />
            </div>
            <div class="form-group">
              <label for="fecha_nacimiento">Fecha de Nacimiento</label>
              <input type="date" id="fecha_nacimiento" v-model="usuario.fecha_nacimiento" required />
            </div>
            <div class="form-group">
              <label for="genero">Género</label>
              <select id="genero" v-model="usuario.genero" required>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>
          <div class="form-column">
            <div class="form-group">
              <label for="imagen">Imagen del usuario</label>
              <input type="file" id="imagen" @change="handleImageUpload" />
            </div>
          </div>
        </div>
        <div class="form-group button-container">
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
        usuario: {
          nombre: '',
          apellido1: '',
          apellido2: '',
          fecha_nacimiento: '',
          genero: 'masculino',
          activo: 1, // Campo activo por defecto a 1
          id_recogida: null
        },
        imagen: null // Almacena la imagen seleccionada
      };
    },
    methods: {
      handleImageUpload(event) {
        this.imagen = event.target.files[0]; // Almacena la imagen seleccionada
      },
      async submitForm() {
        try {
          const token = localStorage.getItem('token');
          let imagePath = null;
  
          // Subir la imagen
          if (this.imagen) {
            const formData = new FormData();
            formData.append('imagen', this.imagen);
            formData.append('nombre', this.usuario.nombre); // Añadir el nombre del usuario
  
            const imageResponse = await axios.post('/api/user/image/upload', formData, {
              headers: {
                Authorization: `${token}`,
                'Content-Type': 'multipart/form-data'
              }
            });
  
            imagePath = imageResponse.data.path;
          }
  
          // Enviar datos del usuario
          await axios.post('/api/usuario/add', {
            ...this.usuario,
            imagen: imagePath
          }, {
            headers: {
              Authorization: `${token}`
            }
          });
  
          // Obtener el ID del último usuario añadido
          const lastUserResponse = await axios.get('/api/usuario/lastone', {
            headers: {
              Authorization: `${token}`
            }
          });
          const lastUserId = lastUserResponse.data.id;
  
          // Hacer la solicitud para guardar la ruta de la imagen con el ID del usuario
          await axios.post('/api/user/route/add', {
            id_usuario: lastUserId,
            image_path: imagePath
          }, {
            headers: {
              Authorization: `${token}`
            }
          });
  
          // Limpiar el formulario
          this.usuario = {
            nombre: '',
            apellido1: '',
            apellido2: '',
            fecha_nacimiento: '',
            genero: 'masculino',
            activo: 1, // Restablecer a 1
            id_recogida: null
          };
          this.imagen = null;
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
  