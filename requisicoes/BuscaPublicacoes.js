import api from '../api.js'

export async function buscaAlgo(categoria) {
    try {
      const resultado = await api.get(`/publicacoes?assunto=${categoria}`);
      return resultado.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  } 