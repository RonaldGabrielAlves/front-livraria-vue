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
        
    <button type="button" 
        class="btn btn-primary m-2 float-start"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="addClick()">
        Adicionar Livro
    </button>
    <table class="table mt-5 table-light table-bordered table-striped table-hover shadow p-3 mb-5 bg-white rounded">
    <thead>
        <tr class="text-center">
            <th>
                ID
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <button type="button" class="btn btn-light btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                </button>

                <button type="button" class="btn btn-light btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>
                </button>
                </div>
            </th>
            <th>
    
                Nome
            
            </th>
            <th>
        
                Cidade 

            </th>
            <th>
                Opções
            </th>
        </tr>
    </thead>
        <tbody class="text-center">
            <tr v-for="editora of resedi" :key="editora.id">
                <td>{{editora.idedi}}</td>
                <td>{{editora.nomedi}}</td>
                <td>{{editora.cidadedi}}</td>
                <td>
                    <button type="button" class="btn btn-warning m-1 text-light"
                    @click="editar(editora)" 
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-toggle="tooltip" data-placement="top" title="Editar Editora">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg>
                    </button>
                    <button type="button" class="btn btn-danger m-1 text-light" @click="remover(editora)"
                    data-toggle="tooltip" data-placement="top" title="Deletar Editora">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>

                </td>
            </tr>
        </tbody>
</table>
</div>
</template>

<script>
    import Editoras from '../services/editoras'

    export default ({
        data(){
            return{
                editora:{ 
                    idedi:0,
                    nomedi:'',
                    cidadedi:'',
                },
                resedi:[],
                errors:[]
            }
        },
        name: 'Editoras',
        mounted(){
            
            this.listar()

        },

        methods:{
            listar(){
                Editoras.listareditoras().then(resposta => {
                this.resedi = resposta.data
            })
            },
            salvar(){
                if(!this.editora.idedi){
                    Editoras.salvareditoras(this.editora).then(resposta => {
                    this.editora = {}
                    alert('Salvo com sucesso!')
                    this.listar()
                    }).catch(e => {
                    console.log(e.response.data.errors)
                })
                }else{
                   Editoras.atualizareditoras(this.editora).then(resposta => {
                    this.editora = {}
                    alert('Dados atualizados com sucesso!')
                    this.listar()
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
                    this.listar();
                })
                }      
            },

            addClick(){
                this.idliv=0;
                this.nomeliv="";
                this.editliv="";
                this.autorliv="";
                this.lcmliv="";
                this.qtdliv="";
            }
        }

    })
</script>