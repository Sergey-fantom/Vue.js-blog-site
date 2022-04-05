import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {blogTitle: "BLog Card 1", blogCoverPhoto: "stock-1", blogDate: "March 1, 2022"},
      {blogTitle: "BLog Card 2", blogCoverPhoto: "stock-2", blogDate: "March 1, 2022"},
      {blogTitle: "BLog Card 3", blogCoverPhoto: "stock-3", blogDate: "March 1, 2022"},
      {blogTitle: "BLog Card 4", blogCoverPhoto: "stock-4", blogDate: "March 1, 2022"}
    ],
    editPost: null
  },
  mutations: {
    toggleEditPost(state, payload){
      state.editPost = payload;
      console.log(state.editPost);
    }
  },
  actions: {
  },
  modules: {
  }
})
