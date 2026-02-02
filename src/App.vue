<script>

import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import { store } from './store';
import axios, { Axios } from 'axios';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppContent,
  },
  mounted() {
    axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=85916cd89331c75a2a3e981197169b27").then((response) => {
      store.serieSearchArray = response.data.results
    });
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=85916cd89331c75a2a3e981197169b27").then((response) => {
      store.filmSearchArray = response.data.results
    })
  },
  methods: {
    titlesearch() {
      let newUrl = store.url + store.keyApi + "&query=" + store.wordSearch;
      axios.get(newUrl).then((response) => {
        store.filmSearchArray = response.data.results
      });
      let newUrlSerie = store.urlSerie + store.keyApi + "&query=" + store.wordSearch;
      axios.get(newUrlSerie).then((response) => {
        store.serieSearchArray = response.data.results
        console.log(store.serieSearchArray)
      })
    }
  },
}
</script>
<template>

  <AppHeader @search="titlesearch" />
  <AppContent />

</template>
<style lang="scss">
@use './style/generals.scss' as *;
</style>