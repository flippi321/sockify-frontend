<template>
  <div>
    <p>{{ msg }}</p>
    <h1> {{ count }} </h1>
    <button @click="count++">Create my socks</button>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {
      count: 0,
      placeholders: [
        'Socks which butter at the bottom so I can slide across the floor',
        'Socks with a rubber grip at the bottom',
        'Socks with ',
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
