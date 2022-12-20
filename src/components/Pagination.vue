<template>
<div class="pagination">
  <button v-on:click="$store.commit('prevPage')" class="btn_pag">prev</button>
  <button v-on:click="$store.commit('nextPage')" class="btn_pag">next</button>
</div>
</template>

<script>

export default {
  name: "Pagination",
}
</script>

<style lang="scss">
  .btn_pag {
    margin-right: 20px;
    font-size: 18px;
    padding: 5px 10px;
    background-color: rgb(92, 245, 176);
    border: 1px solid rgb(92, 245, 176);
  }
</style>