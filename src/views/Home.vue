<template>
  <div class="home container mt-5">
    <h1 class="text-center">
      DashBoard
    </h1>

    <h3>
      Último livro alugado
    </h3>
    <table class="table mt-5 table-light table-bordered table-striped table-hover shadow p-3 mb-5 bg-white rounded">
      <thead>
        <tr class="text-center">

            <th> 
                ID   
            </th>
            <th>   
                Livro          
            </th>
        </tr>
      </thead>
      <tbody class="text-center">
            <tr v-for="ula of resula" :key="ula.id">
                <td>{{ula.livroalu}}</td>
                <td>{{ula.nomeliv}}</td>
            </tr>
        </tbody>
    </table>

    <h3>
      Livros mais Alugados
    </h3>
    <table class="table mt-5 table-light table-bordered table-striped table-hover shadow p-3 mb-5 bg-white rounded">
      <thead>
        <tr class="text-center">

            <th> 
                ID   
            </th>
            <th>   
                Livro          
            </th>
            <th>   
                N° de alugueis          
            </th>
        </tr>
      </thead>
      <tbody class="text-center">
            <tr v-for="msa of resmsa" :key="msa.id">
                <td>{{msa.idliv}}</td>
                <td>{{msa.nomeliv}}</td>
                <td>{{msa.quantidade}}</td>
            </tr>
        </tbody>
    </table>
    

    <h3>
      Estoque de Livros
    </h3>
    <div class="table-overflow">
    <table class="table mt-5 table-light table-bordered table-striped table-hover shadow p-3 mb-5 bg-white rounded">
      <thead>
        <tr class="text-center">

            <th> 
                ID   
            </th>
            <th>   
                Livro          
            </th>
            <th>   
                Quantidade Restante          
            </th>
        </tr>
      </thead>
      <tbody class="text-center">
            <tr v-for="livdisp of reslivdisp" :key="livdisp.id">
                <td>{{livdisp.idliv}}</td>
                <td>{{livdisp.nomeliv}}</td>
                <td>{{livdisp.restante}}</td>
            </tr>
      </tbody>
    </table>
    </div>
    
  </div>
</template>

<script>
  import Livromsa from '../services/livromsalug'
  import Ultlivalug from '../services/ultlivroalug'
  import Livrodisp from '../services/livrodisp'

  export default{

    data(){
      return{
        resmsa:[],
        resula:[],
        reslivdisp:[]
      }
    },

    mounted(){
      this.listar()
    },

    methods:{
      listar(){
        Livromsa.listar().then(resposta => {
          this.resmsa = resposta.data
        })
        Ultlivalug.listar().then(resposta => {
          this.resula = resposta.data
        })  
        Livrodisp.listar().then(resposta => {
          this.reslivdisp = resposta.data
        })      
    }
    }
  }
</script>
