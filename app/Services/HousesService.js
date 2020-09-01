import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";



class HousesService{
  async bid(id) {
    let house = ProxyState.houses.find(h => h.id === id)
    if (!house){
      throw new Error("House not found")
    }
house.price += 100
let res = await api.put(`houses/${id}`, { price: house.price })
ProxyState.houses = ProxyState.houses
  }

  async removeHouse(id) {
    await api.delete(`houses/${id}`)
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)
  }

  async getHouses(){
  let res = await api.get('houses')
  ProxyState.houses = res.data.data.map(h => new House(h))
  }
  
  async createHouse(rawHouse) {
    let res = await api.post('houses', rawHouse)
    let house = new House(res.data.data)
    ProxyState.houses = [...ProxyState.houses, house]
  }
  
}

const House_SERVICE = new HousesService();
export default House_SERVICE