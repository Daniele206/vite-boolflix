<script>
  export default {
    props:{
      title: String,
      originalTitle: String,
      language: String,
      vote: String,
    }
  }
</script>


<template>
  <div class="my-W-H-card d-center flex-column">
    <div class="fs-3 fw-bold text-center">{{ title }}</div>
    <div class="fs-5 text-center">{{ originalTitle }}</div>
    <img v-if="language === 'it' || language === 'en'" class="w-25 m-2" :src="`/public/${language}.png`" :alt="language">
    <div v-else class="fs-5 fw-bold">{{ language }}</div>
    <div class="fs-3 fw-bold">{{ vote }}</div>
  </div>
</template>


<style lang="scss" scoped>
  .my-W-H-card{
    width: 200px;
    min-height: 300px;
    background-color: green;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

</style>