<template>
    <div class="container mt-5">

    <div class="modal fade" id="exampleModal" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="example=ModalLabel">Dados do Livro</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div class="modal-body">
                
                    <form class="row g-1 text-center d-flex justify-content-center" @submit.prevent="salvar">
            
                            <label>Nome do Livro</label>
                            <input class="w-100 form-control" type="text" v-model="livro.nomeliv">
                            <span class="text-danger" v-if="livro.nomeliv.length < 2">
                                Mínimo de 2 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                            <span class="text-danger" v-if="livro.nomeliv.length > 50">
                                Máximo de 50 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>

                            <label>Editora</label>
                            <select class="w-50 form-select" v-model="livro.editliv">
                                <option v-for="editora of resedi" :key="editora.id" :value="editora.idedi">
                                    <span>
                                        {{editora.nomedi}}
                                    </span>
                                </option>    
                            </select>
                            <span v-if="livro.editliv == 0"  class="text-danger">Selecione uma editora! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg></span>
                            
                            <label>Autor</label>
                            <input class="w-100 form-control" type="text" v-model="livro.autorliv">
                            <span class="text-danger" v-if="livro.autorliv.length < 3">
                                Mínimo de 3 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                            <span class="text-danger" v-if="livro.autorliv.length > 50">
                                Máximo de 50 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>

                            <label>Lançamento</label>
                            <input class="w-100 form-control" type="date" v-model="livro.lcmliv">
                            <span class="text-danger" v-if="livro.lcmliv > this.ad || livro.lcmliv.length == 0">
                                O Lançamento deve ser menor ou igual a data atual! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>

                            <label>Quantidade</label>
                            <input class="w-100 form-control" type="number" v-model="livro.qtdliv">
                            <span class="text-danger" v-if="livro.qtdliv < 1">
                                Quantidade mínima: 1! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>

                            <div class="col-12" v-if="livro.nomeliv.length >= 2 && livro.nomeliv.length <= 50
                            && livro.editliv != 0
                            && livro.autorliv.length >= 3 && livro.autorliv.length <= 50
                            && livro.lcmliv <= this.ad 
                            && livro.lcmliv.length != 0
                            && livro.qtdliv >= 1">
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
      Livros
      <v-spacer></v-spacer>
      <v-btn
              color="#0000FF"
              dark
              class="mb-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="limparcampos();"
            >
              Adicionar Livro
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
      :items="resliv"
      :search="search"
    >
    <template v-slot:[`item.actions`]="{ item }">
          <v-icon small color="#00BFFF" @click="editar(item)" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
            mdi-pencil
          </v-icon>
          <v-icon small color='#FF6347' @click="remover(item)">
            mdi-delete
          </v-icon>
        </template>
    </v-data-table>
  </v-card>
</div>
</template>

<script>
    import Livros from '../services/livros'
    import Editoras from '../services/editoras'
    import Swal from 'sweetalert2/dist/sweetalert2.js'
    var moment = require("moment");

    export default ({
        data(){
            return{
                livro:{ 
                    idliv:0,
                    nomeliv:'',
                    editliv:'',
                    autorliv:'',
                    lcmliv:'',
                    qtdliv:0,
                },
                search:"",
                resliv:[],
                resedi:[],
                errors:[],
                ad:"",
                headers: [
                { text: 'ID', value: 'idliv' },
                { text: 'Nome Livro', value: 'nomeliv' },
                { text: 'Editora', value: 'nomedi' },
                { text: 'Autor', value: 'autorliv' },
                { text: 'Lançamento', value: 'lcmliv' },
                { text: 'Quantidade', value: 'qtdliv' },
                { text: 'Opções', value: 'actions'},
                
                ],
            }
        },

        name: 'Livros',
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
                Livros.listarlivros().then(resposta => {
                this.resliv = resposta.data
            })
                Editoras.listareditoras().then(resposta => {
                this.resedi = resposta.data
            })
            },
            salvar(){
                if(!this.livro.idliv){
                    Livros.salvarlivros(this.livro).then(resposta => {
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok",  
                    icon: "success",            
                    });
                    this.limparcampos();
                    this.listar();
                    }).catch(e => {
                    console.log(e.response.data.errors)
                })
                }else{
                   Livros.atualizarlivros(this.livro).then(resposta => {
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok", 
                    icon: "success",             
                    });
                    this.limparcampos();
                    this.listar();
                    }).catch(e => {
                    console.log(e.response.data.errors)
                })  
                }
                
            },
            editar(livro){
                this.livro = livro
            },
            
            remover(livro){

                if(confirm('Tem certeza que deseja excluir o livro?')){
                    Livros.apagarlivros(livro).then(resposta =>{
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok",
                    icon: "info",              
                    });
                    this.listar()
                })
                }      
            },

            limparcampos(){
                this.livro = {
                    idliv:0,
                    nomeliv:"",
                    editliv:"",
                    autorliv:"",
                    lcmliv:"",
                    qtdliv:0,
                };
            }
        }
    })
</script>