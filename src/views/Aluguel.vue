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
                            <select class="w-100 form-select" v-model="aluguel.livroalu">
                                <option v-for="livdisp of resliv" :key="livdisp.id" :value="livdisp.idliv">
                                    <span>
                                        {{livdisp.nomeliv}}
                                    </span>
                                </option>    
                            </select>
                            <span v-if="aluguel.livroalu == 0"  class="text-danger">Selecione um livro! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg></span>  
            
                            <label>Cliente</label>
                            <select class="w-100 form-select" v-model="aluguel.clientealu">
                                <option v-for="cliente of rescli" :key="cliente.id" :value="cliente.idcli">
                                    <span>
                                        {{cliente.nomecli}}
                                    </span>
                                </option>    
                            </select>
                            <span v-if="aluguel.clientealu == 0"  class="text-danger">Selecione um cliente! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg></span> 
                        
                            <label>Data do Aluguel</label>
                            <input class="w-100 form-control" type="date" v-model="aluguel.dataalu">
                            <span class="text-danger" v-if="aluguel.dataalu != this.ad">
                                O data de aluguel deve ser igual a de hoje! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                    
                            <label>Previsão de Devolução</label>
                            <input class="w-100 form-control" type="date" v-model="aluguel.dataprevdev">
                            <span class="text-danger" v-if="aluguel.dataprevdev <= aluguel.dataalu || aluguel.dataprevdev == null">
                                O data de Previsão de devolução deve ser maior que a data de aluguel! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>

                            <div class="col-12" v-if="aluguel.livroalu != 0 && aluguel.clientealu != 0
                            && aluguel.dataalu == this.ad
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
                            <span class="text-danger" v-if="aluguel.datadev != this.ad">
                                O data de devolução deve ser hoje! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span> 

                            <div class="col-12" v-if="aluguel.datadev == this.ad">
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

<v-card>
    <v-card-title>
      Aluguel
      <v-spacer></v-spacer>
       <v-btn
              color="#0000FF"
              dark
              class="mb-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="addClick()"
            >
              Adicionar Aluguel
      </v-btn>
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
    >
   
    <template v-slot:[`item.actions`]="{ item }">
          <v-icon small color="#00BFFF" @click="editar(item)" data-bs-toggle="modal"
        data-bs-target="#exampleModal" v-if="item.datadev == '0000-00-00' || item.datadev == null ">
            mdi-pencil
          </v-icon>
          <v-icon small color='#FF6347' @click="remover(item)"
          v-if="item.datadev == '0000-00-00' || item.datadev == null">
            mdi-delete
          </v-icon>
          <v-icon small color="#000000" @click="editar(item)" data-bs-toggle="modal"
          data-bs-target="#devalugModal" v-if="item.datadev == '0000-00-00' || item.datadev == null">
            mdi-arrow-up-bold-box-outline
          </v-icon>
        </template></v-data-table>
  </v-card>
</div>
</template>

<script>
    import Aluguell from '../services/aluguel'
    import Livros from '../services/livros'
    import Clientes from '../services/clientes'
    import Swal from 'sweetalert2/dist/sweetalert2.js'
    var moment = require("moment");

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
                resliv:[],
                errors:[],
                ad:"",
                headers: [
                { text: 'ID', value: 'idalug' },
                { text: 'Livro', value: 'nomeliv' },
                { text: 'Cliente', value: 'nomecli' },
                { text: 'Data de Aluguel', value: 'dataalu' },
                { text: 'Previsão de Devolução', value: 'dataprevdev' },
                { text: 'Devolução', value: 'datadev' },
                { text: 'Status', value: 'statusalug' },
                { text: 'Opções', value: 'actions'},
                
                ],
            }
        },

        mounted(){
            this.listar(),
            this.pegarData()
        },

        methods:{

            pegarData(){
                var data = new Date();
                var dia = String(data.getDate()).padStart(2, "0");
                var mes = String(data.getMonth() + 1).padStart(2, "0");
                var ano = data.getFullYear();
                var dataAtual = ano + "/" + mes + "/" + dia;

                this.ad = moment(dataAtual).format("YYYY-MM-DD");
            },

            listar(){
                Aluguell.listar().then(resposta => {
                    this.resalug = resposta.data
                })
                Livros.listarlivros().then(resposta => {
                this.resliv = resposta.data
                })
                Clientes.listar().then(resposta => {
                this.rescli = resposta.data
                })
            },

            salvar(){
                if(this.aluguel.idalug){
                    Aluguell.atualizar(this.aluguel).then(resposta => {
                    this.aluguel = {};
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok",   
                    icon: "success",           
                    });
                    this.listar();
                    }).catch(e => {
                    console.log(e.response.data.errors)
                }) 
                }else{
                   Aluguell.salvaralug(this.aluguel).then(resposta => {
                    this.aluguel = {};
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok",  
                    icon: "success",            
                    });
                    this.listar();
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
                this.aluguel = {};
            }
        }

    }
</script>
