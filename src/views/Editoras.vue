<template>
    <div class="container mt-5">
        <div class="modal fade" id="exampleModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="example=ModalLabel">Dados da Editora</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                    </div>
                        <div class="modal-body">
                            <form class="row g-1 text-center d-flex justify-content-center" @submit.prevent="salvar">
                    
                                <label>Nome da Editora</label>
                                <input class="w-100 form-control" type="text" v-model="editora.nomedi">
                                <span class="text-danger" v-if="editora.nomedi.length < 3">
                                Mínimo de 3 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>
                                <span class="text-danger" v-if="editora.nomedi.length > 50">
                                Máximo de 50 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>

                                <label>Cidade</label>
                                <input class="w-100 form-control" type="text" v-model="editora.cidadedi">
                                <span class="text-danger" v-if="editora.cidadedi.length < 3">
                                Mínimo de 3 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>
                                <span class="text-danger" v-if="editora.cidadedi.length > 50">
                                Máximo de 50 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>

                                <div class="col-12" v-if="editora.nomedi.length >= 3 && editora.nomedi.length <= 50
                                && editora.cidadedi.length >= 3 && editora.cidadedi.length <= 50">
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
      Editoras
      <v-spacer></v-spacer>
      <v-btn
              color="#0000FF"
              dark
              class="mb-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="addClick()"
            >
              Adicionar Editora
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
      :items="resedi"
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
    import Editoras from '../services/editoras'
    import Swal from 'sweetalert2/dist/sweetalert2.js'

    export default ({
        data(){
            return{
                editora:{ 
                    idedi:0,
                    nomedi:'',
                    cidadedi:'',
                },
                search:"",
                resedi:[],
                errors:[],
                headers: [
                { text: 'ID', value: 'idedi' },
                { text: 'Nome Editora', value: 'nomedi' },
                { text: 'Cidade Editora', value: 'cidadedi' },
                { text: 'Opções', value: 'actions'},

                
                ],
            }
        },

        computed: {
            FilteredClientes() {
                return this.resedi.filter(editora => editora.nomedi.toLowerCase().includes(this.search.toLowerCase())
                );
                
            }
        },

        name: 'Editoras',
        mounted(){
            
            this.listar()

        },

        methods:{

            sortBy(prop,asc){
                if(asc){
                this.resedi.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
                }else{
                this.resedi.sort((a,b) => b[prop] < a[prop] ? -1 : 1)
                }
            },

            listar(){
                Editoras.listareditoras().then(resposta => {
                this.resedi = resposta.data
            })
            },
            salvar(){
                if(!this.editora.idedi){
                    Editoras.salvareditoras(this.editora).then(resposta => {
                    this.editora = {};
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
                   Editoras.atualizareditoras(this.editora).then(resposta => {
                    this.editora = {};
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
            editar(editora){
                this.editora = editora
            },
            
            remover(editora){

                if(confirm('Tem certeza que deseja excluir a editora?')){
                    Editoras.apagareditoras(editora).then(resposta =>{
                    this.listar()
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok",  
                    icon: "info",            
                    });
                })
                }      
            },

            addClick(){
                this.editora = {};
            }
        }

    })
</script>