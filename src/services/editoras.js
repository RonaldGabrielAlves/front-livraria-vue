import { http } from "./config"

export default{

    listareditoras:() => {
        return http.get('editoras')
    },

    salvareditoras:(sveditora) =>{
        return http.post('editoras',sveditora)
    },

    atualizareditoras:(sveditora) =>{
        return http.put('editoras',sveditora)
    },

    apagareditoras:(sveditora) =>{
        return http.delete('editoras/' + sveditora.idedi )
    }

}