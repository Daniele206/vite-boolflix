<script>
import axios from 'axios';
//store
import { store } from '../../data/store';
//store

  export default {
    data(){
      return{
        store,
        actorList: []
      }
    },

    props:{
      title: String,
      originalTitle: String,
      language: String,
      vote: String,
      img: String,
      date: String,
      overview: String,
      id: Number,
      isMovie: Boolean
    },

    methods:{
      getApi(){
        if(this.isMovie){
          axios.get(`${this.store.apiUrlInfoFilm}/${this.id}/credits` , {
            params: this.store.respInfoParams
          })
          .then(result => {
            console.log(result.data.cast);
            this.actorList = result.data.cast
          })
          .catch(error => {
            console.log(error);
          })
        }else{
          
        }
      },

      getStars(num){
        const stars = (num / 2).toFixed()
        return stars
      },

      getDate(){
        let cDate = this.date.split('-');
        cDate.splice(1, 2);
        cDate = cDate.join('');
        return cDate
      },

      showOverview(){
        if(this.id != this.store.selector && this.store.overviewStatus === false){
          this.store.overviewStatus = !this.store.overviewStatus
        }else if(this.id === this.store.selector){
          this.store.overviewStatus = !this.store.overviewStatus
        }
        this.store.selector = this.id
      }
    },

    mounted(){
      this.getApi()
    }
  }
</script>


<template>
  <div @click.stop="showOverview()" class="my-card position-relative" :style="`background-image: url(https://image.tmdb.org/t/p/w342${img}) ;`">
    <div v-if="img === null" class="ico-not-img"><i class="fa-solid fa-film"></i></div>
    <div v-if="!store.overviewStatus || store.selector !== id" class="d-center flex-column px-2 info-card">
      <div class="not-filter fs-3 fw-bold text-center">{{ title }}</div>
      <div v-if="title != originalTitle" class="not-filter fs-5 text-center">{{ originalTitle }}</div>
      <img v-if="language === 'it' || language === 'en'" class="not-filter w-25 m-2" :src="`/public/${language}.png`" :alt="language">
      <div v-else class="not-filter fs-5 fw-bold text-uppercase">{{ language }}</div>
      <div v-if="getStars(vote) == 0" class="not-filter fs-3 fw-bold">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
      <div v-else-if="getStars(vote) == 1" class="not-filter fs-3 fw-bold">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
      <div v-else-if="getStars(vote) == 2" class="not-filter fs-3 fw-bold">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
      <div v-else-if="getStars(vote) == 3" class="not-filter fs-3 fw-bold">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
      <div v-else-if="getStars(vote) == 4" class="not-filter fs-3 fw-bold">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-regular fa-star"></i>
      </div>
      <div v-else-if="getStars(vote) == 5" class="not-filter fs-3 fw-bold">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
      </div>
      <div>{{ getDate() }}</div>
    </div>
    <div v-if="store.overviewStatus && store.selector === id" class="px-3 overview">
      <span class="text-capitalize fw-bold fs-3 ">overview:</span>
      <br>
      <p v-if="overview === ''">No description found</p>
      <p>{{ overview }}</p>
      <h5 v-show="i<5" v-for="(actor, i) in actorList" :key="i" class="fw-bold">{{ actor.name }}</h5>
    </div>
  </div>

</template>


<style lang="scss" scoped>

  .my-card{
    width: 400px;
    aspect-ratio: 2/3;
    overflow: hidden;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgb(201, 201, 201);
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    z-index: 0;
    .ico-not-img{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 10rem;
      z-index: -1;
    };
    .info-card{
      background-color: rgba(0, 0, 0, 0.8);
      height: 100%;
      display: none;
    };
    &:hover .info-card{
      display: flex;
      cursor: pointer;
    };
    .overview{
      background-color: rgba(0, 0, 0, 0.8);
      height: 100%;
      cursor: pointer;
    }
  }
</style>