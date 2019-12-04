import Api from '@/services/Api'

export default {
  getTeamInfo(teamName) {
    return Api().get('/teamT/' + teamName)
  }
}
