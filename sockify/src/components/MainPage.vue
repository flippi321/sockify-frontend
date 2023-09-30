<template>
  <div>
    <h2>Generate a unique sock idea based on size and theme:</h2>

    <!-- Dropdown for sock size -->
    <label for="sockSize">Sock Size:</label>
    <select v-model="selectedSockSize" id="sockSize">
      <option v-for="size in sockSize" :key="size" :value="size">
        {{ size }}
      </option>
    </select>
    <br/> 

    <!-- Dropdown for sock themes -->
    <label for="themes">Sock Theme:</label>
    <select v-model="selectedTheme" id="themes">
      <option v-for="theme in themes" :key="theme" :value="theme">
        {{ theme }}
      </option>
    </select>
     <br/> 

    <button @click="handleButtonClick"> {{ text }}</button>
  </div>
</template>

<script>
import apiService from '../services/apiService.js';

export default {
  props: ['msg'],
  data() {
    return {
      text: 'Generate!',
      selectedSockSize: '',  // For selected sock size
      selectedTheme: '',     // For selected theme
      sockSize: [
        "Ankle Socks",
        "Crew Socks",
        "Knee-High Socks",
        "Thigh-High/Programmer Socks",
      ],
      themes: [
        "Generic",
        "SCI-FI",
        "Steampunk",
        "Festive",
      ],
      placeholders: [
        'Socks which butter at the bottom so I can slide across the floor',
        'Socks with a rubber grip at the bottom',
        'Two socks on each feet',
      ],
    }
  },
  methods: {
    async handleButtonClick() {
      try {
        const dataFromBackend = await apiService.getASockIdea();
        console.log(dataFromBackend);
        this.$emit('generatedSock', dataFromBackend)
      } catch (error) {
        console.error("Error handling button click:", error);
      }
    }
  },
}
</script>
