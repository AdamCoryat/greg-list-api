import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";


class JobsService{
  async removeJob(id) {
    await api.delete(`jobs/${id}`)
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== id)
  }
 async createJob(rawJob) {
   let res = await api.post('jobs', rawJob)
   let job = new Job(res.data.data)
   ProxyState.jobs = [...ProxyState.jobs, job]
  }

  async getJobs(){
    let res = await api.get('jobs')
    ProxyState.jobs = res.data.data.map(j => new Job(j))
  }


}

const Jobs_Service = new JobsService()
export default Jobs_Service