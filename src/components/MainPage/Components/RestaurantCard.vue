<template>
    <div class="restaurant-card">
      <img :src="imageSrc" alt="Restaurant Image" class="restaurant-image" />
      <div class="restaurant-details">
        <h3 class="restaurant-name">{{ name }}</h3>
        <div class="donations-count">
           {{ rank }} donaciones
        </div>
      </div>
    </div>
</template>
  
<script>  
  export default {
    props: {
      imageSrc: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      rank: {
        type: Number,
        default: 0
      },
      donations: {
        type: Number,
        default: 0
      }
    },
  };
</script>
  
<style scoped>
  .restaurant-card {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin: 10px;
  }
  
  .restaurant-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .restaurant-details {
    padding: 15px;
  }
  
  .restaurant-name {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  
  .donations-count {
    font-size: 1em;
    margin-bottom: 10px;
    color: #555;
  }
  
  .restaurant-rank {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .medal-image {
    width: 30px;
    height: 30px;
    margin-top: 10px;
  }
</style>
