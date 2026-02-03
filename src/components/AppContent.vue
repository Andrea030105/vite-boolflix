<script>

import SelectGenre from './SelectGenre.vue';
import FilmCard from './FilmCard.vue';
import SerieCard from './SerieCard.vue';

import { store } from '../store';

import axios from 'axios';

export default {
    components: {
        SelectGenre,
        FilmCard,
        SerieCard,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getGenre() {
            let newUrlCallGenreSeclect = store.urlCallGenreSelect + store.keyApi + "&with_genres=" + store.selectType
            axios.get(newUrlCallGenreSeclect).then((response) => {
                store.filmSearchArray = response.data.results
            })
        }
    },
}
</script>
<template>
    <main class="main-container bg-black">
        <SelectGenre @select="getGenre" />
        <section>
            <div class="container py-3">
                <div v-if="store.selectType === ''" class="row">
                    <div class="col">
                        <div class="text-white fw-bold fs-3 text-uppercase">
                            <h2 class="mb-3">
                                Film Trovati {{ store.filmSearchArray.length }}:
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="scrollbar overflow-x-auto d-flex w-100">
                            <FilmCard />
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="store.selectType === ''" class="container py-3">
                <div class="row">
                    <div class="col">
                        <div class="text-white fw-bold fs-3 text-uppercase">
                            <h2 class="mb-3">
                                Serie TV Trovate {{ store.serieSearchArray.length }}:
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="scrollbar overflow-x-auto d-flex w-100">
                            <SerieCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style lang="scss" scoped>
@use '../style/patrial/variables' as *;

.main-container {
    min-height: 100vh;
    padding-top: 5rem;
}

.scrollbar {
    scrollbar-width: none;
}
</style>