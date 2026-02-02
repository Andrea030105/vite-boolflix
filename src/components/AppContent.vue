<script>

import Card from './Card.vue';

import { store } from '../store';

export default {
    components: {
        Card,
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
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="overflow-x-auto d-flex w-100">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style lang="scss" scoped></style>