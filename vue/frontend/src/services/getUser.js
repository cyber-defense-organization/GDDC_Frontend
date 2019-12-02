import Api from '@/services/Api'

export default {
  fetchUsers () {
    return Api().get('users')
  },

  addUser (params) {
    return Api().post('add_user', params)
  },

  loginUser (params){
    return Api().post('login', params)
  },

  updatePost (params) {
    return Api().put('posts/' + params.id, params)
  },

  getPost (params) {
    console.log('This is the post Request | ', (Api().get('post/' + params.id)))
    return Api().get('profile/' + params.id)
  },

  deleteProfile (id) {
    return Api().delete('profiles/' + id)
  }
}
