<template>
  <div id="app">
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark justify-content-center">
            <ul class="navbar-nav justify-content-center align-items-center">
                <li class="nav-item m-1">
                  <a class="navbar-brand" href="#">
                    <img src="../public/logowda.png" alt="" width="150" height="75" class="d-inline-block align-text-botton">
                  </a>
                </li>
                <li class="nav-item m-1">
                    <router-link class="btn btn-success" to="/">Home</router-link>
                </li>   
                <li class="nav-item m-1">
                    <router-link class="btn btn-light" to="/clientes">Clientes</router-link>
                </li> 
                <li class="nav-item m-1">
                    <router-link class="btn btn-light" to="/editoras">Editoras</router-link>
                </li> 
                <li class="nav-item m-1">
                    <router-link class="btn btn-light" to="/livros">Livros</router-link>
                </li> 
                <li class="nav-item m-1">
                    <router-link class="btn btn-light" to="/aluguel">Aluguel</router-link>
                </li> 
                               
            </ul>
        </nav>
    <router-view/>
  </div>
</template>



