<template>
  <div>
    <MainPage v-if="!sockData" @generatedSock="showSock"/>
    <SockDetails v-else :name="sockData.name" :description="sockData.description" :type="sockData.type" :theme="sockData.theme" :slogan="sockData.slogan" @goBack="removeSock" />
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
import SockDetails from './components/SockDetails.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    SockDetails
  },
  data() {
    return {
      sockData: null
    }
  },
  methods: {
    showSock(sockCSV) {
    const response = sockCSV.response;
    const [name, type, theme, slogan, description] = response.split(';').map(str => str.trim());

    this.sockData = {
      name,
      type,
      theme,
      slogan,
      description
    };

    },

    removeSock(){
      // Setting the sockData to null will automatically remove the sock detail page
      this.sockData = null;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
