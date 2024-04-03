<script>
  export default {
    
  }
</script>


<template>
  <header>
    <nav class="navbar">
      <div class="container-fluid">
        <h1 class="fw-bold">BOOLFIX</h1>
        <form class="d-flex w-25" role="search">
          <input class="form-control me-2" type="search" placeholder="Ricerca Film o Serie TV" aria-label="Search">
          <button class="btn btn-outline-danger" type="submit">Cerca</button>
        </form>
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