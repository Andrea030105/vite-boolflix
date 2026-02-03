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
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-center align-items-center">
                    <h2 class="text-danger text-uppercase fw-bold my-0 me-2">
                        Filtra per genere:
                    </h2>
                    <select class="form-select border-black w-25" v-model="store.selectType" @change="$emit('select')">
                        <option value="">Open this select menu</option>
                        <option v-for="(item, index) in store.genreArray" :key="index" :value=item.id>{{ item.name }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
h2 {
    font-size: 1rem;
}
</style>