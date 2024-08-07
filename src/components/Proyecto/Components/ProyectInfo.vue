<template>
    <div class="project-info">
      <div class="project-info-content">
        <h1><strong>¿Qué es el proyecto Restaurantes Solidarios</strong>?</h1>
        <p>
          El proyecto Restaurantes Solidarios es una iniciativa que busca involucrar a los restaurantes de la isla de Tenerife en una causa humanitaria y ecológica. La propuesta es que los restaurantes donen la comida que les sobra al final del día a personas sin hogar. De esta manera, se aprovechan los alimentos que de otra forma se desperdiciarían, transformándolos en una fuente de ayuda para aquellos que más lo necesitan. Este proyecto no solo contribuye a reducir el hambre, sino que también promueve la responsabilidad social y la sostenibilidad en la industria de la restauración.
        </p>
      </div>
      <div class="project-info-image">
        <img :src="treeImage" alt="Proyecto Árbol" />
      </div>
    </div>
  </template>
  
  <script>
  import treeImage from '@/assets/aisa-logo.png'; // Ajusta la ruta según tu estructura de proyecto
  
  export default {
    name: 'ProyectInfo',
    data() {
      return {
        treeImage,
      };
    },
  };
  </script>
  
  <style scoped>
  .project-info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
    max-width: 1200px; /* Ancho máximo del contenedor */
    margin: 20px auto; /* Centra el componente horizontalmente */
  }
  
  .project-info-content {
    flex: 1;
    background-color: #99d3df; /* Ajusta el color de fondo según el diseño */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-right: 20px; /* Espacio entre el cuadro de texto y la imagen */
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra el contenido horizontalmente */
  }
  
  .project-info-content h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center; /* Centra el texto del título */
  }
  
  .project-info-content p {
    font-size: 16px;
    line-height: 1.5;
    text-align: justify; /* Alinea el texto del párrafo justificado */
  }
  
  .project-info-image {
    flex-shrink: 0;
  }
  
  .project-info-image img {
    max-width: 200px; /* Ajusta el tamaño de la imagen según sea necesario */
    border-radius: 10px;
    margin-bottom: 20px; /* Ajusta el margen inferior para la vista móvil */
  }
  
  @media (max-width: 768px) {
    .project-info {
      flex-direction: column;
      text-align: center;
    }
  
    .project-info-content {
      margin-right: 0;
      margin-bottom: 10px; /* Ajusta el margen inferior para la vista móvil */
    }
  
    .project-info-image img {
      max-width: 60%; /* Asegura que la imagen se ajuste en pantallas pequeñas */
      display: none; /* Oculta la imagen en pantallas pequeñas */
    }
  }
  </style>
  