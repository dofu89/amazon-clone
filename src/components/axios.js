import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-12003/us-central1/api', //API (claud function) URL
})

export default instance
