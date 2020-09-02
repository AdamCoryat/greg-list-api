import { ProxyState } from "../AppState.js"
import jobsService from "../Services/JobsService.js"


//Private 


function _drawJobs(){
  let jobs = ProxyState.jobs
  let templates = ''
  jobs.forEach(j => templates += j.Template)
  document.getElementById('jobs').innerHTML = templates
}

//Public

export default class JobsController{
  constructor(){
    ProxyState.on('jobs', _drawJobs)
    this.getJobs()
  }

  getJobs(){
    try {
      jobsService.getJobs();
    } catch (error) {
      console.error(error)
    }
  }

  createJob(){
    event.preventDefault();
    let form = event.target
    // @ts-ignore
    let rawJob = {
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      jobTitle: form.jobTitle.value,
      // @ts-ignore
      hours: form.hours.value,
      // @ts-ignore
      rate: form.rate.value,
      // @ts-ignore
      description: form.description.value
    }
    try {
      jobsService.createJob(rawJob);
    } catch (error) {
      console.error(error)
    }
  }

  removeJob(id){
    try {
      jobsService.removeJob(id)      
    } catch (error) {
      console.error(error)
    }
  }
  showJobs(){
    document.getElementById('carForm').classList.add('hidden')
    document.getElementById('cars').classList.add('hidden')
    document.getElementById('houseForm').classList.add('hidden')
    document.getElementById('houses').classList.add('hidden')
    document.getElementById('jobForm').classList.remove('hidden')
    document.getElementById('jobs').classList.remove('hidden')
  }
}