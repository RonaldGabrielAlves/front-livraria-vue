<template>
<div class="container mt-5 ">
    <h1 class="text-center">DashBoard</h1>
    <h3>Último Livro Alugado</h3>
    <table class="table mt-5 table-light table-bordered table-striped table-hover shadow p-3 mb-5 bg-white rounded">
        <thead>
            <tr class="text-center">
                <th>
                    ID
                </th>
                <th>
        
                    Nome do Livro
                
                </th>
            </tr>
        </thead>
        <tbody class="text-center">
            <tr v-for="ult of resula" :key="ult.id">
                <td>{{ult.livroalu}}</td>
                <td>{{ult.nomeliv}}</td>
            </tr>
        </tbody>
    </table>

    <h3>Livros mais alugados</h3>
    <table class="table mt-5 table-light table-bordered table-striped table-hover shadow p-3 mb-5 bg-white rounded">
        <thead>
            <tr class="text-center">
                <th>
                    ID
                </th>
                <th>
        
                    Nome do Livro
                
                </th>
                <th>
        
                    N° de Alugueis
                
                </th>
            </tr>
        </thead>
        <tbody class="text-center">
            <tr v-for="lmsa of reslmsa" :key="lmsa.id">
                <td>{{lmsa.idliv}}</td>
                <td>{{lmsa.nomeliv}}</td>
                <td>{{lmsa.quantidade}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
  import Ultlivroalug from '../services/ultlivroalug'
  import Livromsalug from '../services/livromsalug'
  
     
  export default ({
        data(){
            return{
                resula:[],
                reslmsa:[]
            }
            
        },

        name: 'Livros',
        mounted(){
            
            this.listar()

        },

        methods:{

            listar(){
                Ultlivroalug.listar().then(resposta => {
                this.resula = resposta.data
            })
                Livromsalug.listar().then(resposta => {
                this.reslmsa = resposta.data
            })
            },
            
        }
    })
</script>
