<template>
    <div class="popup">
        <select v-model="formData.category">
            <option v-bind:value="cat" v-for="cat, idx of categories" v-bind:key="idx">
                {{ cat }}
            </option>
        </select>
        <input v-model="formData.count" type="text" />
        <div class="btngroup">
            <!-- <button v-on:click="$emit('close')">Отмена</button> -->
            <button v-on:click="add">Добавить</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Popup",
    computed: {
        categories() {
            return this.$store.getters.getCategoriesList
        }
    },
    data() {
        return {
            formData: {
                category: '',
                count: 0
            }
        }
    },
    mounted() {
        this.formData.category = this.categories[0]
    },
    methods: {
        add() {
            this.formData.date = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }),
                this.$store.commit('addPaymentsList', Object.assign({}, this.formData))
        }
    }
}
</script>
  
<style lang="scss">
.popup {
    width: 600px;
    height: 200px;
    padding: 30px;
    background-color: white;
    border: 1px solid #444;
    border-radius: 10px;
    position: absolute;
    top: 300px;
    left: calc(50% - 300px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
}
</style>
  