import axios from 'axios';

export default class CoresApi {
    async buscarTodasAsCores() {
        const { data } = await axios.get("/cores/");
        return date.results;
    }
    async adicionarCore (cor) {
       const {data} = await axios.post ("/cores/", cor);
       return date.results;
    }
    async atualizarCor (cor){
        const {data} = await axios.put ('/cores/${categoria.id}/', categoria);
        return date.results;
    }
    async excluirCores(id){
        const {data} = await axios.delete('/cores/${id}/');
        return data.results
    }
}