<script>

  // store
  import { store } from '../data/store';
  // store

  import Card from './partials/Card.vue';

  export default {
    components:{
      Card
    },

    data(){
      return{
        store
      }
    }
    
  }
</script>


<template>
  <main>
    <h1 class="text-white text-center fw-bold pt-3">Film</h1>
    <div class="my-container">
      <Card 
      v-for="film in store.filmList"
      :key="film.id"
      :title="film.title"
      :originalTitle="film.original_title"
      :language="film.original_language"
      :vote="film.vote_average"
      :img="film.poster_path"
      />
    </div>
    <h1 class="text-white text-center fw-bold pt-5 pb-3">Serie TV</h1>
    <div class="my-container">
      <Card 
      v-for="serie in store.serieTvList"
      :key="serie.id"
      :title="serie.name"
      :originalTitle="serie.original_name"
      :language="serie.original_language"
      :vote="serie.vote_average"
      :img="serie.poster_path"
      />
    </div>
  </main>
</template>


<style lang="scss" scoped>
  @use '../assets/scss/variables' as *;
  main{
    background: rgb(58, 58, 58);
    min-height: 100vh;
    padding-top: 80px;
  }

</style>