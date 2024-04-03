<script>
  //axios
  import axios from 'axios';
  //axios

  // store
  import { store } from './data/store';
  // store

  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';

  export default {
    components:{
      Header,
      Main,
      Footer
    },

    data(){
      return{
        store
      }
    },

    methods:{
      getApi(){
        axios.get(this.store.apiUrl, {
          params :this.store.respParams
        })
        .then(result => {
          this.store.filmList = result.data.results
          console.log(this.store.filmList);
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    
    mounted(){
      this.getApi()
    }
  }
</script>


<template>
  <div>
    <Header @search="getApi()"/>
    <Main />
    <Footer />
  </div>
</template>


<style lang="scss">

  @use './assets/scss/main.scss';

</style>