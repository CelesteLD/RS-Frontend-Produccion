<template>
  <div>
    <AppNavbar currentPage="contacto" />
    <AccessibilityMenu class="accessibility-position" /> <!-- Añadir el componente de accesibilidad aquí -->
    <div class="content">
      <ParticipationBox />
      <h1 class="section-title">Contacta con nosotros</h1>
      <div class="contact-boxes">
        <ContactBox 
          title="Contacto directo con comercial" 
          description="¿Tienes un restaurante y quieres participar en el proyecto?" 
          :isSelected="selectedBox === 'Contacto directo con comercial'"
          @show-form="showForm"
        />
        <ContactBox 
          title="Contacto directo con trabajadora social" 
          description="¿Eres o conoces a un posible usuario?" 
          :isSelected="selectedBox === 'Contacto directo con trabajadora social'"
          @show-form="showForm"
        />
      </div>
      <div v-if="showContactForm" class="contact-form">
        <h2>Formulario de {{ formTitle }}</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group" v-if="selectedBox === 'Contacto directo con comercial'">
            <label for="restaurantName">Nombre del Restaurante:</label>
            <input type="text" id="restaurantName" v-model="form.restaurantName" required />
          </div>
          <div class="form-group" v-else>
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="form-group" v-if="selectedBox === 'Contacto directo con comercial'">
            <label for="address">Dirección:</label>
            <input type="text" id="address" v-model="form.address" required />
          </div>
          <div class="form-group" v-else>
            <label for="surname">Apellidos:</label>
            <input type="text" id="surname" v-model="form.surname" required />
          </div>
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="phone">Número de Teléfono:</label>
            <input type="tel" id="phone" v-model="form.phone" required />
          </div>
          <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
    <AppFooter /> <!-- Añadir el componente AppFooter aquí -->
  </div>
</template>

<script>
import AppNavbar from '../../Generales/NavBar/AppNavbar.vue';
import ParticipationBox from '../../ContactoPage/Components/ParticipationBox.vue';
import ContactBox from '../../ContactoPage/Components/ContactBox.vue';
import AppFooter from '../../Generales/Footer/AppFooter.vue'; // Importa el componente AppFooter
import AccessibilityMenu from '../../Generales/Accesibilidad/AccesibilityMenu.vue'; // Importa el componente de accesibilidad
import axios from '../../../backend.js'; // Importa la instancia de Axios

export default {
  name: 'ContactoPage',
  components: {
    AppNavbar,
    ParticipationBox,
    ContactBox,
    AppFooter, // Declara el componente AppFooter
    AccessibilityMenu, // Declara el componente de accesibilidad
  },
  data() {
    return {
      showContactForm: false,
      formTitle: '',
      selectedBox: '',
      form: {
        restaurantName: '',
        address: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    showForm(title) {
      this.formTitle = title;
      this.selectedBox = title;
      this.showContactForm = true;
    },
    async submitForm() {
      let recipientEmail = '';

      if (this.selectedBox === 'Contacto directo con comercial') {
        recipientEmail = 'asistencia@aisaformacion.com';
      } else if (this.selectedBox === 'Contacto directo con trabajadora social') {
        recipientEmail = 'asistencia@aisaformacion.com';
      }

      const emailData = {
        ...this.form,
        recipient: recipientEmail
      };

      try {
        const response = await axios.post('/api/email/send', emailData);
        alert('Formulario enviado: ' + response.data.message);
        this.resetForm();
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.');
      }
    },
    resetForm() {
      this.form = {
        restaurantName: '',
        address: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: ''
      };
      this.showContactForm = false;
      this.selectedBox = '';
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
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.contact-boxes {
  display: flex;
  justify-content: center;
  gap: 20px; /* Espacio entre los cuadros */
  flex-wrap: wrap; /* Permite que los cuadros se ajusten en pantallas más pequeñas */
  margin-bottom: 20px;
}

.contact-form {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  text-align: center;
  margin-bottom: 20px;
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
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #3abbd4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #6bc9db;
}

/* Posiciona el componente de accesibilidad debajo del navbar */
.accessibility-position {
  position: fixed;
  top: 120px; /* Ajusta esta altura según la altura de tu navbar */
  left: 10px;
  z-index: 1000;
}

@media (max-width: 768px) {
  .accessibility-position {
    position: absolute;
  }
}
</style>
