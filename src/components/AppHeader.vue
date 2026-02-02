<script>
import { store } from '../store';

export default {
    data() {
        return {
            menuArray: [
                "Home",
                "Serie Tv",
                "Film",
                "Originali",
                "Aggiunti di Recente",
                "La mia lista",
            ],
            store,
        }
    },
}
</script>
<template>
    <header class="bg-black p-3">
        <div class="container">
            <div class="row">
                <div class="col-2 d-flex align-items-center">
                    <h2 class="text-danger text-uppercase fw-bold">
                        BoolFlix
                    </h2>
                </div>
                <div class="col-8 d-flex align-items-center">
                    <div class="menu-list w-100">
                        <ul class="list-unstyled d-flex justify-content-around text-light fw-bold text-uppercase m-0">
                            <li v-for="(item, index) in menuArray" :key="index" class="mx-2">{{ item }}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-2">
                    <div class="d-flex justify-content-around">
                        <input type="text" class="form-control w-75" placeholder="Cerca" v-model="store.wordSearch"
                            @keyup.enter="$emit('search')">
                        <button @click="$emit('search')"
                            class="btn btn-outline-success mx-2 d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../style/patrial/variables' as *;

header {
    height: 75px;

    h2 {
        font-size: 1.5rem;
        margin: 0;

        &:hover {
            cursor: pointer;
        }
    }

    input,
    button {
        height: 1.8rem;
    }

    li:hover {
        color: $primaryCl;
        cursor: pointer;
    }
}
</style>