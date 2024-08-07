<template>
    <div class="participation-box">
      <h2>¿Quieres participar en el proyecto?</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ParticipationBox',
  };
  </script>
  
  <style scoped>
  .participation-box {
    background-color: #d7e3e9; /* Color de fondo similar al mostrado en la imagen */
    padding: 40px; /* Aumenta el padding para hacer el cuadro más grande */
    border-radius: 10px;
    text-align: center;
    margin: 20px auto;
    max-width: 800px; /* Aumenta el ancho máximo para hacer el cuadro más grande */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .participation-box h2 {
    font-size: 28px; /* Aumenta el tamaño de la fuente */
    font-weight: bold;
    color: #000;
  }
  </style>
  