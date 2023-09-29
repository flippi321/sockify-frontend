<template>
  <div>
    <p>{{ msg }}</p>
    <input type="text" :placeholder="randomPlaceholder">
    <p>{{ response }}</p>
  </div>
</template>

<script>
export default {
  name: 'promptPage',
  props: {
    prompt: String,
    response: String
  }
}
</script>
