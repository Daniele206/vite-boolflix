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
    <div class="my-container">
      <Card 
      v-for="film in store.filmList"
      :key="film.id"
      :title="film.title"
      :originalTitle="film.original_title"
      :language="film.original_language"
      :vote="film.vote_average"
      />
    </div>
  </main>
</template>


<style lang="scss" scoped>
  @use '../assets/scss/variables' as *;
  main{
    background: rgb(58, 58, 58);
    min-height: calc(100vh - 80px)
  }

</style>