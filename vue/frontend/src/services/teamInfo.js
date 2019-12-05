import Api from '@/services/Api'

export default {
  getTeamInfo (teamName) {
    return Api().get('/teamInfo/' + teamName)
  },
  getScores (teamName) {
    return Api().get('/teamScore/' + teamName)
  }
}
