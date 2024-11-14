<template>
    <div class="proizvodi-container">
      <div v-for="proizvod in proizvodi" :key="proizvod.id" class="proizvod-card">
        <router-link :to="`/proizvodi/${proizvod.id}`">
          <img :src="proizvod.slike[0]" :alt="proizvod.naziv" class="proizvod-img" />
          <div class="proizvod-info">
            <h3>{{ proizvod.naziv }}</h3>
            <p>{{ proizvod.cijena }}€</p>
          </div>
        </router-link>
      </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
  
const proizvodi = ref([]);
  
onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/proizvodi')
        proizvodi.value = response.data;
    } catch (error) {
        console.error("Došlo je do greške:", error);
    }
});
</script>
  
<style scoped>
.proizvodi-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}
  
.proizvod-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
}
  
.proizvod-card:hover {
    transform: scale(1.05);
}
  
.proizvod-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
  
.proizvod-info {
    padding: 10px;
    background-color: #f9f9f9;
}
  
.proizvod-info h3 {
    margin: 0;
    font-size: 1.2em;
}
  
.proizvod-info p {
    margin: 5px 0 0;
    font-size: 1em;
    color: #333;
}
</style>
  