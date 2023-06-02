import api from '../api.js'

export async function buscarUsuario(obj){
    try{
        
        const resultado = await api.post('')
        return true;
    }
    catch(error){
        console.log(error)
        return false;
    }
}