<template>
<p> You got: </p>
  <div class="container">
    <h1>{{ name }}</h1>
    <h3> {{ type }} </h3>
    <h4> {{ slogan }} </h4>
    <p> {{ description }} </p>
  </div>
</template>

<script>
export default {
  props: ['name', 'type', 'slogan', 'description', ],
}
</script>

<style scoped>
.container {
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

h1 {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: 600;
}

h3 {
    color: #555;
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 500;
}

p {
    color: #666;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
}
</style>
