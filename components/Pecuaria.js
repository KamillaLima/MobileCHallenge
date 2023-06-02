import {Text,View,TouchableOpacity,ScrollView,Image,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React,{useState,useEffect} from 'react';
import ImagemPecuaria from '../assets/pecuaria.jpg';
import Pontinhos from '../assets/pontinhos.png';
import estilo  from '../estilo';
import {buscaAlgo} from '../requisicoes/BuscaPublicacoes'
const Pecuaria = () => {
  const navigation = useNavigation();
  const [Publicacoes, setPublicacoes] = React.useState({});
  useEffect(() => {
    Busca();
  }, []);
  async function Busca() {
    const resultado = await buscaAlgo('pecuaria');
    console.log(resultado);
    if (resultado) {
      setPublicacoes(resultado);
    } else {
      alert('Nada encontrado!');
    }
  }
    return (
      <View
        style={[
          estilo.container,
          { justifyContent: 'center', backgroundColor: '#E3EFED' },
        ]}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <Image source={ImagemPecuaria} style={{ marginTop: 15 }} />
          </View>
          <View style={{ paddingHorizontal: 12 }}>
            <Text style={estilo.tituloComunidade}>Pecuária</Text>

            <FlatList
            data={Publicacoes}
            renderItem={({ item }) => (
              <>
                <Text style={estilo.nomeTitulo}>{item.titulo}</Text>
                <Text style={estilo.conteudo}>{item.conteudo}</Text>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
              </>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
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


  export default Pecuaria;