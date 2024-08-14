<template>
  <div :class="['contact-box', { selected: isSelected }]" @click="showForm">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ContactBox',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showForm() {
      this.$emit('show-form', this.title);
    }
  }
};
</script>

<style scoped>
.contact-box {
  border: 2px solid #6bc9db; /* Color del borde */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin: 10px;
  flex: 1;
  max-width: 300px; /* Ancho máximo para cada cuadro */
  cursor: pointer; /* Cambia el cursor para indicar que es clicable */
  transition: background-color 0.3s, box-shadow 0.3s;
}

.contact-box.selected {
  background-color: #6bc9db; /* Color de fondo sombreado */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
}

.contact-box h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.contact-box p {
  font-size: 16px;
  line-height: 1.5;
}
</style>
