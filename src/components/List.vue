<template>
    <div class="list">
        <div v-for="item of list" v-bind:key="item.id" class="list__item">
            <div class="items">{{ item.date }}</div>
            <div class="items">{{ item.category }}</div>
            <div class="items">{{ item.value }}</div>
            <button v-on:click="togglePopup(item.id)" class="popup_btn"> ... </button>
            <Modal v-bind:id="item.id">
                <Popup v-bind:id="item.id" />
            </Modal>
        </div>
    </div>
</template>

<script>
import Popup from './Popup.vue'
import Modal from './Modal.vue'

export default {
    name: 'List',
    components: { Popup, Modal },
    computed: {
        list() {
            return this.$store.getters.getList
        }
    },
    methods: {
        togglePopup(id) {
            this.$modal.toggle(id)
        }
    }
}
</script>

<style lang="scss">
.list {
    width: 800px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: rgb(228, 250, 240);

    &__item {
        height: 60px;
        border-bottom: 1px solid #444;
        display: flex;
        padding: 10px 25px;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
}

.items {
    width: 33%;
    text-align: left;
}

.popup_btn {
    padding: 15px 5px;
}
</style>