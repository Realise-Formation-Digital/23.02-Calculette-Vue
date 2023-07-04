import axios from "axios";
class BeersService {

  static async getBeerList(){
    console.log('[Service][BeerService][getBeerList] getting beers list from api')
    try {
      let result = await axios.get('https://api.punkapi.com/v2/beers')
      return result.data
    }catch (e) {
      console.error(e)
    }
  }
}

export default BeersService