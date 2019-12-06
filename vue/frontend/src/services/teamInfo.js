import Api from '@/services/Api'

export default {
  getTeamInfo (teamName, jwt) {
    return Api().get('/teamInfo/' + teamName + '/' + jwt)
  },
  getScores (teamName) {
    return Api().get('/teamScore/' + teamName)
  },
  getScoreAll () {
    return Api().get('/teamScoreAll/')
  }
}
