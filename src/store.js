import { reactive } from "vue";

export const store = reactive({
  keyApi: "85916cd89331c75a2a3e981197169b27",
  url: "https://api.themoviedb.org/3/search/movie?api_key=",
  urlSerie: "https://api.themoviedb.org/3/search/tv?api_key=",
  wordSearch: "",
  filmSearchArray: [],
  serieSearchArray: [],
});
