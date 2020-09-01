export default class Job{
  constructor({_id, company, jobTitle, hours, rate, description}){
    this.id = _id
    this.company = company
    this.jobTitle = jobTitle
    this.hours = hours
    this.rate = rate
    this.description = description || "No Description!"
  }

  get Template(){
    return ` <div class="col-4">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">${this.company} - ${this.jobTitle} - ${this.hours}/${this.rate}</h4>
            <p class="card-text">${this.description}</p>
            <div class="d-flex justify-content-between">
                <button class="btn btn-outline-danger" onclick="app.carsController.removeCar('${this.id}')">Delete</button>
                <button class="btn btn-outline-info" onclick="app.carsController.bid('${this.id}')">+ $100</button>
            </div>
        </div>
    </div>
  </div>`
  }
}