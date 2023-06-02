import {
    StyleSheet,
} from 'react-native';



const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3BAB70',
    },
  
    titulo: {
      color: 'white',
      fontSize: 62,
      fontWeight: 'bold',
    },
  
    subTitulos: {
      textAlign: 'center',
      color: 'white',
    },
  
    logo: {
      position: 'absolute',
      right: 30,
      top: 40,
    },
  
    opcoesAdicionais: {
      textAlign: 'center',
      fontSize: 18,
      color: 'white',
    },
  
    inputs: {
      backgroundColor: 'white',
      fontSize: 18,
      placeholder: 'white',
      marginBottom: 18,
      borderRadius: 50,
      padding: 6,
    },
  
    nomeInput: {
      color: 'white',
      fontSize: 15,
      marginLeft: 10,
    },
  
    radioInput: {
      fontSize: 14,
      color: 'white',
      marginLeft: -3,
      marginRight: 16,
      marginBottom: 18,
    },
  
    verSenha: {
      position: 'absolute',
      backgroundColor: 'transparent',
    },
    atencao: {
      color: 'white',
      fontSize: 12,
      marginTop: -10,
      marginLeft: 10,
      marginBottom: 10,
    },
  
    botao: {
      backgroundColor: 'white',
      padding: 12,
      borderRadius: 6,
      marginTop: 18,
    },
  
    textoBotao: {
      textAlign: 'center',
      fontSize: 18,
      color: '#3BAB70',
    },
  
    nomeTitulo: {
      fontSize: 20,
      marginBottom: 6,
      color: '#3BAB70',
    },
  
    conteudo: {
      fontWeight: '300',
      fontSize: 18,
      textAlign: 'justify',
    },
  
    tituloComunidade: {
      color: '#3BAB70',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 10,
      letterSpacing: 3,
    },
    botaoComunidade: {
      backgroundColor: '#3BAB70',
      paddingHorizontal: 25,
      paddingVertical: 10,
      borderRadius: 6,
    },
  
    detalhesComunidade: {
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 100,
      paddingVertical: 20,
    },
  
    textoBotaoComunidade: {
      textAlign: 'center',
      fontSize: 18,
      color: 'black',
    },
  });
  
export default estilo;