import Api from '@/services/Api'

export default {
  login (params) {
    return Api().post('/login', params)
  },
  transaction (teamName, jwt, item, price) {
    return Api().get('/transaction/' + teamName + '/' + jwt + '/' + item + '/' + price)
  }
}
