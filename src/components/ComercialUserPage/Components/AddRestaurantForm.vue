<template>
  <div class="add-restaurant-form">
    <h2>Añadir nuevo restaurante</h2>
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="form-column">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" v-model="restaurant.nombre" required />
          </div>
          <div class="form-group">
            <label for="direccion">Dirección</label>
            <input type="text" id="direccion" v-model="restaurant.direccion" required />
          </div>
          <div class="form-group">
            <label for="id_municipio">Municipio</label>
            <select id="id_municipio" v-model="restaurant.id_municipio" required>
              <option v-for="municipio in municipios" :key="municipio.id" :value="municipio.id">
                {{ municipio.nombre }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción</label>
            <textarea id="descripcion" v-model="restaurant.descripcion" required></textarea>
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono</label>
            <input type="text" id="telefono" v-model="restaurant.telefono" required />
          </div>
          <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" v-model="restaurant.email" required />
          </div>
          <div class="form-group">
            <label for="capacidad_donacion">Capacidad de Donación</label>
            <select id="capacidad_donacion" v-model="restaurant.capacidad_donacion" required>
              <option value="diariamente">Diariamente</option>
              <option value="semanalmente">Semanalmente</option>
              <option value="mensualmente">Mensualmente</option>
            </select>
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <label for="imagen">Imagen del restaurante</label>
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
  name: 'AddRestaurantForm',
  data() {
    return {
      restaurant: {
        nombre: '',
        direccion: '',
        id_municipio: null,
        descripcion: '',
        telefono: '',
        email: '',
        capacidad_donacion: 'diariamente',
        activo: 1,
        horario_donacion_inicio: '00:00',
        horario_donacion_fin: '00:00'
      },
      imagen: null,
      municipios: [
        { id: 1, nombre: 'Adeje' },
        { id: 2, nombre: 'Arafo' },
        { id: 3, nombre: 'Arico' },
        { id: 4, nombre: 'Arona' },
        { id: 5, nombre: 'Buenavista del Norte' },
        { id: 6, nombre: 'Candelaria' },
        { id: 7, nombre: 'El Rosario' },
        { id: 8, nombre: 'El Sauzal' },
        { id: 9, nombre: 'El Tanque' },
        { id: 10, nombre: 'Fasnia' },
        { id: 11, nombre: 'Garachico' },
        { id: 12, nombre: 'Granadilla de Abona' },
        { id: 13, nombre: 'Güímar' },
        { id: 14, nombre: 'Icod de los Vinos' },
        { id: 15, nombre: 'La Guancha' },
        { id: 16, nombre: 'La Matanza de Acentejo' },
        { id: 17, nombre: 'La Orotava' },
        { id: 18, nombre: 'La Victoria de Acentejo' },
        { id: 19, nombre: 'Los Realejos' },
        { id: 20, nombre: 'Los Silos' },
        { id: 21, nombre: 'Puerto de la Cruz' },
        { id: 22, nombre: 'San Cristóbal de La Laguna' },
        { id: 23, nombre: 'San Juan de la Rambla' },
        { id: 24, nombre: 'San Miguel de Abona' },
        { id: 25, nombre: 'Santa Cruz de Tenerife' },
        { id: 26, nombre: 'Santa Úrsula' },
        { id: 27, nombre: 'Santiago del Teide' },
        { id: 28, nombre: 'Tacoronte' },
        { id: 29, nombre: 'Tegueste' },
        { id: 30, nombre: 'Vilaflor de Chasna' }
      ]
    };
  },
  methods: {
    handleImageUpload(event) {
      this.imagen = event.target.files[0];
    },
    generateUsername() {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let randomPart = '';
      for (let i = 0; i < 4; i++) {
        randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return `${randomPart}_rest_solidarios`;
    },
    generatePassword() {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
      let password = '';
      for (let i = 0; i < 8; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return password;
    },
    async submitForm() {
      try {
        const token = localStorage.getItem('token');
        let imagePath = null;

        // Subir la imagen
        if (this.imagen) {
          const formData = new FormData();
          formData.append('imagen', this.imagen);
          formData.append('nombre', this.restaurant.nombre);

          const imageResponse = await axios.post('/api/rest/addimage', formData, {
            headers: {
              Authorization: `${token}`,
              'Content-Type': 'multipart/form-data'
            }
          });

          imagePath = imageResponse.data.path;
        }

        // Enviar datos del restaurante
        await axios.post('/api/rest/add', {
          ...this.restaurant,
          imagen: imagePath
        }, {
          headers: {
            Authorization: `${token}`
          }
        });

        // Obtener el ID del último restaurante añadido
        const lastRestaurantResponse = await axios.get('/api/rest/lastone', {
          headers: {
            Authorization: `${token}`
          }
        });
        const lastRestaurantId = lastRestaurantResponse.data.id;

        // Hacer la solicitud para guardar la ruta de la imagen con el ID del restaurante
        await axios.post('/api/image/fill', {
          id_restaurante: lastRestaurantId,
          image_path: imagePath
        }, {
          headers: {
            Authorization: `${token}`
          }
        });

        // Generar credenciales para el usuario del restaurante
        const username = this.generateUsername();
        const password = this.generatePassword();

        // Enviar datos para crear el usuario del restaurante
        await axios.post('/api/user/restaurante/add', {
          id_restaurante: lastRestaurantId,
          username: username,
          email: this.restaurant.email,
          password: password
        }, {
          headers: {
            Authorization: `${token}`
          }
        });

        // Enviar correo con las credenciales al restaurante
        await axios.post('/api/email/send/credentials', {
          to: this.restaurant.email,
          restaurantName: this.restaurant.nombre,
          loginUsername: username,
          loginPassword: password
        }, {
          headers: {
            Authorization: `${token}`
          }
        });

        // Limpiar el formulario
        this.restaurant = {
          nombre: '',
          direccion: '',
          id_municipio: null,
          descripcion: '',
          telefono: '',
          email: '',
          capacidad_donacion: 'diariamente',
          activo: 1,
          horario_donacion_inicio: '00:00',
          horario_donacion_fin: '00:00'
        };
        this.imagen = null;

      } catch (error) {
        console.error('Error al añadir restaurante:', error);
        alert('Error al añadir restaurante');
      }
    }
  }
};
</script>

<style scoped>
.add-restaurant-form {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 100%;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
}

.form-column {
  flex: 1;
  min-width: 300px;
  padding: 10px;
  box-sizing: border-box;
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
  box-sizing: border-box;
}

.button-container {
  display: flex;
  justify-content: center;
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
