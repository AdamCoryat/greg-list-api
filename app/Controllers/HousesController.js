import { ProxyState } from "../AppState.js";
import housesService from "../Services/HousesService.js"



//Private


function _drawHouses(){
  let houses = ProxyState.houses
  let templates = ''
  houses.forEach(h => templates += h.Template)
  document.getElementById('houses').innerHTML = templates 

}


//Public

export default class HousesController{
  constructor(){
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
  }

  getHouses(){
    try {
      housesService.getHouses();
    } catch (error) {
      console.error(error)
    }
  }

  createHouse(){
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    let rawHouse = {

      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      bathrooms: form.bathrooms.value,
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      imgUrl: form.img.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: form.price.value,
      // @ts-ignore
      description: form.description.value
    }
    try {
      housesService.createHouse(rawHouse)
    } catch (error) {
      console.error(error)
    }
  }

  removeHouse(id){
    try {
      housesService.removeHouse(id)
    } catch (error) {
      console.error(error)
    }
  }

  bid(id){
    try {
      housesService.bid(id)
    } catch (error) {
      console.error(error)
    }
  }

  showHouses(){
    document.getElementById('carForm').classList.add('hidden')
    document.getElementById('cars').classList.add('hidden')
    document.getElementById('houseForm').classList.remove('hidden')
    document.getElementById('houses').classList.remove('hidden')
    document.getElementById('jobForm').classList.add('hidden')
    document.getElementById('jobs').classList.add('hidden')
  }
}