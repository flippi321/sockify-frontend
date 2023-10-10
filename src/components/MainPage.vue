<template>
  <div>
    <h2>Generate a unique sock idea based on theme and type:</h2>

    <!-- Dropdown for sock type -->
    <label for="sockSize">Sock Type:</label>
    <select v-model="selectedSockType" id="sockType">
      <option v-for="type in sockType" :key="type" :value="type">
        {{ type }}
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

    <button @click="handleButtonClick" :disabled='!canGenerate'> {{ text }}</button>
  </div>
</template>

<script>
import apiService from '../services/apiService.js';

export default {
  data() {
    return {
      text: 'Generate!',
      selectedSockType: '',
      selectedTheme: '',
      canGenerate: true,
      sockType: [
        "Ankle Socks",
        "Crew Socks",
        "Knee-High Socks",
        "Thigh-High Socks",
      ],
      themes: [
        "Generic",
        "SCI-FI",
        "Steampunk",
        "Festive",
        "Soviet",
      ],
    }
  },
  methods: {
    async handleButtonClick() {
      if(this.selectedSockSize != "" && this.selectedSockType != ""){
        try {
          // Disable button so you can't spam generate
          this.canGenerate = false;

          // Fetch sock details
          const dataFromBackend = await apiService.getASockIdea(this.selectedSockSize, this.selectedTheme,);
          console.log(dataFromBackend);
          this.$emit('generatedSock', dataFromBackend)
        } catch (error) {
          // Reenable generate button
          this.canGenerate = true;

          // Log the issue
          console.error("Error handling button click:", error);
        }
      }
    }
  },
}
</script>

<style scoped>
/* Overall container */
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
    background-color: #f9f9f9;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

/* Styling the title */
h2 {
    color: #333;
    margin-bottom: 20px;
    font-weight: 500;
}

/* Styling the dropdowns */
select {
    padding: 8px 12px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    color: #333;
    background-color: #fff;
}

/* Styling the button */
button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* Styling the button on hover */
button:hover:not(:disabled) {
    background-color: #0056b3;
}

/* Styling the button when disabled */
button:disabled {
    background-color: #C0C0C0;
}

/* Styling the labels */
label {
    font-weight: 500;
    margin-top: 10px;
    color: #555;
}
</style>
