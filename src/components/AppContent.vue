<script>

import FilmCard from './FilmCard.vue';

import { store } from '../store';
import SerieCard from './SerieCard.vue';

export default {
    components: {
        FilmCard,
        SerieCard
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <main class="bg-black">
        <section>
            <div class="container py-5">
                <div class="row">
                    <div class="col">
                        <div class="text-white fw-bold fs-3 text-uppercase">
                            <h2>
                                Film:
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
            <div class="container py-5">
                <div class="row">
                    <div class="col">
                        <div class="text-white fw-bold fs-3 text-uppercase">
                            <h2>
                                Serie TV:
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

.scrollbar {
    scrollbar-width: none;
}

h2:hover {
    color: $primaryCl;
    cursor: pointer;
}
</style>