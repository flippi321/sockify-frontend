<template>
  <div class="container">
      <div class="image-container">
        <img :src="imageUrl" alt="Sock Image" v-if="imageUrl">
      </div>
      <div class="info">
        <div class="box name"><h1>{{ name }}</h1></div>
        <div class="box type"><h3>{{ type }}</h3></div>
        <div class="box slogan"><h4>{{ slogan }}</h4></div>
        <div class="box description"><p>{{ description }}</p></div>
      </div>
    </div>
</template>

<script>
import apiService from '../services/apiService.js';

export default {
  props: ['name', 'type', 'theme', 'slogan', 'description'],
  data() {
    return {
      imageUrl: ''
    }
  },
  async mounted() {
    try {
      // Fetch image
      const imageData = await apiService.getASockImage(this.name, this.type, this.description);
      this.imageUrl = imageData;
      console.log(imageData)
    } catch (error) {
      console.error("Error fetching the sock image:", error);
    }
  }
}
</script>

<style scoped>
.container {
    display: flex;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    max-width: 900px;
    margin: 0 auto;
}

.image-container {
    flex: 1;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.info {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
}

.box {
    padding: 10px 15px;
    background-color: #f6f6f6;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
}

h1, h3, h4, p {
    margin: 0;  
}

h1 {
    color: #2c2c2c;
    font-size: 2rem;
    font-weight: 600;
}

h3 {
    color: #4a4a4a;
    font-size: 1.5rem;
    font-weight: 500;
}

h4 {
    color: #616161;
    font-size: 1.3rem;
}

p {
    color: #737373;
    font-size: 1rem;
    font-weight: 400;
}

img {
    max-width: 100%;
    border-radius: 10px;
}

</style>