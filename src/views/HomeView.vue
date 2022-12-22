<template>
  <div class="home">
<h1>My personal costs</h1>
    <button v-on:click="showModal" class="add_btn">Add new cost+</button>

    <List />
    <Pagination v-modal="this.$store.currentPage"></Pagination>
    <Modal v-bind:id="'addCost'">
      <AddForm v-on:saveCost="addNew" v-bind:id="'addCost'" />
    </Modal>
  </div>
</template>

<script>

import Modal from '@/components/Modal.vue';
import List from '@/components/List.vue';
import Pagination from '@/components/Pagination.vue';
import AddForm from '@/components/AddForm.vue'

export default {
  name: 'HomeView',
  components: { List, Pagination, Modal, AddForm },
  props: {
    list: Array,
    categories: Array
  },
  methods: {
    // onClick() {
    //   this.$router.push('/payment/')
    // },
    showModal() {
      this.$modal.show('addCost')
    },
    addNew(data) {
      this.$store.commit('addCost', data)
    }
  },
  mounted() {
    if(this.$route.name == 'cost' || this.$route.name == 'cost-edit') {
      this.showModal()
    }
  },
  beforeRouteLeave(to, from, next) {
    if(to.name == 'cost' || to.name == 'cost-edit') {
      this.$modal.show('addCost')
    }
    next()
  },
  beforeRouteUpdate(to, from, next) {
    if(to.name == 'cost' || to.name == 'cost-edit') {
      this.$modal.show('addCost')
    }
    next()
  },
  // computed: {
  //   addList() {
  //     return this.$store.getters.getAddList
  //   },
  // }
}
</script>

<style lang="scss">
.add_btn {
  font-size: 18px;
  padding: 5px 10px;
  background-color: rgb(92, 245, 176);
  border: 1px solid rgb(92, 245, 176);
}
</style>
