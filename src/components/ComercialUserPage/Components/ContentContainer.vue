<template>
  <div class="content-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentContainer',
};
</script>

<style scoped>
.content-container {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(100% - 40px); /* Ajuste para el padding */
  margin-left: 20px; /* Espacio entre el menú y el contenedor */
  box-sizing: border-box; /* Incluye el padding en el ancho y alto total */
  display: flex;
  flex-direction: column;
  overflow: auto; /* Permitir el desplazamiento si el contenido es demasiado grande */
  min-height: 60vh; /* Asegurar una altura mínima */
  flex-grow: 1; /* Permitir que el contenedor crezca */
}

@media (max-width: 768px) {
  .content-container {
    height: 150vh; /* Aumentar la altura en vista móvil */
    width: 100%; /* Asegurar que ocupe todo el ancho en vista móvil */
    margin-left: 0; /* Eliminar margen en vista móvil */
  }
}
</style>