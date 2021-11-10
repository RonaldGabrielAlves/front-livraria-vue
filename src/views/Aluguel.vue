<template>
    <div class="container mt-5 ">
        
    <div class="modal fade" id="exampleModal" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="example=ModalLabel">Dados do Aluguel</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <form class="row g-1 text-center d-flex justify-content-center" @submit.prevent="salvar">

                            <label>Livro</label>
                            <select class="w-50 form-select" v-model="aluguel.livroalu">
                                <option v-for="livdisp of reslivdisp" :key="livdisp.id" v-show="livdisp.restante > 0">
                                    {{livdisp.idliv}}
                                </option>
                            </select>
                            <select class="w-50 form-select">
                                <option>
                                    Catálogo
                                </option>
                                <option v-for="livdisp of reslivdisp" :key="livdisp.id" v-show="livdisp.restante > 0">
                                    {{livdisp.idliv}}
                                    {{livdisp.nomeliv}}
                                </option>
                            </select> 
                            <span v-if="aluguel.livroalu == 0"  class="text-danger">Selecione um livro! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg></span>  
            
                            <label>Cliente</label>
                            <select class="w-50 form-select" v-model="aluguel.clientealu">
                                <option v-for="cliente of rescli" :key="cliente.id">
                                    {{cliente.idcli}}
                                </option>
                            </select>
                            <select class="w-50 form-select">
                                <option>
                                    Catálogo
                                </option>
                                <option v-for="cliente of rescli" :key="cliente.id">
                                    {{cliente.idcli}}
                                    {{cliente.nomecli}}
                                </option>
                            </select> 
                            <span v-if="aluguel.clientealu == 0"  class="text-danger">Selecione um cliente! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg></span> 
                        
                            <label>Data do Aluguel</label>
                            <input class="w-100 form-control" type="date" v-model="aluguel.dataalu">
                            <span class="text-danger" v-if="aluguel.dataalu == 0">
                                O data de aluguel não deve ser nulo! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                    
                            <label>Previsão de Devolução</label>
                            <input class="w-100 form-control" type="date" v-model="aluguel.dataprevdev">
                            <span class="text-danger" v-if="aluguel.dataprevdev <= aluguel.dataalu">
                                O data de Previsão de devolução deve ser maior que a data de aluguel! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>

                            <div class="col-12" v-if="aluguel.livroalu != 0 && aluguel.clientealu != 0
                            && aluguel.dataalu != 0
                            && aluguel.dataprevdev > aluguel.dataalu">
                            <button class="btn btn-success btn-md w-100 mt-3 shadow">Salvar</button>
                            </div>
                            <div class="col-12" v-else>
                            <button class="btn btn-success btn-md w-100 mt-3 shadow" disabled>Salvar</button>
                            </div>

                    </form>

                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="devalugModal" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Devolver livro</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <form class="row g-1 text-center d-flex justify-content-center" @submit.prevent="salvar">

                            <label>Devolver</label>
                            <input class="w-100 form-control" type="date" v-model="aluguel.datadev">
                            <span class="text-danger" v-if="aluguel.datadev <= aluguel.dataalu">
                                O data de devolução deve ser maior que a data de aluguel! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span> 

                            <div class="col-12" v-if="aluguel.datadev > aluguel.dataalu">
                            <button class="btn btn-success btn-md w-100 mt-3 shadow">Salvar</button>
                            </div>
                            <div class="col-12" v-else>
                            <button class="btn btn-success btn-md w-100 mt-3 shadow" disabled>Salvar</button>
                            </div>

                    </form>

                </div>
            </div>
        </div>
    </div>

    <button type="button" 
        class="btn btn-primary m-2 float-start text-light"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="addClick()">
        Criar Aluguel
    </button>

    <div class="d-flex flex-row">
        <input class="form-control m-2" v-model="search" placeholder="Pesquisar">
    </div>

    <table class="table mt-5 table-light table-bordered table-striped table-hover shadow p-3 mb-5 bg-white rounded">
    <thead>
        <tr class="text-center">
            <th>
                ID
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <button type="button" class="btn btn-light btn-sm" @click="sortBy('idalug',true)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                </button>

                <button type="button" class="btn btn-light btn-sm" @click="sortBy('idalug',false)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>
                </button>
                </div>
            </th>
            <th>
    
                Livro
            
            </th>
            <th>   
                Cliente
                
            </th>
            <th>
        
                Data de Aluguel 

            </th>
            <th>
                Previsão de Devolução

            </th>
            <th>
                Devolução

            </th>
            <th>
                Status

            </th>
            <th>
                Opções
            </th>
        </tr>
    </thead>
        <tbody class="text-center">
            <tr v-for="aluga of FilteredAluguel" :key="aluga.id">
                <td>{{aluga.idalug}}</td>
                <td>{{aluga.nomeliv}}</td>
                <td>{{aluga.nomecli}}</td>
                <td>{{aluga.dataalu}}</td>
                <td>{{aluga.dataprevdev}}</td>
                <td>{{aluga.datadev}}</td>
                <td>
                    
                    <div v-if="aluga.datadev > aluga.dataprevdev">
                        <button class="btn btn-sm btn-danger">Atrasado</button>
                    </div>
                    <div v-else-if="aluga.datadev == '0000-00-00'">
                        <button class="btn btn-sm btn-info" 
                        @click="editar(aluga)"
                        data-bs-toggle="modal"
                        data-bs-target="#devalugModal">
                            Devolver
                        </button>
                    </div>
                    <div v-else>
                        <button class="btn btn-sm btn-success">No Prazo</button>
                    </div>

                </td>
                <td>
                    <button type="button" class="btn btn-warning m-1 text-light"
                    @click="editar(aluga)"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal" v-if="aluga.datadev == '0000-00-00'"
                    data-toggle="tooltip" data-placement="top" title="Editar Aluguel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg>
                    </button>

                    <button type="button" class="btn btn-danger m-1 text-light" 
                    @click="remover(aluga)" v-if="aluga.datadev != '0000-00-00'"
                    data-toggle="tooltip" data-placement="top" title="Deletar Aluguel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>

                </td>
            </tr>
        </tbody>
