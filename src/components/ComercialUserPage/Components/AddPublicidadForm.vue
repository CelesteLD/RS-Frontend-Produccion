<template>
  <div class="add-publicidad-form">
    <h2>Añadir nueva publicidad</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="titulo">Título</label>
        <input type="text" id="titulo" v-model="publicidad.titulo" required />
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción</label>
        <textarea id="descripcion" v-model="publicidad.descripcion" required></textarea>
      </div>
      <div class="form-group">
        <label for="foto">¿Llevará foto?</label>
        <input type="checkbox" id="foto" v-model="publicidad.foto" />
      </div>
      <div class="form-group" v-if="publicidad.foto">
        <label for="archivo">Seleccionar archivo</label>
        <input type="file" id="archivo" @change="handleFileUpload" />
      </div>
      <div class="form-group">
        <button type="submit">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from '../../../backend.js';

export default {
  name: 'AddPublicidadForm',
  data() {
    return {
      publicidad: {
        titulo: '',
        descripcion: '',
        foto: false // Por defecto, no lleva foto
      },
      archivo: null // Almacena el archivo seleccionado
    };
  },
  methods: {
    handleFileUpload(event) {
      this.archivo = event.target.files[0]; // Almacena el archivo seleccionado
    },
    async submitForm() {
      try {
        const token = localStorage.getItem('token');

        if (this.publicidad.foto && this.archivo) {
          let formData = new FormData();
          formData.append('archivo', this.archivo);

          // Subir la imagen primero
          const imageResponse = await axios.post('/api/publicidad/image/upload', formData, {
            headers: {
              Authorization: `${token}`,
              'Content-Type': 'multipart/form-data'
            }
          });

          // Añadir la ruta de la imagen al objeto publicidad
          this.publicidad.imagePath = imageResponse.data.path;
          console.log('Ruta de la imagen:', this.publicidad.imagePath);
        }

        // Enviar datos de la publicidad
        await axios.post('/api/publicidad/add', this.publicidad, {
          headers: {
            Authorization: `${token}`
          }
        });

        // Obtener el ID de la publicidad más reciente
        const lastPublicidadResponse = await axios.get('/api/publicidad/lastone', {
          headers: {
            Authorization: `${token}`
          }
        });
        const idPublicidad = lastPublicidadResponse.data.id_publicidad;
        // Eliminar todo lo que hay antes de /assets/publicidad/
        const imagePath = this.publicidad.imagePath.split('/assets/publicidad/')[1];

        await axios.post('/api/publicidad/route/add', {
          id_publicidad: idPublicidad,
          image_path: imagePath
        }, {
          headers: {
            Authorization: `${token}`
          }
        });

        // Limpiar el formulario
        this.publicidad = {
          titulo: '',
          descripcion: '',
          foto: false
        };
        this.archivo = null;

        alert('Publicidad añadida correctamente');
      } catch (error) {
        console.error('Error al añadir publicidad:', error);
        alert('Error al añadir publicidad');
      }
    }
  }
};
</script>

<style scoped>
.add-publicidad-form {
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
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

.form-group button {
  display: block;
  margin: 0 auto;
}
</style>
