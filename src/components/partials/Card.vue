<script>
  export default {
    props:{
      title: String,
      originalTitle: String,
      language: String,
      vote: String,
      img: String
    }
  }
</script>


<template>
  <div class="my-card position-relative" :style="`background-image: url(https://image.tmdb.org/t/p/w342${img}) ;`">
    <div v-if="img === null" class="ico-not-img"m><i class="fa-solid fa-film"></i></div>
    <div class="d-center flex-column info-card">
      <div class="not-filter fs-3 fw-bold text-center">{{ title }}</div>
      <div class="not-filter fs-5 text-center">{{ originalTitle }}</div>
      <img v-if="language === 'it' || language === 'en'" class="not-filter w-25 m-2" :src="`/public/${language}.png`" :alt="language">
      <div v-else class="not-filter fs-5 fw-bold">{{ language }}</div>
      <div class="not-filter fs-3 fw-bold">{{ vote }}</div>
    </div>
  </div>

</template>


<style lang="scss" scoped>

  .my-card{
    width: 400px;
    aspect-ratio: 10/14;
    overflow: hidden;
    color: white;
    background-color: rgb(201, 201, 201);
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    .ico-not-img{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 5rem;
    };
    &:hover .ico-not-img{
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
  }
</style>