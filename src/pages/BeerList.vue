<template>
  <h1>Beer List</h1>
  <h1 v-for="(beer, index) in beersStore.getAllBeers" :key="index">{{beer.name}}</h1>
</template>
<script>
import {defineComponent} from 'vue'
import { mapStores } from 'pinia'
import {beersStore} from "../store/store.js";

export default defineComponent({
  name: "BeerList",
  data: () => {
    return {

    }
  },
  computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    ...mapStores(beersStore)
  },
  async mounted(){
    await this.beersStore.getBeerList()
  },
  methods: {

  }
})
</script>
<style scoped>

</style>