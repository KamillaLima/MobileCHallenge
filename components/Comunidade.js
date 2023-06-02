import {Text,View,TouchableOpacity,ScrollView,Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Foto from '../assets/foto.png'
import Pontinhos from '../assets/pontinhos.png';
import estilo  from '../estilo';
import {buscaPorAssunto} from '../requisicoes/BuscaPublicacoes.js';
import * as React from 'react';
const Comunidade = () => {
  const [p,setPublicacoes] = React.useState({})
  async function busca(){
    const resultado = await buscaPorAssunto();
    console.log(resultado)
    setPublicacoes(resultado)
  }
    const navigation = useNavigation();
    return (
      <View
        style={[
          estilo.container,
          { justifyContent: 'center', backgroundColor: '#E3EFED' },
        ]}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <Image source={Foto} style={{ marginTop: 15 }} />
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <Text style={estilo.tituloComunidade}>COMUNIDADE</Text>
            <Text style={estilo.conteudo}>
              Nós somos a FarmShare e queremos ajudar pequenos produtores em uma troca de experiencia fácil e rápida
              entre eles!
            </Text>
            <Text>{'\n'}</Text>
          </View>
        </ScrollView>

        <View style={estilo.detalhesComunidade}>
          <Image
            source={Pontinhos}
            style={{ marginRight: 130, marginLeft: -60 }}
          />
          <TouchableOpacity
            style={[estilo.botaoComunidade, { marginLeft: 30 }]}
            onPress={() => navigation.navigate('Publicar')}>
            <Text style={estilo.textoBotaoComunidade}>Publicar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };  

  export default Comunidade;