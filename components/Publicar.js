import React, { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Logo from '../assets/logo.png';
import Plantas from '../assets/plantinhas.jpg';
import { useNavigation } from '@react-navigation/native';
import estilo from '../estilo.js';
const Publicar = () => {
  const [assunto, setAssunto] = useState('');
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const verificarCamposPublicacao = () => {
    if (titulo === '' || conteudo === '' || assunto === '') {
      alert('erro');
    } else {
      console.log('beleza');
    }
  };
  const navigation = useNavigation();
  const options = [
    { label: 'Agricultura', value: 'Agricultura' },
    { label: 'Controle de pragas', value: 'Controle de pragas' },
    { label: 'Pecuária', value: 'Pecuária' },
  ];
  return (
    <View style={estilo.container}>
      <Image source={Logo} style={[estilo.logo, { top: 10 }]} />
      <View style={{ flex: 1, marginTop: 80 }}>
        <Image
          source={Plantas}
          resizeMode="cover"
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 12, flex: 3 }}>
        <ScrollView>
          <Text style={[estilo.subTitulos, { margin: 8, fontSize: 18 }]}>
            Compartilhe seus conhecimentos em nossa comunidade e ajude outros
            produtores!
          </Text>
          <Text style={estilo.nomeInput}>Título</Text>
          <TextInput
            style={estilo.inputs}
            value={titulo}
            onChangeText={setTitulo}
          />
          <Text style={[estilo.nomeInput, { marginBottom: 8 }]}>Assunto</Text>
          <RadioForm
            formHorizontal={true}
            buttonColor={'white'}
            selectedButtonColor={'white'}
            radio_props={options}
            buttonSize={12}
            initial={null}
            onPress={(value) => {
              setAssunto(value);
            }}
            labelStyle={estilo.radioInput}
          />
          <Text style={estilo.nomeInput}>Conteudo</Text>
          <TextInput
            style={[estilo.inputs, { borderRadius: 5 }]}
            multiline
            value={conteudo}
            onChangeText={setConteudo}
          />

          <TouchableOpacity
            style={estilo.botao}
            onPress={verificarCamposPublicacao}>
            <Text style={estilo.textoBotao}>Publicar</Text>
          </TouchableOpacity>
          <Text>{'\n'}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Publicar;
