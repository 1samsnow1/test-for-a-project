import axios from 'axios'
import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      newsList: null,

    }
  },
  getters :{
    getNewsList(state){
      return state.newsList;
    }
  },
  mutations: {
    setNewsList(state,list){
      state.newsList = list;
    }
  },
  actions :{
    async getNewsListFromServer(context){
      await axios.get("api/news").then((res)=>{
        context.commit("setNewsList",res.data.data.news.data)
      }).catch(console.log(404));
    }


  }
})

export default store