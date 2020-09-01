export default class House{
  constructor({_id, bedrooms, bathrooms, levels, imgUrl, year, price, description}){
    this.id = _id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.imgUrl = imgUrl
    this.year = year
    this.price = price
    this.description = description || "No Descritption"
  }

  get Template(){
    return `
    <div class="col-4">
    <div class="card m-2">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms} - Levels: ${this.levels} - Manuf: ${this.year}</h4>
            <p class="card-text">${this.description}</p>
            <div class="d-flex justify-content-between">
                <button class="btn btn-outline-danger" onclick="app.housesController.removeHouse('${this.id}')">Delete</button>
                <button class="btn btn-outline-info" onclick="app.housesController.bid('${this.id}')">+ $100</button>
                <p>$${this.price}</p>
            </div>
        </div>
    </div>
  </div>`
  }
}