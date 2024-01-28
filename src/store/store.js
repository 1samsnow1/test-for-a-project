import axios from 'axios'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      newsList: null,
      bannerSlider:null,
      headerList:null,
      footerLinks:null,
      specialNews:null,
      schoolAnnounce:null,
      mostSeen:null,
      peyvand:null,
      amoozeshArticle:null,
      newsDetail:null,
      categories:null,
    }
  },
  getters :{
    getNewsList(state){
      return state.newsList;
    },
    getBannerSlider(state){
      return state.bannerSlider;
    },
    getHeaderList(state){
      return state.headerList;
    },
    getFooterLinks(state){
      return state.footerLinks
    },
    getSpecialNews(state){
      return state.specialNews;
    },
    getSchoolAnnouncement(state){
      return state.schoolAnnounce;
    },
    getMostSeen(state){
      return state.mostSeen;
    },
    getPeyvand(state){
      return state.peyvand;
    },
    getAmoozeshArticle(state){
      return state.amoozeshArticle
    },
    getNewsDetail(state){
      return state.newsDetail
    },
    getCategory(state){
      return state.categories
    }
  },
  mutations: {
    setNewsList(state,list){
      state.newsList = list;
    },
    setBannerSlider(state,list){
      state.bannerSlider = list;
    },
    setHeaderList(state,list){
      state.headerList = list;
    },
    setFooterLinks(state,list){
      state.footerLinks = list;
    },
    setSpecialNews(state,list){
      state.specialNews = list;
    },
    setSchoolAnnouncement(state,list){
      state.schoolAnnounce = list;
    },
    setMostSeen(state,list){
      state.mostSeen = list;
    },
    setPeyvand(state,list){
      state.peyvand = list;
    },
    setAmoozeshArticle(state,list){
      state.amoozeshArticle = list;
    },
    setNewsDetail(state,list){
      state.newsDetail = list;
    },
    setCategory(state,list){
      state.categories = list;
    }
    
  },
  actions :{
    async getNewsListFromServer(context, { page, category_id }) {
      const queryParameters = { page: page || 1 };
    
      if (category_id) {
        queryParameters.category_id = category_id;
      }
    
      try {
        const response = await axios.get('api/news', { params: queryParameters });
        context.commit('setNewsList', response.data.data.news.data);
      } catch (error) {
        console.error('Error fetching news list:', error);
      }
    },
    async getBannerSliderFromServer (context){
      await axios.get("api/sliders").then((res)=>{
        context.commit("setBannerSlider",res.data.data.sliders)
      }).catch()
    },
    async getHeaderListFromServer(context){
      await axios.get("api/menus/header").then((res)=>{
        context.commit("setHeaderList",res.data.data.menuItems);
      }).catch()
    },
    async getFooterLinksFromServer (context){
      await axios.get("api/menus/footer").then((res)=>{
        context.commit("setFooterLinks",res.data.data.menuItems);
      }).catch()
    },
    async getSpecialNewsFromServer(context){
      await axios.get("api/news/featured").then((res)=>{
        context.commit("setSpecialNews",res.data.data.news)
      }).catch();
    },
    async getSchoolAnnounceFromServer(context){
      await axios.get("api/announcements/recent").then((res)=>{
        context.commit("setSchoolAnnouncement",res.data.data.announcements)
      }).catch();
    },
    async getMostSeenFromServer(context){
      await axios.get("api/news/most-visited").then((res)=>{
        context.commit("setMostSeen",res.data.data.news)
      }).catch()
    },
    async getPeyvandFromServer(context){
      await axios.get("api/links").then((res)=>{
        context.commit("setPeyvand",res.data.data.links)
      }).catch()
    },
    async getHomeAmoozeshArticle(context){
      await axios.get("api/articles/recent").then((res)=>{
        context.commit("setAmoozeshArticle",res.data.data.articles)
      })
    },
    async getNewsDetailFromServer(context, id) {
      const page = id || 14; 
      try {
        const response = await axios.get(`api/news/${page}`);
        context.commit("setNewsDetail", response.data.data.news);
      } catch (err) {}
    },
    async getCategoryFromServer(context){
      await axios.get("api/categories").then((res)=>{
        context.commit("setCategory",res.data.data.categories)
      }).catch()
    }

  }
})

export default store