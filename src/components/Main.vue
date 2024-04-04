<script>

  // store
  import { store } from '../data/store';
  // store

  import card from './partials/card.vue';

  export default {
    components:{
      card
    },

    data(){
      return{
        store
      }
    },
  }
</script>


<template>
  <main @click="store.overviewStatus = false">
    <h1 v-if="store.filmList.length == 0 && store.serieTvList.length == 0" class="text-white text-center fw-bold pt-3">Nessun risultato trovato</h1>
    <h1 v-if="store.filmList.length > 0 && store.FilmCheck" class="text-white text-center fw-bold pt-3">Film</h1>
    <div class="my-container">
      <card 
      v-if="store.FilmCheck"
      v-for="film in store.filmList"
      :key="film.id"
      :id="film.id"
      :title="film.title"
      :originalTitle="film.original_title"
      :language="film.original_language"
      :vote="film.vote_average"
      :img="film.poster_path"
      :date="film.release_date"
      :overview="film.overview"
      />
    </div>
    <h1 v-if="store.serieTvList.length > 0 && store.SerieTvCheck" class="text-white text-center fw-bold pt-5 pb-3">Serie TV</h1>
    <div class="my-container">
      <card
      v-if="store.SerieTvCheck"
      v-for="serie in store.serieTvList"
      :key="serie.id"
      :id="serie.id"
      :title="serie.name"
      :originalTitle="serie.original_name"
      :language="serie.original_language"
      :vote="serie.vote_average"
      :img="serie.poster_path"
      :date="serie.first_air_date"
      :overview="serie.overview"
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