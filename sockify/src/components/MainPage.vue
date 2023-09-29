<template>
  <div>
    <p>{{ msg }}</p>
    <input type="text" :placeholder="randomPlaceholder">
    <p>{{ response }}</p>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {
      placeholders: [
        'I ',
        'Placeholder 2',
        'Placeholder 3',
        // ...add as many placeholders as you like
      ]
    }
  },
  computed: {
    randomPlaceholder() {
      const randomIndex = Math.floor(Math.random() * this.placeholders.length);
      return this.placeholders[randomIndex];
    }
  }
}
</script>
