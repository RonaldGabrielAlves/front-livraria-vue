<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-sm bg-primary navbar-dark justify-content-center">
      <a class="navbar-brand" href="#">
            <img src="../public/logowda.png" alt="" width="150" height="75">
      </a>
      <ul class="navbar-nav justify-content-center">
        
        <li class="nav-item m-1">
          <router-link to="/" class="btn btn-info">Home</router-link>
        </li>
        <li class="nav-item m-1">
          <router-link to="/clientes" class="btn btn-light">Clientes</router-link>
        </li>
        <li class="nav-item m-1">
          <router-link to="/editoras" class="btn btn-light">Editoras</router-link>
        </li>
        <li class="nav-item m-1">
          <router-link to="/livros" class="btn btn-light">Livros</router-link>
        </li>
        <li class="nav-item m-1">
          <router-link to="/aluguel" class="btn btn-light">Aluguel</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  
</script>

<style>

</style>
