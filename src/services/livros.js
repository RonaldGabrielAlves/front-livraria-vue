import { http } from "./config"

export default{

    listarlivros:() => {
        return http.get('livros')
    },

    salvarlivros:(svlivro) =>{
        return http.post('livros',svlivro)
    },

    atualizarlivros:(svlivro) =>{
        return http.put('livros',svlivro)
    },

    apagarlivros:(svlivro) =>{
        return http.delete('livros/' + svlivro.idliv )
    }

}