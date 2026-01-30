<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <div v-for="(item, index) in store.filmSearchArray" :key="index">
        {{ item.original_title }}
        {{ item.title }}
        {{ item.original_language }}
        {{ item.vote_average }}
    </div>
</template>
<style lang="scss" scoped></style>