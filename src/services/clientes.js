import { http } from "./config"

export default{

    listar:() => {
        return http.get('clientes')
    },

    salvar:(svcliente) =>{
        return http.post('clientes',svcliente)
    },

    atualizar:(svcliente) =>{
        return http.put('clientes',svcliente)
    },

    apagar:(svcliente) =>{
        return http.delete('clientes/' + svcliente.idcli )
    }

}