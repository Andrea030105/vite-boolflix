<script>

import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        convertVote(vote) {
            let newVote = ((vote / 10) * 4) + 1
            return newVote.toFixed(1)
        },
        getStarClass(starIndex, vote) {
            const convertedVote = ((vote / 10) * 4) + 1
            // Se l'indice della stella è minore o uguale al voto arrotondato
            if (starIndex <= Math.ceil(convertedVote)) {
                return 'fa-solid fa-star' // Stella piena
            } else {
                return 'fa-regular fa-star' // Stella vuota
            }
        }
    },
}
</script>
<template>
    <div v-for="(item, index) in store.filmSearchArray" :key="index">
        <img :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" :alt="item.title">
        <p class="text-white">
            {{ convertVote(item.vote_average) }}
        </p>
        <div class="container-star">
            <i v-for="n in 5" :key="n" :class="getStarClass(n, item.vote_average)"></i>
        </div>
    </div>
    <!--  {{ item.original_title }}
    {{ item.title }}
    {{ item.original_language }}-->
</template>
<style lang="scss" scoped>
@use '../style/patrial/variables' as *;

img {
    width: 200px;
    height: 100%;
}

.container-star {
    color: $starCl;
}
</style>