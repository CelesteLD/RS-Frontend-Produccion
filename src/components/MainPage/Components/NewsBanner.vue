<template>
  <div class="news-banner">
    <div class="news-banner-content">
      <div class="news-banner-text">
        <h2>{{ activeNews.title }}</h2>
        <p>{{ activeNews.content }}</p>
      </div>
      <img v-if="activeNews.image" :src="activeNews.image" alt="Noticia Imagen" class="news-banner-image"/>
    </div>
    <div class="news-banner-dots">
      <span 
        class="dot" 
        v-for="(dot, index) in totalDots" 
        :key="index" 
        :class="{ active: index === activeDot }"
        @click="changeActiveDot(index)">
      </span>
    </div>
  </div>
</template>

<script>
import axios from '../../../backend.js';
import { API_BASE_URL } from '../../../config.js'

export default {
  name: 'NewsBanner',
  data() {
    return {
      activeDot: 0,
      news: []
    };
  },
  computed: {
    activeNews() {
      return this.news.length > 0 ? this.news[this.activeDot] : { title: '', content: '', image: '' };
    },
    totalDots() {
      return this.news.length;
    }
  },
  methods: {
    changeActiveDot(index) {
      this.activeDot = index;
    },
    async fetchNews() {
      try {
        const response = await axios.get('/api/noticias/lastthree');
        const newsData = response.data;
        
        // Obtener las imágenes para las noticias que tienen foto
        for (let noticia of newsData) {
          if (noticia.foto) {
            try {
              const imageResponse = await axios.get(`/api/noticias/image/${noticia.id_noticia}`);
              noticia.image = `${API_BASE_URL}/api/image/noticias/${imageResponse.data.imagePath}`;
            } catch (error) {
              console.error(`Error al obtener la imagen para la noticia con ID ${noticia.id_noticia}:`, error);
              noticia.image = ''; // No hay imagen para esta noticia
            }
          } else {
            noticia.image = ''; // No hay imagen para esta noticia
          }
        }
        
        this.news = newsData.map(noticia => ({
          title: noticia.titulo,
          content: noticia.descripcion,
          image: noticia.image
        }));
      } catch (error) {
        console.error('Error al obtener noticias:', error);
      }
    }
  },
  mounted() {
    this.fetchNews();
  }
};
</script>

<style scoped>
.news-banner {
  width: 100%;
  max-width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #6bc9db; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
}

.news-banner-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.news-banner-text {
  color: #fff;
  max-height: 100%;
  max-width: 60%; /* Ajustar para dejar espacio a la imagen */
  overflow-y: auto; /* Permite el desplazamiento vertical */
  text-overflow: ellipsis;
  word-wrap: break-word;
}

/* Estilos personalizados para la barra de desplazamiento */

/* Webkit browsers (Chrome, Safari) */
.news-banner-text::-webkit-scrollbar {
  width: 8px;
}

.news-banner-text::-webkit-scrollbar-track {
  background: transparent;
}

.news-banner-text::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2); /* Color del pulgar */
  border-radius: 10px;
  border: 2px solid transparent; /* Espacio alrededor del pulgar */
}

/* Firefox */
.news-banner-text {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.news-banner-text h2 {
  margin: 0;
  font-size: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word; /* Permite la envoltura de palabras */
  white-space: normal; /* Permite el ajuste de líneas */
}

.news-banner-text p {
  margin: 10px 0 0;
  font-size: 1em;
}

.news-banner-image {
  max-width: 40%; /* Ajustar para dejar espacio al texto */
  max-height: 100%;
  margin-left: 20px; /* Espacio entre el texto y la imagen */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Añadir sombra a la imagen */
}

.news-banner-dots {
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
  .news-banner {
    max-width: 100%;
    height: 350px;
    padding: 20px;
  }

  .news-banner-text h2 {
    font-size: 1.2em;
  }

  .news-banner-text p {
    font-size: 0.9em;
  }

  .news-banner-content {
    flex-direction: column; /* Cambiar la dirección del contenido a columna */
  }

  .news-banner-text {
    max-width: 100%; /* Ocupa todo el ancho */
    margin-bottom: 20px; /* Espacio debajo del texto */
  }

  .news-banner-image {
    max-width: 100%; /* Ocupa todo el ancho */
    max-height: 200px; /* Ajustar la altura de la imagen */
    margin-left: 0; /* Eliminar el espacio entre el texto y la imagen */
  }
}
</style>
