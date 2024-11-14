<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">Odjeća</router-link>
          <div class="d-flex">
            <span class="navbar-text">
              Košarica: {{ brproizvoda_kosarica }} proizvoda
            </span>
          </div>
        </div>
      </nav>
      <button v-if="brproizvoda_kosarica > 0" @click="naruci">
        Naruči proizvode
      </button>
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
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getKosaricu, ocisti } from '../kosarica.js';

const proizvodi = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/proizvodi')
        proizvodi.value = response.data;
    } catch (error) {
        console.error("Došlo je do greške:", error);
    }
});

const brproizvoda_kosarica = ref(0);

onMounted(() => {
  brproizvoda_kosarica.value = getKosaricu().length;
});

const naruci = async () => {
  const kosarica = getKosaricu();

  if (kosarica.length === 0) 
    return;

  try {
    const response = await axios.post('http://localhost:3000/narudzbe', {
      narudzba: kosarica,
    });

    if (response.status === 200) {
      alert('Narudžba uspješno poslana!');
      ocisti();
    }
  } catch (error) {
    console.error('Došlo je do greške prilikom slanja narudžbe:', error);
    alert('Greška prilikom slanja narudžbe');
  }
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

.navbar {
    margin-bottom: 20px;
}

.navbar .navbar-brand {
    font-weight: bold; 
    font-family: 'Poppins', sans-serif; 
    font-size: 1.5em;
    margin-left: 30px;
}

.navbar .nav-link {
    font-size: 1.2em;
}

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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.proizvod-card a {
    text-decoration: none;
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
    text-align: center;
}

.proizvod-info h3 {
    margin: 0;
    font-size: 1.2em;
    color: black;
}

.proizvod-info p {
    margin: 5px 0 0;
    font-size: 1em;
    color: #333;
}

.bi-cart {
    font-size: 1.5em;
    color: #333;
}
</style>