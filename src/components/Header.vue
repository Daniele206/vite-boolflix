<script>
  // store
  import { store } from '../data/store';
  // store


  export default {
    data(){
      return{
        store
      }
    },

    methods:{
      search(){
        this.$emit ('search')
      }
    }
    
  }
</script>


<template>
  <header>
    <nav class="navbar">
      <div class="container-fluid">
        <h1 class="fw-bold">BOOLFIX</h1>
        <div class="d-flex w-25">
          <input type="text" class="form-control me-2" placeholder="Ricerca Film o Serie TV"  v-model="store.respParams.query">
          <button @click="search" class="btn btn-outline-danger" type="button">CERCA</button>
        </div>
      </div>
    </nav>
  </header>
</template>


<style lang="scss" scoped>
  @use '../assets/scss/variables' as *;

  header nav{
    background-color: black;
    color: red;
    height: 80px;
  }

</style>