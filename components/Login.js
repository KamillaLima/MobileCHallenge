import React, { useEffect, useState }  from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import da api externa
import api from './api.js';

import Topo from '../assets/topo.png';
import estilo from '../estilo.js';


const Login = ( {route} ) => {
  const { logado, setLogado } = route.params;

  const handleLogout = () => {
    setLogado(false);
  };

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const [senhaVisivel, setSenhaVisivel] = React.useState(true);
  const iconeVisivel = senhaVisivel ? 'eye-off' : 'eye';

  // AXIOS Login
  // Busca dos usuarios e salvando em usuarios
  useEffect(() => {
    api.get('/usuario')
    .then((resp) => {
      setUsuarios(resp.data);    
    })
  }, [])

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
        <TextInput style={estilo.inputs} onChangeText={(txt) => {setEmail(txt)}} />
        <Text style={estilo.nomeInput}>Senha</Text>
        <TextInput style={estilo.inputs} secureTextEntry={senhaVisivel} onChangeText={(txt) => {setSenha(txt)}} />
        <View style={[estilo.verSenha, { bottom: 283, right: 44 }]}>
          <TouchableOpacity onPress={toggleSenhaVisivel}>
            <MaterialCommunityIcons name={iconeVisivel} size={35} color={'#3BAB70'} />
          </TouchableOpacity>
        </View>


        <TouchableOpacity style={estilo.botao} onPress={() => {

          let usuarioAchado = false;

          // Comparacao dos dados digitados com os presentes em usuarios (API)
          for (let i = 0; i < usuarios.length; i++) {

            if (usuarios[i].ds_email === email && usuarios[i].ds_senha === senha) {

                usuarioAchado = true;
                // Alteracao de setLOGADO - SWITAR pra Principal
                setLogado(true);

                console.log(`Correto! Email: ${usuarios[i].ds_email} | senha: ${usuarios[i].ds_senha}`)
                break;
            }
          }
          // if aqui em baixo verificando se o setlogado eh true ou nao
          if (!usuarioAchado) {
            console.log(`Incorreto.`);
          }

        }}>


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
