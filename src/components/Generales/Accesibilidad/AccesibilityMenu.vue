<template>
    <div class="accessibility-menu">
      <button @click="toggleMenu" class="accessibility-button">
        <img :src="require('@/assets/accesibilidad.png')" alt="Accesibilidad" class="accessibility-icon" />
      </button>
      <div v-if="isMenuOpen" class="accessibility-dropdown">
        <h2>Herramientas de accesibilidad</h2>
        <ul>
          <li :class="{ selected: selectedItem === 'increaseTextSize' }" @click="increaseTextSize"><i class="fas fa-search-plus"></i><span>Aumentar texto</span></li>
          <li :class="{ selected: selectedItem === 'decreaseTextSize' }" @click="decreaseTextSize"><i class="fas fa-search-minus"></i><span>Disminuir texto</span></li>
          <li :class="{ selected: selectedItem === 'toggleGrayscale' }" @click="toggleGrayscale"><i class="fas fa-adjust"></i><span>Escala de grises</span></li>
          <li :class="{ selected: selectedItem === 'toggleHighContrast' }" @click="toggleHighContrast"><i class="fas fa-low-vision"></i><span>Alto contraste</span></li>
          <li :class="{ selected: selectedItem === 'toggleNegativeContrast' }" @click="toggleNegativeContrast"><i class="fas fa-adjust"></i><span>Contraste negativo</span></li>
          <li :class="{ selected: selectedItem === 'underlineLinks' }" @click="underlineLinks"><i class="fas fa-underline"></i><span>Subrayar enlaces</span></li>
          <li :class="{ selected: selectedItem === 'toggleReadableFont' }" @click="toggleReadableFont"><i class="fas fa-font"></i><span>Fuente legible</span></li>
          <li :class="{ selected: selectedItem === 'resetSettings' }" @click="resetSettings"><i class="fas fa-sync-alt"></i><span>Restablecer</span></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
        originalStyles: {},
        selectedItem: null, // Para rastrear el ítem seleccionado
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      increaseTextSize() {
        this.selectedItem = 'increaseTextSize';
        document.body.style.fontSize = 'larger';
      },
      decreaseTextSize() {
        this.selectedItem = 'decreaseTextSize';
        document.body.style.fontSize = 'smaller';
      },
      toggleGrayscale() {
        this.selectedItem = 'toggleGrayscale';
        document.body.style.filter = document.body.style.filter === 'grayscale(100%)' ? 'none' : 'grayscale(100%)';
      },
      toggleHighContrast() {
        this.selectedItem = 'toggleHighContrast';
        document.body.style.filter = document.body.style.filter === 'contrast(200%)' ? 'none' : 'contrast(200%)';
      },
      toggleNegativeContrast() {
        this.selectedItem = 'toggleNegativeContrast';
        document.body.style.filter = document.body.style.filter === 'invert(100%)' ? 'none' : 'invert(100%)';
      },
      underlineLinks() {
        this.selectedItem = 'underlineLinks';
        const links = document.querySelectorAll('a');
        links.forEach(link => {
          link.style.textDecoration = link.style.textDecoration === 'underline' ? 'none' : 'underline';
        });
      },
      toggleReadableFont() {
        this.selectedItem = 'toggleReadableFont';
        document.body.style.fontFamily = document.body.style.fontFamily === 'Arial, sans-serif' ? 'initial' : 'Arial, sans-serif';
      },
      resetSettings() {
        this.selectedItem = 'resetSettings';
        document.body.style = this.originalStyles;
      }
    },
    mounted() {
      this.originalStyles = document.body.style.cssText;
    }
  };
  </script>
  
  <style scoped>
  .accessibility-menu {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
  }
  
  .accessibility-button {
    background-color: #009EE3;
    border: none;
    padding: 0; /* Asegúrate de que no haya padding interno */
    border-radius: 40%;
    cursor: pointer;
    display: flex;
    align-items: center; /* Centra el contenido verticalmente */
    justify-content: center; /* Centra el contenido horizontalmente */
    width: 60px; /* Tamaño del botón para que el icono esté centrado */
    height: 60px;
  }
  
  .accessibility-icon {
    width: 40px;
    height: 40px;
  }
  
  .accessibility-dropdown {
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    width: 250px;
    max-width: 90%;
    left: 0;
    position: absolute;
  }
  
  .accessibility-dropdown h2 {
    text-align: center;
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
  }
  
  .accessibility-dropdown ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .accessibility-dropdown li {
    margin: 10px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .accessibility-dropdown li i {
    flex-shrink: 0;
    width: 20px;
    text-align: center;
    margin-right: 0;
  }
  
  .accessibility-dropdown li span {
    padding-left: 16px;
  }
  
  .accessibility-dropdown li:hover, 
  .accessibility-dropdown li.selected {
    background-color: #e0e0e0; /* Cambia el color de fondo */
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); /* Añade sombreado */
    border-radius: 5px; /* Mantén las esquinas redondeadas */
  }
  </style>
  