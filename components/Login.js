import React  from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Topo from '../assets/topo.png';
import estilo from '../estilo.js';
const Login = () => {

  const [senhaVisivel, setSenhaVisivel] = React.useState(true);
  const iconeVisivel = senhaVisivel ? 'eye-off' : 'eye';
  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };
 
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('Registro');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.5 }}>
        <Image
          source={Topo}
          resizeMode="contain"
          style={{ justifyContent: 'center', alignItems: 'center' }}
        />
      </View>
      <View style={[estilo.container, { paddingHorizontal: 30 }]}>
        <Text style={[estilo.subTitulos, { marginTop: 50, marginBottom: 30, fontSize: 28 }]}>
          O conhecimento que alimenta o mundo
        </Text>
        <Text style={estilo.nomeInput}>Email</Text>
        <TextInput style={estilo.inputs} />
        <Text style={estilo.nomeInput}>Senha</Text>
        <TextInput style={estilo.inputs} secureTextEntry={senhaVisivel} />
        <View style={[estilo.verSenha, { bottom: 283, right: 44 }]}>
          <TouchableOpacity onPress={toggleSenhaVisivel}>
            <MaterialCommunityIcons name={iconeVisivel} size={35} color={'#3BAB70'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={estilo.botao} onPress={() => alert('entrou aqui')}>
          <Text style={estilo.textoBotao}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress}>
          <Text style={[estilo.opcoesAdicionais, { marginTop: 30 }]}>Não tem uma conta?</Text>
          <Text style={[estilo.opcoesAdicionais, { marginTop: 20 }]}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
