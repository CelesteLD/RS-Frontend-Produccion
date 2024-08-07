<template>
    <div>
      <div class="search-bar-container">
        <div class="search-bar">
          <input 
            type="text" 
            v-model="searchTerm" 
            placeholder="Buscar por nombre..." 
            @input="filterUsers"
          />
          <span class="search-icon">🔍</span>
        </div>
      </div>
      <div class="user-list">
        <div
          class="user-card"
          v-for="user in filteredUsers"
          :key="user.id"
          :class="{ inactive: isInactive(user.activo) }"
        >
          <img :src="user.image || defaultImage" alt="User Image" />
          <div class="user-info">
            <h3>{{ user.nombre }} {{ user.apellido1 }} {{ user.apellido2 }}</h3>
            <p>ID de recogida: {{ user.id_recogida }}</p>
          </div>
          <div class="user-actions">
            <button @click="editUser(user.id)">✏️</button>
            <button @click="toggleActiveStatus(user.id)">❌</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from '@/backend';
  import defaultImage from '@/assets/example.jpg'; // Importa la imagen por defecto
  
  export default {
    name: 'VerUsuarios',
    data() {
      return {
        users: [],
        filteredUsers: [],
        defaultImage, // Agrega la imagen por defecto al estado
        searchTerm: '' // Término de búsqueda
      };
    },
    methods: {
      async fetchUsers() {
        try {
          const token = localStorage.getItem('token'); // Obtén el token del localStorage
          const response = await axios.get('/api/usuario/all', {
            headers: {
              Authorization: `${token}` // Incluye el token en los encabezados de la solicitud
            }
          });
          this.users = response.data;
  
          // Obtener las rutas de las imágenes para cada usuario
          for (let user of this.users) {
            try {
              const imageResponse = await axios.get(`/api/user/image/${user.id}`, {
                headers: {
                  Authorization: `${token}`
                }
              });
              const name = imageResponse.data.imagePath;
              user.image = `https://restaurantessolidarios.es:8081/api/image/user/${name}`;
  
            } catch (error) {
              console.error(`Error al obtener la imagen para el usuario con ID ${user.id}:`, error);
              user.image = null; // No hay imagen para este usuario
            }
          }
          this.filteredUsers = this.users; // Inicialmente, todos los usuarios están en la lista filtrada
          console.log('Usuarios obtenidos:', this.users);
        } catch (error) {
          console.error('Error al obtener los usuarios:', error);
        }
      },
      editUser(id) {
        this.$router.push({ name: 'EditUserPage', params: { id } });
      },
      async toggleActiveStatus(id) {
        try {
          const token = localStorage.getItem('token'); // Obtén el token del localStorage
          await axios.put(`/api/usuario/active/${id}`, null, {
            headers: {
              Authorization: `${token}` // Incluye el token en los encabezados de la solicitud
            }
          });
          // Actualiza la lista de usuarios después de cambiar el estado
          await this.fetchUsers(); // Asegúrate de que se actualicen los datos después de cambiar el estado
        } catch (error) {
          console.error('Error al cambiar el estado del usuario:', error);
        }
      },
      isInactive(activo) {
        return !activo; // Si activo es false, el usuario está inactivo
      },
      filterUsers() {
        const term = this.searchTerm.toLowerCase();
        this.filteredUsers = this.users.filter(user => 
          `${user.nombre} ${user.apellido1} ${user.apellido2}`.toLowerCase().includes(term)
        );
      }
    },
    mounted() {
      this.fetchUsers();
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
  
  .user-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }
  
  .user-card {
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
  
  .user-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .user-info {
    margin-top: 10px;
    flex-grow: 1; /* Permite que el contenido crezca y ocupe el espacio disponible */
  }
  
  .user-info h3 {
    margin: 10px 0;
  }
  
  .user-info p {
    margin: 5px 0;
  }
  
  .user-actions {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
  
  .user-actions button {
    background: none;
    border: none;
    font-size: 1.2em;
    cursor: pointer;
  }
  
  .user-actions button:hover {
    opacity: 0.7;
  }
  
  /* Estilo para usuarios inactivos */
  .user-card.inactive {
    background-color: #c0c0c0; /* Gris fuerte */
  }
  </style>
  