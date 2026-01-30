<script>

import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter.vue';
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
    AppFooter
  },
  methods: {
    titlesearch() {
      let newUrl = store.url + store.keyApi + "&query=" + store.wordSearch;
      axios.get(newUrl).then((response) => {
        store.filmSearchArray = response.data.results
      })
    }
  },
}
</script>
<template>

  <AppHeader @search="titlesearch" />
  <AppContent />
  <AppFooter />

</template>
<style lang="scss">
@use './style/generals.scss' as *;
</style>