<template>
    <div class="popup">
        <router-link :to="`/cost/${id}`"><button class="edit_btn">Редактировать</button></router-link>
        <button @click="deleteEvent(id)" class="edit_btn">Удалить</button>
    </div>
</template>

<script>
export default {
    name: 'Popup',
    props: {
        id: Number
    },
    methods: {
        deleteEvent: function (id) {
            this.$store.commit('delete', id)
        }
    }
}
</script>

<style lang="scss">
.popup {
    position: absolute;
    right: 55px;
    width: 120px;
    display: flex;
    flex-direction: column;
    min-height: 40px;
    background: rgb(243, 240, 240);
    padding: 5px 0;
    border: 1px solid white;
    justify-content: space-between;
    top: 30px;
    z-index: 99;
}

.edit_btn {
    padding: 5px 10px;
}
</style>