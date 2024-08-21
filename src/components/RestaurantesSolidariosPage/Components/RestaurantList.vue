<template>
  <div>
    <div class="restaurant-list">
      <div
        class="restaurant-card"
        v-for="restaurant in paginatedRestaurants"
        :key="restaurant.id">
        <img :src="restaurant.image || defaultImage" alt="Restaurant Image" />
        <div class="restaurant-info">
          <h3>{{ restaurant.nombre }}</h3>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">⬅️</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">➡️</button>
    </div>
  </div>
</template>

<script>
import axios from '@/backend';
import defaultImage from '@/assets/example.jpg'; // Importa la imagen por defecto
import { API_BASE_URL } from '../../../config.js'

export default {
  name: 'RestaurantList',
  data() {
    return {
      restaurants: [],
      currentPage: 1,
      restaurantsPerPage: 10,
      defaultImage
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredRestaurants.length / this.restaurantsPerPage);
    },
    paginatedRestaurants() {
      const start = (this.currentPage - 1) * this.restaurantsPerPage;
      const end = start + this.restaurantsPerPage;
      return this.filteredRestaurants.slice(start, end);
    },
    filteredRestaurants() {
      return this.restaurants.filter(restaurant => restaurant.activo);
    }
  },
  methods: {
    async fetchRestaurants() {
      try {
        const token = localStorage.getItem('token'); // Obtén el token del localStorage
        const response = await axios.get('/api/rest/all', {
          headers: {
            Authorization: `${token}` // Incluye el token en los encabezados de la solicitud
          }
        });
        this.restaurants = response.data;

        // Obtener las rutas de las imágenes para cada restaurante
        for (let restaurant of this.restaurants) {
          try {
            const imageResponse = await axios.get(`/api/image/${restaurant.id}`, {
              headers: {
                Authorization: `${token}`
              }
            });
            const name = imageResponse.data.imagePath;
            restaurant.image = `${API_BASE_URL}/api/image/serve/${name}`;

          } catch (error) {
            console.error(`Error al obtener la imagen para el restaurante con ID ${restaurant.id}:`, error);
            restaurant.image = null;
          }
        }
      } catch (error) {
        console.error('Error al obtener los restaurantes:', error);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  },
  mounted() {
    this.fetchRestaurants();
  }
};
</script>

<style scoped>
.restaurant-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 columnas */
  grid-gap: 20px;
  padding: 20px;
}

.restaurant-card {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  text-align: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.restaurant-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.restaurant-info {
  margin-top: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
}

.pagination button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin: 5px;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  margin: 0 10px;
}

/* Media Queries para vista móvil */
@media (max-width: 768px) {
  .restaurant-list {
    grid-template-columns: 1fr; /* 1 columna en vista móvil */
    padding: 10px;
  }

  .restaurant-card {
    width: 100%; /* Ancho completo en vista móvil */
    margin-bottom: 20px; /* Espaciado entre tarjetas */
  }

  .pagination {
    flex-direction: row;
  }

  .pagination button {
    padding: 5px 10px;
    margin: 0 5px;
  }
}
</style>
