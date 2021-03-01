import axios from 'axios'

const state = {
  albums: []
}

const getters = {
  allAlbums: (state) => state.albums
}

const actions = {
  async fetchAlbums({commit}){
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    commit('setAlbums',response.data);
  },
  async addAlbum({ commit }, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/albums', { title });    
    commit('newAlbum', response.data);
  },
  async deleteAlbum({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
    commit('removeAlbum', id);
  },
  async filterAlbums({ commit }, e) {
    //console.log(e)
    //Get selected number
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    //console.log(limit);
     const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=${limit}`);
     commit('setAlbums', response.data)
  }
}

const mutations = {
  setAlbums: (state, albums) => (state.albums = albums),
  newAlbum: (state, album) => state.albums.unshift(album),
  removeAlbum: (state, id) => state.albums = state.albums.filter(album => album.id !== id)
}

export default {
  state,
  getters,
  actions,
  mutations
}
