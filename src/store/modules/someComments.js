import axios from 'axios'

const state = {
    comments: []
}

const getters = {
    allComments: (state) => state.comments
}

const actions = {
  async fetchComments({commit}){
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=50');       
    commit('setComments',res.data);      
  },
  async addSomeComments({ commit }, body) {
    const res = await axios.post('https://jsonplaceholder.typicode.com/comments', { body });  
    commit('newComment', res.data);
  },
  async deleteComment({commit}, id){
    await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);      
    commit('removeComment', id)
  },  

}

const mutations = {
  setComments: (state, comments)=> (state.comments = comments),
  newComment: (state, comment) => state.comments.unshift(comment),
  removeComment: (state, id) => state.comments = state.comments.filter(comment => comment.id !== id),
    
}

export default {
  state,
  getters,
  actions,
  mutations
}
