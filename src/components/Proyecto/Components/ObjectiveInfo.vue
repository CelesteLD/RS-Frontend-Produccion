<template>
  <div class="objective-info">
    <div class="objective-info-content">
      <h1><strong>¿Qué objetivos pretendemos conseguir?</strong></h1>
      <p>
        Nuestro objetivo principal es reducir el desperdicio de alimentos y proporcionar una ayuda tangible a las personas sin hogar en Tenerife. Queremos que Restaurantes Solidarios se convierta en un modelo de referencia para otras comunidades, demostrando que con voluntad y colaboración se pueden lograr grandes cambios. Además, buscamos sensibilizar a la población y a los empresarios sobre la importancia de la solidaridad y la sostenibilidad. Aspiramos a crear una red sólida de restaurantes comprometidos que, al donar su comida sobrante, contribuyan a una sociedad más justa y a un medio ambiente más saludable.
      </p>
    </div>
    <div class="objective-info-image">
      <img :src="objectiveImage" alt="Objetivos del Proyecto" />
    </div>
  </div>
</template>

<script>
import objectiveImage from '@/assets/1.png'; // Ajusta la ruta según tu estructura de proyecto

export default {
  name: 'ObjectiveInfo',
  data() {
    return {
      objectiveImage,
    };
  },
};
</script>

<style scoped>
.objective-info {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 1200px; /* Ancho máximo del contenedor */
  margin: 20px auto; /* Centra el componente horizontalmente */
}

.objective-info-content {
  flex: 1;
  background-color: #4090a0; /* Ajusta el color de fondo según el diseño */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 20px; /* Espacio entre el cuadro de texto y la imagen */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido horizontalmente */
}

.objective-info-content h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center; /* Centra el texto del título */
}

.objective-info-content p {
  font-size: 16px;
  line-height: 1.5;
  text-align: justify; /* Alinea el texto del párrafo justificado */
}

.objective-info-image {
  flex-shrink: 0;
}

.objective-info-image img {
  max-width: 200px; /* Ajusta el tamaño de la imagen según sea necesario */
  border-radius: 10px;
}

@media (max-width: 768px) {
  .objective-info {
    flex-direction: column;
    text-align: center;
  }

  .objective-info-content {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .objective-info-image img {
    max-width: 60%; /* Asegura que la imagen se ajuste en pantallas pequeñas */
    display: none; /* Oculta la imagen en pantallas pequeñas */
  }
}
</style>
