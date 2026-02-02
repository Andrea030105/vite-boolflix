<script>

import { store } from '../store';

export default {
    data() {
        return {
            store,
            hoverActive: null,
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
        },
    },
}
</script>
<template>
    <div class="container-img" v-for="(item, index) in store.serieSearchArray" :key="index"
        @mouseover="hoverActive = index" @mouseleave="hoverActive = null">
        <img :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" :alt="item.title">
        <div class="card-info" v-if="(hoverActive == index)">
            <p>
                Titolo: {{ item.original_title }}
            </p>
            <p>
                Titolo Originale: {{ item.title }}
            </p>
            <p>
                Lingua Originale: {{ item.original_language }}
            </p>
            <div class="container-star">
                <i v-for="n in 5" :key="n" :class="getStarClass(n, item.vote_average)"></i>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../style/patrial/variables' as *;

.container-img {
    width: 300px;
    height: 400px;
    position: relative;

    img {
        width: 300px;
        height: 400px;
    }
}

.card-info {
    position: absolute;
    bottom: 0;
    background-color: $cardInfoBg;
    height: 100%;
    width: 100%;
    padding: 2rem;

    .container-star {
        color: $starCl;
        font-size: 1.3rem;
    }

    p {
        color: $whiteCl;
        font-size: 1.3rem;
        font-weight: 600;
    }
}
</style>