<template>
  <div class="app-footer">
    <div class="footer-content">
      <div class="footer-logos">
        <img :src="gobiernoLogo" alt="Gobierno de Canarias Logo" class="footer-logo" />
        <img :src="ueLogo" alt="Unión Europea Logo" class="footer-logo" />
        <img :src="canariasLogo" alt="Fondos europeos" class="footer-logo" />
        <img :src="treeLogo" alt="Asociación AISA Logo" class="footer-logo tree-logo" />
      </div>
      <div class="social-media">
        <a :href="facebookUrl" target="_blank" class="social-link"><img :src="facebookLogo" alt="Facebook" class="social-icon" /></a>
        <a :href="instagramUrl" target="_blank" class="social-link"><img :src="instagramLogo" alt="Instagram" class="social-icon" /></a>
        <a :href="tiktokUrl" target="_blank" class="social-link"><img :src="tiktokLogo" alt="TikTok" class="social-icon" /></a>
        <a :href="youtubeUrl" target="_blank" class="social-link"><img :src="youtubeLogo" alt="YouTube" class="social-icon" /></a>
      </div>
      <div class="footer-links">
        <router-link to="/politica-cookies" class="footer-link">Política de cookies</router-link>
        <span class="footer-dot">•</span>
        <router-link to="/politica-privacidad" class="footer-link">Política de privacidad</router-link>
        <span class="footer-dot">•</span>
        <router-link to="/avisos-legales" class="footer-link">Aviso legal</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import treeLogo from '@/assets/aisa-logo.png'; 
import facebookLogo from '@/assets/facebook.jpg';
import instagramLogo from '@/assets/instagram.jpg';
import tiktokLogo from '@/assets/tiktok.jpg';
import youtubeLogo from '@/assets/youtube.png';
import canariasLogo from '@/assets/fondos-europeos.png';
import ueLogo from '@/assets/union-europea.png';
import gobiernoLogo from '@/assets/Logo-Gobierno-de-Canarias-Consejeria-de-Economia-Conocimiento-y-Empleo-ACIISI-2-1.png';

export default {
  name: 'AppFooter',
  data() {
    return {
      treeLogo,
      facebookLogo,
      instagramLogo,
      tiktokLogo,
      youtubeLogo,
      canariasLogo,
      ueLogo,
      gobiernoLogo,
      facebookUrl: 'https://www.facebook.com/profile.php?id=61563323369126',
      instagramUrl: 'https://www.instagram.com/restaurantessolidarios/?igsh=MXhvczllY2xsOXloeQ%3D%3D',
      tiktokUrl: 'http://tiktok.com/@restaurantes.solida.2024',
      youtubeUrl: 'https://www.youtube.com/channel/UCoDuYogcXXDGbDrMByp2GyA'
    };
  }
};
</script>

<style scoped>
.app-footer {
  width: 100%;
  padding: 20px 0;
  background-color: #ffffff;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px; /* Espacio entre los logos */
  margin-bottom: 20px; /* Espacio debajo de los logos */
}

.footer-logo {
  width: 150px; /* Ajusta el tamaño según sea necesario */
}

.tree-logo {
  width: 100px; /* Tamaño más pequeño para treeLogo */
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px; /* Añadido para espaciar las redes sociales de los enlaces legales */
}

.footer-link {
  text-decoration: none;
  color: #000;
  font-size: 14px;
}

.footer-dot {
  color: #000;
  font-size: 14px;
}

.social-media {
  display: flex;
  gap: 20px;
}

.social-link {
  display: flex;
}

.social-icon {
  width: 24px;
  height: 24px;
}

/* Media Queries para pantallas móviles */
@media (max-width: 768px) {
  .footer-logo {
    width: 80px; /* Tamaño más pequeño para pantallas móviles */
  }

  .tree-logo {
    width: 60px; /* Tamaño más pequeño para treeLogo en pantallas móviles */
  }
}
</style>
