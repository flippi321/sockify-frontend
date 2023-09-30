<template>
  <div>
    <MainPage v-if="!sockData" msg="Socks made by you:" @generatedSock="showSock"/>
    <SockDetails v-else :name="sockData.name" :description="sockData.description" :type="sockData.type" />
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
      const [name, type, description] = sockCSV.split(',').map(str => str.trim());

      this.sockData = {
        name,
        type,
        description
      };
    }
  }
}
</script>