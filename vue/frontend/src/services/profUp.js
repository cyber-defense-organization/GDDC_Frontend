import Api from '@/services/Api'

export default {
  fetchProfiles () {
    return Api().get('prof')
  },

  addComment (params) {
    return Api().put('add_com', params)
  },

  fetchAdminCom () {
    return Api().get('admin')
  },
  addAdmin (params) {
    return Api().put('admin_update' , params)
  },
  updateAdmin (params) {
    return Api().put('admin_change', params)
  },
  voteYes (params) {
    return Api().put('voteYes', params)
  },
  voteNo (params) {
    return Api().put('voteNo', params)
  }
}
