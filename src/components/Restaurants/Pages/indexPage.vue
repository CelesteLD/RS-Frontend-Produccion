<template>
    <div>
        <h1>Restaurants</h1>
        <ul>
            <li v-for="restaurant in restaurants" :key="restaurant.id">{{ restaurant.nombre }}</li>
        </ul>
    </div>
</template>

<script>
import { RestaurantService } from "../../Restaurants/Services/RestaurantService.js";

export default {
    data() {
        return {
            restaurants: []
        };
    },
    async mounted() {
        try {
            const response = await RestaurantService.getRestaurants();
            console.log("Fetched restaurants:", response); // Log the fetched data to the console
            this.restaurants = response; // Assign the fetched data to the `restaurants` data property
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    }
};
</script>
