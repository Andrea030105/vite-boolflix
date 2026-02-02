<script>

import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import { store } from './store';
import axios from 'axios';

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