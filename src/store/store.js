import { defineStore } from 'pinia'
import axios from "axios";

const beersStore = defineStore('beers', {
  state: () => (
    {
      beerList: [] // list to store beer
    }
  ),
  getters: {
    getAllBeers: (state) => state.beerList,
  },
  actions:{
    async getBeerList(){
      console.log('[Action][BeerService][getBeerList] getting beers list from api')
      try {
        let result = await axios.get('https://api.punkapi.com/v2/beers')
        this.beerList = result.data
      }catch (e) {
        console.error(e)
      }
    }
  }
})

export {beersStore}