<template>
  <div class="main-page">
    <AppNavbar currentPage="inicio" />
    <AccessibilityMenu class="accessibility-position" />
    <div v-if="isUnderDevelopment" class="development-container">
      <h1 class="development-message">Proyecto en desarrollo</h1>
    </div>
    <div v-else>
      <SocialMediaLinks class="social-media-links" />
      <div>
        <h1 class="main-title">Bienvenidos a Restaurantes Solidarios</h1>
      </div>
      <div class="content-container">
        <div class="main-content">
          <TopDonorRestaurants />
          <div class="publicidad-section">
            <h2 class="section-title">Espacio publicitario</h2>
            <div class="banners-container">
              <div class="banner publicidad-banner-container">
                <PublicidadBanner />
              </div>
              <div class="banner news-banner-container">
                <NewsBanner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from '../../Generales/NavBar/AppNavbar.vue';
import PublicidadBanner from '../../MainPage/Components/PublicidadBanner.vue';
import NewsBanner from '../../MainPage/Components/NewsBanner.vue';
import TopDonorRestaurants from '../../MainPage/Components/TopDonorRestaurants.vue';
import AppFooter from '../../Generales/Footer/AppFooter.vue';
import AccessibilityMenu from '../../Generales/Accesibilidad/AccesibilityMenu.vue';
import axios from '../../../backend.js';

export default {
  components: {
    AppNavbar,
    PublicidadBanner,
    NewsBanner,
    TopDonorRestaurants,
    AppFooter,
    AccessibilityMenu
  },
  data() {
    return {
      activeDot: 0,
      activeDotVertical: 0,
      newsItems: [],
      isUnderDevelopment: true
    };
  },
  computed: {
    activeNewsItem() {
      return this.newsItems.length > 0 ? [this.newsItems[this.activeDot]] : [];
    }
  },
  methods: {
    async fetchNoticias() {
      try {
        const response = await axios.get('/api/noticias/lastthree');
        this.newsItems = response.data.map(noticia => ({
          imageSrc: '', 
          title: noticia.titulo,
          content: noticia.descripcion
        }));
        console.log('Noticias obtenidas:', this.newsItems);
      } catch (error) {
        console.error('Error al obtener noticias:', error);
      }
    },
    updateActiveDot(index) {
      this.activeDot = index;
    },
    updateActiveDotVertical(index) {
      this.activeDotVertical = index;
    },
    handleScroll() {
      if (window.innerWidth <= 768) {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const accessibilityMenu = document.querySelector('.accessibility-position');
        accessibilityMenu.style.top = `${120 + currentScroll}px`;
      }
    }
  },
  mounted() {
    this.fetchNoticias();
    window.addEventListener('scroll', this.handleScroll);

    // Verificar si la fecha actual es menor al 29 de septiembre de 2024
    const currentDate = new Date();
    const projectStartDate = new Date('2024-09-29');

    if (currentDate >= projectStartDate) {
      this.isUnderDevelopment = false;
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  justify-content: space-between;
  position: relative; /* Para asegurar que los elementos hijos puedan ser posicionados */
}

.accessibility-position {
  position: fixed; /* Permite que el elemento se mantenga en su posición mientras se desplaza */
  top: 120px; /* Ajusta esta altura según la altura de tu navbar */
  left: 10px; /* Separación desde el borde izquierdo */
  z-index: 1000;
}

@media (max-width: 768px) {
  .accessibility-position {
    position: absolute; /* Permite que el elemento se desplace con el contenido */
  }
}

.development-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.development-message {
  font-size: 2em;
  text-align: center;
  margin: 20px 0;
}

.main-title {
  font-size: 2em;
  text-align: center;
  margin: 20px 0;
}

.content-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.publicidad-section {
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  box-sizing: border-box;
}

.section-title {
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 20px;
}

.banners-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
}

.banner {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

.publicidad-banner-container {
  width: 58%;
}

.news-banner-container {
  width: 38%;
}

.solidarity-restaurants {
  width: 100%;
  text-align: center;
  margin-top: 30px;
  box-sizing: border-box;
}

.solidarity-title {
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .main-title {
    font-size: 1.7em;
  }

  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .banners-container {
    flex-direction: column;
    align-items: center;
  }

  .banner {
    width: 80%;
    margin-bottom: 20px;
  }

  .publicidad-banner-container,
  .news-banner-container {
    width: 100%;
  }
}
</style>
