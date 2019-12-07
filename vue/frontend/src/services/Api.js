import axios from 'axios'

export default () => {
  return axios.create({
     // baseURL: 'http://localhost:8081'
      baseURL: `http://192.168.0.13:8081`
  })
}
