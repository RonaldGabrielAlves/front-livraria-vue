<template>
    <div class="container mt-5 ">
        
        
    <div class="modal fade" id="exampleModal" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="example=ModalLabel">Dados do Cliente</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                        <form class="row g-1 text-center d-flex justify-content-center" @submit.prevent="guardar">
            
                                <label>Nome do Cliente</label>
                                <input class="w-100 form-control" type="text" v-model="cliente.nomecli">
                                <span class="text-danger" v-if="cliente.nomecli.length < 3">
                                Mínimo de 3 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>
                                <span class="text-danger" v-if="cliente.nomecli.length > 50">
                                Máximo de 50 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>
                
                                <label>Endereço</label>
                                <input class="w-100 form-control" type="text" v-model="cliente.enderecocli">
                                <span class="text-danger" v-if="cliente.enderecocli.length < 5">
                                Mínimo de 5 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>
                                <span class="text-danger" v-if="cliente.enderecocli.length > 50">
                                Máximo de 50 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>
                            
                                <label>Cidade</label>
                                <input class="w-100 form-control" type="text" v-model="cliente.cidadecli">
                                <span class="text-danger" v-if="cliente.cidadecli.length < 3">
                                Mínimo de 3 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>
                                <span class="text-danger" v-if="cliente.cidadecli.length > 50">
                                Máximo de 50 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>
                        
                                <label>Email</label>
                                <input class="w-100 form-control" type="email" v-model="cliente.emailcli">
                                <span class="floating-placeholder" v-if="msg.email">{{msg.email}}</span>
                                <span class="text-danger" v-if="cliente.emailcli.length < 5">
                                Mínimo de 5 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>
                                <span class="text-danger" v-if="cliente.emailcli.length > 50">
                                Máximo de 50 caracteres! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                </span>  

                                <div class="col-12" v-if="cliente.nomecli.length >= 3 && cliente.nomecli.length <= 50
                                && cliente.enderecocli.length >= 5 && cliente.enderecocli.length <= 50
                                && cliente.cidadecli.length >= 3 && cliente.cidadecli.length <= 50
                                && cliente.emailcli.length >= 5 && cliente.emailcli.length <= 50">
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
      Clientes
      <v-spacer></v-spacer>
      <v-btn
              color="#0000FF"
              dark
              class="mb-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="limparcampos()"
            >
              Adicionar Cliente
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
      :items="rescli"
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
import Clientes from '../services/clientes'
import Swal from 'sweetalert2/dist/sweetalert2.js'

    export default ({
        data(){
            return{
                cliente:{ 
                    idcli:0,
                    nomecli:'',
                    enderecocli:'',
                    cidadecli:'',
                    emailcli:''
                },
                search:"",
                rescli:[],
                errors:[],
                msg: [],
                
                headers: [
                { text: 'ID', value: 'idcli' },
                { text: 'Nome Cliente', value: 'nomecli' },
                { text: 'Endereço', value: 'enderecocli' },
                { text: 'Cidade', value: 'cidadecli' },
                { text: 'Email', value: 'emailcli' },
                { text: 'Opções', value: 'actions'},
                
                ],

            }
        },
        
        name: 'Clientes',
        mounted(){
            
            this.listar()

        },
        watch: {
            emailcli(value) {
            this.emailcli = value;
            this.validateEmail(value);
        }
        },
        methods:{

            listar(){
                Clientes.listar().then(resposta => {
                this.rescli = resposta.data
            })
            },

            guardar(){
                if(this.cliente.idcli){
                    Clientes.atualizar(this.cliente).then(resposta => {
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok",   
                    icon: "info",           
                    });
                    this.limparcampos();
                    this.listar();
                    }).catch(e => {
                    console.log(e.response.data.errors)
                }) 
                }else{
                   Clientes.salvar(this.cliente).then(resposta => {
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok",  
                    icon: "info",            
                    });
                    this.limparcampos();
                    this.listar();
                    }).catch(e => {
                    console.log(e.response.data.errors)
                })   
                }
                
            },

            editar(cliente){
                this.cliente = cliente
            },
            
            remover(cliente){

                if(confirm('Tem certeza que deseja excluir o cliente?')){
                    Clientes.apagar(cliente).then(resposta =>{
                    Swal.fire({                             
                    text: resposta.data,             
                    confirmButtonText: "Ok",  
                    icon: "info",            
                    });
                    this.listar()
                })
                }   
            },

            validateEmail(value){
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
            {
            this.msg['emailcli'] = '';
            this.listar()
            } else{
            this.msg['emailcli'] = 'Please enter a valid email address';
            this.listar()
            } 
            },

            limparcampos(){
                this.cliente = {
                   idcli:0,
                    nomecli:"",
                    enderecocli:"",
                    cidadecli:"",
                    emailcli:"",
                };
            }

        }
    })
</script>