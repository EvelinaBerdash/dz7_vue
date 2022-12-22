<template>
    <div class="add-form">
        <div class="add-form__body">
            <select v-model="formData.category"> 
                <option v-for="(item, i) of types" v-bind:key="i" v-bind:value="item">{{ item }}</option>
            </select>
            <input type="text" v-model="formData.value" />
            <button v-on:click="save"> Сохранить </button>
        </div>
        <button class="close-btn" v-on:click="$modal.hide(id)">close</button>
    </div>
</template>

<script>
export default {
    name: "AddForm",
    props: [ 'id' ],
    data: () => ({
        types: [
            'food',
            'transport',
            'enterteinment'
        ],
        formData: {
            category: "food",
            value: 0
        }
    }),
    methods: {
        save() {
            this.$emit('saveCost', this.formData),
            this.formData.value = 0;
            this.formData.category = 'food'
        }
    },
    mounted() {
        if(this.$route.query.category) {
            this.formData.category = this.$route.query.category
        }

        if(this.$route.query.value) {
            this.formData.value = this.$route.query.value
        }

        if(this.$route.params.id) {
            const cost = this.$store.getters.getList.find((item) => item.id == this.$route.params.id)
            this.formData.value = cost.value
            this.formData.category = cost.category
        }
    },
    updated() {
        if(this.$route.query.category) {
            this.formData.category = this.$route.query.category
        }

        if(this.$route.query.value) {
            this.formData.value = this.$route.query.value
        }

        if(this.$route.params.id) {
            const cost = this.$store.getters.getList.find((item) => item.id == this.$route.params.id)
            this.formData.value = cost.value
            this.formData.category = cost.category
        }
    },
}
</script>

<style>
.add-form {
    width: 800px;
    padding: 30px;
    background-color: white;
    border: 1px solid #ccc;
    position: absolute;
    top: 200px;
    left: calc(50% - 400px);
    box-shadow: 0 0 100px #444;
}

.close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave {
    opacity: 1;
}
</style>