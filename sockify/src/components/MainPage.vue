<template>
  <div>
    <p>{{ msg }}</p>
    <h1> {{ count }} </h1>
    <button @click="handleButtonClick"> {{ text }}</button>
  </div>
</template>

<script>
import apiService from '../services/apiService.js';  // Update path accordingly

export default {
  props: ['msg'],
  data() {
    return {
      count: 0,
      text: '',
      placeholders: [
        'Socks which butter at the bottom so I can slide across the floor',
        'Socks with a rubber grip at the bottom',
        'Two socks on each feet',
      ],
    }
  },
  created() {
    this.text = this.getRandomPlaceholder();
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
    },
    getRandomPlaceholder() {
      const randomIndex = Math.floor(Math.random() * this.placeholders.length);
      return this.placeholders[randomIndex];
    }
  },
}
</script>
