<template>
  <div>
    <p>{{ name }}</p>
    <h2> Type: {{ type }} </h2>
    <h2> {{ description }} </h2>
  </div>
</template>

<script>

export default {
  props: ['name', 'description', 'type'],
}
</script>