</table>
<v-card>
    <v-card-title>
      Aluguel
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="resalug"
      :search="search"
    ></v-data-table>
  </v-card>
</div>
</template>

<script>
    import Aluguell from '../services/aluguel'
    import Livrodisp from '../services/livrodisp'
    import Clientes from '../services/clientes'
    import Swal from 'sweetalert2/dist/sweetalert2.js'

    export default {
        data(){
            return{
                aluguel:{
                    idalug:0,
                    livroalu:'',
                    clientealu:'',
                    dataalu:'',
                    dataprevdev:'',
                    datadev:''
                },
                search:"",
                resalug:[],
                rescli:[],
                reslivdisp:[],
                errors:[],
                headers: [
                { text: 'ID', value: 'idalug' },
                { text: 'Livro', value: 'nomeliv' },
                { text: 'Cliente', value: 'nomecli' },
                { text: 'Data de Aluguel', value: 'dataalu' },
                { text: 'Previsão de Devolução', value: 'dataprevdev' },
                { text: 'Devolução', value: 'datadev' },
                
                ],
            }
        },

         computed: {
            FilteredAluguel() {
                return this.resalug.filter(aluga => aluga.nomeliv.toLowerCase().includes(this.search.toLowerCase())
                )
                
            }
        },

        mounted(){
            this.listar()
        },

        methods:{

            sortBy(prop,asc){
                if(asc){
                this.resalug.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
                }else{
                this.resalug.sort((a,b) => b[prop] < a[prop] ? -1 : 1)
                }
            },

            listar(){
                Aluguell.listar().then(resposta => {
                    this.resalug = resposta.data
                })
                Livrodisp.listar().then(resposta => {
                this.reslivdisp = resposta.data
                }) 
                Clientes.listar().then(resposta => {
                this.rescli = resposta.data
                })
            },

            salvar(){
                if(this.aluguel.idalug){
                    Aluguell.atualizar(this.aluguel).then(resposta => {
                    this.aluguel = {}
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok",   
                    icon: "success",           
                    });
                    this.listar()
                    }).catch(e => {
                    console.log(e.response.data.errors)
                }) 
                }else{
                   Aluguell.salvaralug(this.aluguel).then(resposta => {
                    this.aluguel = {}
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok",  
                    icon: "success",            
                    });
                    this.listar()
                    }).catch(e => {
                    console.log(e.response.data.errors)
                })   
                }
                
            },

            editar(aluguel){
                this.aluguel = aluguel
            },

            remover(aluguel){

                if(confirm('Deseja realmente apagar o aluguel?')){
                   Aluguell.apagar(aluguel).then(resposta => {
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok",   
                    icon: "info",           
                    });
                    this.listar()
                }) 
                }
        
            },

            addClick(){
                this.idalug=0;
                this.livroalu="";
                this.clientealu="";
                this.dataalu="";
                this.dataprevdev="";
                this.datadev="";
            }
        }

    }
</script>
