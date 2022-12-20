<template>
  <div class="home">
    <router-link to="/add">
      <button class="add_btn">Add new cost+</button>
    </router-link>
    <List />
    <Pagination v-model="this.$store.currentPage"></Pagination>
  </div>
</template>

<script>

import List from '@/components/List.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'HomeView',
  components: { List, Pagination },
  data() {
    return {
      isPopupActive: false,
    }
  },
  props: {
    list: Array,
    categories: Array
  },
  methods: {
    showPopup() { this.isPopupActive = true },
    hidePopup() { this.isPopupActive = false },
    onClick() {
      this.$router.push('/payment/')
    }
  },
  computed: {
    addList() {
      return this.$store.getters.getAddList
    },
  }
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
