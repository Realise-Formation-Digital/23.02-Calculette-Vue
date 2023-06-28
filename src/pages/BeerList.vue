<template>
  <h1>Beer List</h1>
  <h1 v-for="(beer, index) in beerList" :key="index">{{beer.name}}</h1>
</template>
<script>
import BeersService from "../services/beersService.js";
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BeerList",
  data: () => {
    return {
      beerList: []
    }
  },
  async mounted(){
    await this.getBeers()
  },
  methods: {
    async getBeers(){
      console.log('[Component][Beerlist][getBeers] Getting beers from api')
      try {
        let result = await BeersService.getBeerList()
        await BeersService.postBeer()
        this.beerList = result
      }catch (e) {
        console.error(e)
      }
    }
  }
})
</script>
<style scoped>

</style>