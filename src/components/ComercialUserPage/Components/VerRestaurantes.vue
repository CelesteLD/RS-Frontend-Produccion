<template>
  <div>
    <div class="search-bar-container">
      <div class="search-bar">
        <input 
          type="text" 
          v-model="searchTerm" 
          placeholder="Buscar por nombre..." 
          @input="filterRestaurants"
        />
        <span class="search-icon">🔍</span>
      </div>
    </div>
    <div class="restaurant-list">
      <div
        class="restaurant-card"
        v-for="restaurant in filteredRestaurants"
        :key="restaurant.id"
        :class="{ inactive: isInactive(restaurant.activo) }"
      >
        <img :src="restaurant.image || defaultImage" alt="Restaurant Image" />
        <div class="restaurant-info">
          <h3>{{ restaurant.nombre }}</h3>
          <p>{{ restaurant.direccion }}</p>
          <p>{{ restaurant.telefono }}</p>
        </div>
        <div class="restaurant-actions">
          <button @click="editRestaurant(restaurant.id)">✏️</button>
          <button @click="toggleActiveStatus(restaurant.id)">❌</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/backend';
import defaultImage from '@/assets/example.jpg'; // Importa la imagen por defecto

export default {
  name: 'VerRestaurantes',
  data() {
    return {
      restaurants: [],
      filteredRestaurants: [],
      defaultImage, // Agrega la imagen por defecto al estado
      searchTerm: '' // Término de búsqueda
    };
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
            restaurant.image = `https://restaurantessolidarios.es:8081/api/image/serve/${name}`;

          } catch (error) {
            console.error(`Error al obtener la imagen para el restaurante con ID ${restaurant.id}:`, error);
            restaurant.image = null; // No hay imagen para este restaurante
          }
        }
        this.filteredRestaurants = this.restaurants; // Inicialmente, todos los restaurantes están en la lista filtrada
      } catch (error) {
        console.error('Error al obtener los restaurantes:', error);
      }
    },
    editRestaurant(id) {
      this.$router.push({ name: 'EditarRestaurantePage', params: { id } });
    },
    async toggleActiveStatus(id) {
      try {
        const token = localStorage.getItem('token'); // Obtén el token del localStorage
        await axios.put(`/api/rest/active/${id}`, null, {
          headers: {
            Authorization: `${token}` // Incluye el token en los encabezados de la solicitud
          }
        });
        // Actualiza la lista de restaurantes después de cambiar el estado
        this.fetchRestaurants();
      } catch (error) {
        console.error('Error al cambiar el estado del restaurante:', error);
      }
    },
    isInactive(activo) {
      return !activo; // Si activo es false, el restaurante está inactivo
    },
    filterRestaurants() {
      const term = this.searchTerm.toLowerCase();
      this.filteredRestaurants = this.restaurants.filter(restaurant => 
        restaurant.nombre.toLowerCase().includes(term)
      );
    }
  },
  mounted() {
    this.fetchRestaurants();
  },
};
</script>

<style scoped>
.search-bar-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  padding: 0 20px;
}

.search-bar {
  position: relative;
  width: 100%;
  max-width: 300px; /* Ajusta el ancho de la barra de búsqueda */
}

.search-bar input {
  padding: 10px 40px 10px 20px; /* Espaciado para el icono de búsqueda */
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
}

.search-bar .search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2em; /* Tamaño del icono */
  color: #888; /* Color del icono */
}

.restaurant-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.restaurant-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 250px;
  text-align: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Asegura que los elementos se distribuyan equitativamente */
}

.restaurant-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.restaurant-info {
  margin-top: 10px;
  flex-grow: 1; /* Permite que el contenido crezca y ocupe el espacio disponible */
}

.restaurant-info h3 {
  margin: 10px 0;
}

.restaurant-info p {
  margin: 5px 0;
}

.restaurant-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.restaurant-actions button {
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
}

.restaurant-actions button:hover {
  opacity: 0.7;
}

/* Estilo para restaurantes inactivos */
.restaurant-card.inactive {
  background-color: #c0c0c0; /* Gris fuerte */
}
</style>
