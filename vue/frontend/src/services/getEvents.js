import Api from '@/services/Api'

export default {
  fetchEvents () {
    return Api().get('events')
  },

  addEvent (params) {
    return Api().post('add_event', params)
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
