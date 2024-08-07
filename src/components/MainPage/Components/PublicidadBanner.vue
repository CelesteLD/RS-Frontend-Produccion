<template>
  <div>
    <div class="publicidad-banner" v-if="publicidades.length > 0">
      <div class="publicidad-banner-content">
        <div class="publicidad-banner-text">
          <h2>{{ activePublicidad.title }}</h2>
          <p>{{ activePublicidad.content }}</p>
        </div>
        <img :src="activePublicidad.image" alt="Publicidad" class="publicidad-image" v-if="activePublicidad.image"/>
      </div>
      <div class="publicidad-banner-dots">
        <span 
          class="dot" 
          v-for="(dot, index) in totalDots" 
          :key="index" 
          :class="{ active: index === activeDot }"
          @click="changeActiveDot(index)">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../../backend.js';

export default {
  name: 'PublicidadBanner',
  data() {
    return {
      activeDot: 0,
      publicidades: []
    };
  },
  computed: {
    activePublicidad() {
      return this.publicidades.length > 0 ? this.publicidades[this.activeDot] : { title: '', content: '', image: '' };
    },
    totalDots() {
      return this.publicidades.length;
    }
  },
  methods: {
    changeActiveDot(index) {
      this.activeDot = index;
    },
    async fetchPublicidades() {
      try {
        const response = await axios.get('/api/publicidad/lastthree');
        const publiData = response.data;

        // obtener las imagenes para las publicidades que tienen foto
        for (let publicidad of publiData) {
          if (publicidad.foto) {
            try {
              const imageResponse = await axios.get(`/api/publicidad/image/${publicidad.id_publicidad}`);
              console.log('Imagen:', imageResponse.data.imagePath);
              publicidad.image = `https://restaurantessolidarios.es:8081/api/image/publicidad/${imageResponse.data.imagePath}`;
              console.log('Imagen:', publicidad.image);
            } catch (error) {
              console.error(`Error al obtener la imagen para la publicidad con ID ${publicidad.id_publicidad}:`, error);
              publicidad.image = ''; // No hay imagen para esta publicidad
            }
          } else {
            publicidad.image = ''; // No hay imagen para esta publicidad
          }
        }

        this.publicidades = publiData.map(publicidad => ({
          title: publicidad.titulo,
          content: publicidad.descripcion,
          image: publicidad.image
        }));

        console.log ('Publicidades:', this.publicidades);
      } catch (error) {
        console.error('Error al obtener publicidades:', error);
      }
    }
  },
  mounted() {
    this.fetchPublicidades();
  }
};
</script>

<style scoped>
.publicidad-banner {
  width: 100%;
  max-width: 700px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #99d3df;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
}

.publicidad-banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.publicidad-banner-text {
  color: #fff;
  max-width: 60%;
  max-height: 100%; /* Añadir altura máxima para el contenedor de texto */
  overflow-y: auto; /* Permitir el desplazamiento vertical */
}

.publicidad-image {
  max-width: 35%;
  max-height: 100%;
  border-radius: 10px;
  margin-left: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Añadir sombra a la imagen */
}

/* Para navegadores webkit (Chrome, Safari) */
.publicidad-banner-text::-webkit-scrollbar {
  width: 0.5em;
}

.publicidad-banner-text::-webkit-scrollbar-track {
  background: transparent;
}

.publicidad-banner-text::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 3px solid transparent;
}

/* Para Firefox */
.publicidad-banner-text {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
}

.publicidad-banner-text h2 {
  margin: 0;
  font-size: 1.5em;
}

.publicidad-banner-text p {
  margin: 10px 0 0;
  font-size: 1em;
}

.publicidad-banner-dots {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
}

.dot.active {
  opacity: 1;
}

@media (max-width: 768px) {
  .publicidad-banner {
    max-width: 100%;
    height: auto; /* Ajustar la altura automáticamente */
    padding: 20px;
  }

  .publicidad-banner-content {
    flex-direction: column; /* Cambiar la dirección del flex a columna */
    align-items: flex-start; /* Alinear los elementos al principio */
  }

  .publicidad-banner-text {
    max-width: 100%; /* Asegurarse de que el texto ocupe todo el ancho */
    margin-bottom: 20px; /* Añadir espacio debajo del texto */
  }

  .publicidad-image {
    max-width: 100%; /* Asegurarse de que la imagen ocupe todo el ancho */
    margin-left: 0; /* Eliminar el margen izquierdo */
  }
}
</style>
