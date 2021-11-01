import { http } from "./config"

export default{

    listar:() => {
        return http.get('aluguel')
    },

    salvaralug:(svaluguel) => {
        return http.post('aluguel',svaluguel)
    },

    atualizar:(svaluguel) => {
        return http.put('aluguel', svaluguel)
    },

    apagar:(svaluguel) => {
        return http.delete('aluguel/' + svaluguel.idalug)
    }

}