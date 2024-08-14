<template>
    <div class="justify-info">
      <div class="justify-info-image">
        <img :src="govLogo" alt="Gobierno de Canarias Logo" />
      </div>
      <div class="justify-info-content">
        <h1><strong>¿Por qué lo hemos puesto en marcha?</strong></h1>
        <p>
          Hemos puesto en marcha Restaurantes Solidarios porque creemos firmemente en la capacidad de la comunidad para unirse y resolver problemas sociales. En Tenerife, como en muchas otras partes del mundo, el desperdicio de alimentos es un problema significativo. Al mismo tiempo, hay personas que no tienen acceso a una alimentación adecuada. Nuestro proyecto nace de la necesidad de crear un puente entre estos dos desafíos, ofreciendo una solución que beneficia tanto a los restaurantes como a las personas sin hogar. Además, queremos ayudar a los establecimientos a cumplir con la ley de desperdicio cero, promoviendo prácticas más sostenibles y conscientes.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import govLogo from '@/assets/Logo-Gobierno-de-Canarias-Consejeria-de-Economia-Conocimiento-y-Empleo-ACIISI-2-1.png';
  
  export default {
    name: 'JustifyInfo',
    data() {
      return {
        govLogo,
      };
    },
  };
  </script>
  
  <style scoped>
  .justify-info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
    max-width: 1200px; /* Ancho máximo del contenedor */
    margin: 20px auto; /* Centra el componente horizontalmente */
  }
  
  .justify-info-image {
    flex-shrink: 0;
    margin-right: 20px; /* Espacio entre la imagen y el cuadro de texto */
  }
  
  .justify-info-image img {
    max-width: 150px; /* Ajusta el tamaño de la imagen según sea necesario */
    border-radius: 10px;
    margin-bottom: 20px; /* Ajusta el margen inferior para la vista móvil */
  }
  
  .justify-info-content {
    flex: 1;
    background-color: #6bc9db; /* Ajusta el color de fondo según el diseño */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra el contenido horizontalmente */
  }
  
  .justify-info-content h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center; /* Centra el texto del título */
  }
  
  .justify-info-content p {
    font-size: 16px;
    line-height: 1.5;
    text-align: justify; /* Alinea el texto del párrafo justificado */
  }
  
  @media (max-width: 768px) {
    .justify-info {
      flex-direction: column;
      text-align: center;
    }
  
    .justify-info-image {
      margin-right: 0;
      margin-bottom: 10px; /* Ajusta el margen inferior para la vista móvil */
    }
  
    .justify-info-image img {
      max-width: 60%; /* Asegura que la imagen se ajuste en pantallas pequeñas */
      display: none; /* Oculta la imagen en pantallas pequeñas */
    }
  
    .justify-info-content {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
  </style>
  
  
  