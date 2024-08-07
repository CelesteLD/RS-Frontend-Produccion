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
            <label for="horario_donacion_inicio">Horario de Donación (Inicio)</label>
            <input type="text" id="horario_donacion_inicio" v-model="restaurant.horario_donacion_inicio" required />
          </div>
          <div class="form-group">
            <label for="horario_donacion_fin">Horario de Donación (Fin)</label>
            <input type="text" id="horario_donacion_fin" v-model="restaurant.horario_donacion_fin" required />
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
        horario_donacion_inicio: '',
        horario_donacion_fin: '',
        capacidad_donacion: 'diariamente',
        activo: 1 // Campo activo por defecto a 1
      },
      imagen: null, // Almacena la imagen seleccionada
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
          formData.append('nombre', this.restaurant.nombre); // Añadir el nombre del restaurante

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

        // Limpiar el formulario
        this.restaurant = {
          nombre: '',
          direccion: '',
          id_municipio: null,
          descripcion: '',
          telefono: '',
          horario_donacion_inicio: '',
          horario_donacion_fin: '',
          capacidad_donacion: 'diariamente',
          activo: 1 // Restablecer a 1
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
