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
        <div class="d-flex w-50">
          <input type="text" @keyup.enter="search" class="form-control me-2" placeholder="Ricerca Film o Serie TV"  v-model="store.respParams.query">
          <select class="type-select w-50 form-select me-2">
            <option @click="store.SerieTvCheck = true, store.FilmCheck = true" selected value="film-&-serie-tv">Tutto</option>
            <option @click="store.SerieTvCheck = false, store.FilmCheck = true" value="film">Film</option>
            <option @click="store.SerieTvCheck = true, store.FilmCheck = false" value="serie-tv">Serie TV</option>
          </select>
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
    position: fixed;
    z-index: 999;
    width: 100%;
  }

</style>