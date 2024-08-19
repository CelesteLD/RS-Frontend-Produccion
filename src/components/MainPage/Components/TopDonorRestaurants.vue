<template>
  <div class="top-donor-restaurants-container">
    <div class="top-donor-restaurants">
      <h2 class="solidarity-title">Restaurantes más solidarios</h2>
      <div class="restaurant-cards">
        <RestaurantCard 
          v-for="(restaurant, index) in topDonors"
          :key="index"
          :imageSrc="restaurant.imageSrc || defaultImage"
          :name="restaurant.name || ''"
          :rank="restaurant.rank || ''"
          :class="getMedalClass(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RestaurantCard from './RestaurantCard.vue';
import axios from '../../../backend.js';
import defaultImage from '@/assets/example.jpg';
import { API_BASE_URL } from '../../../config.js'

export default {
  components: {
    RestaurantCard
  },
  data() {
    return {
      topDonors: [
        { name: 'Cargando...', rank: 1, imageSrc: defaultImage },
        { name: 'Cargando...', rank: 2, imageSrc: defaultImage },
        { name: 'Cargando...', rank: 3, imageSrc: defaultImage }
      ],
      defaultImage
    };
  },
  methods: {
    async fetchTopDonors() {
      try {
        const [firstResponse, secondResponse, thirdResponse] = await Promise.all([
          axios.get('/api/registros/first'),
          axios.get('/api/registros/second'),
          axios.get('/api/registros/third')
        ]);

        const topDonors = [
          { name: firstResponse.data.nombre, rank: firstResponse.data.total_donaciones, id: firstResponse.data.id_restaurante },
          { name: secondResponse.data.nombre, rank: secondResponse.data.total_donaciones, id: secondResponse.data.id_restaurante },
          { name: thirdResponse.data.nombre, rank: thirdResponse.data.total_donaciones, id: thirdResponse.data.id_restaurante }
        ];

        for (let i = 0; i < topDonors.length; i++) {
          try {
            const imageResponse = await axios.get(`/api/image/${topDonors[i].id}`);
            const name = imageResponse.data.imagePath;
            topDonors[i].imageSrc = `${API_BASE_URL}/api/image/serve/${name}`;
          } catch (error) {
            console.error(`Error al obtener la imagen para el restaurante con ID ${topDonors[i].id}:`, error);
            topDonors[i].imageSrc = defaultImage; // No hay imagen para este restaurante
          }
        }

        this.topDonors = topDonors;

      } catch (error) {
        console.error('Error al obtener los restaurantes más donantes:', error);
      }
    },
    getMedalClass(index) {
      switch(index) {
        case 0:
          return 'gold';
        case 1:
          return 'silver';
        case 2:
          return 'bronze';
        default:
          return '';
      }
    }
  },
  mounted() {
    this.fetchTopDonors();
  }
};
</script>


<style scoped>
.top-donor-restaurants-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f5f5f5; /* Fondo suave */
  border-radius: 15px;
}

.top-donor-restaurants {
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

.solidarity-title {
  margin-bottom: 30px;
  font-size: 1.8em;
  font-weight: bold;
  color: #333; /* Color del título */
}

.restaurant-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* Clases para los colores oro, plata y bronce */
.gold {
  background-color: #d4b500cb; /* Oro */
}

.silver {
  background-color: #c0c0c0; /* Plata */
}

.bronze {
  background-color: #cd7f32; /* Bronce */
}
</style>

