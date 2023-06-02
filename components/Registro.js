import React from 'react';
import {
    View, Image, Text, TouchableOpacity, TextInput 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native';
import Logo from '../assets/logo.png';
import estilo from '../estilo.js';
import { buscarUsuario } from '../requisicoes/buscarUsuario';
const Registro = () => {
    const [senhaVisivel, setSenhaVisivel] = React.useState(true);
    const iconeVisivel = senhaVisivel ? 'eye-off' : 'eye';
    const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
    };
    const navigation = useNavigation();
    const handleButtonPress = () => {
      navigation.navigate('Login');
    };
    const [nome,setNome] =React.useState('')
    const [username,setUsername] =React.useState('')
    const [senha,setSenha] =React.useState('')
    const [email,setEmail] = React.useState('')
    const [estado,setEstado] = React.useState('')
    const id = 12;
    return (
      <View
        style={[
          estilo.container,
          { paddingHorizontal: 30, paddingVertical: 80 },
        ]}>
        <Image style={estilo.logo} source={Logo} />
        <Text style={[estilo.titulo, { marginBottom: -20 }]}>OLÁ!</Text>
        <Text style={[estilo.titulo, { marginBottom: 10 }]}>BEM VINDO</Text>
        <Text style={estilo.nomeInput}>Email</Text>
        <TextInput  style={estilo.inputs}  value={email} onChangeText={setEmail}/>

        <Text style={estilo.nomeInput}>Nome completo</Text>
        <TextInput style={estilo.inputs} value={nome} onChangeText={setNome}/>
        <Text style={estilo.nomeInput}>Username</Text>
        <TextInput  style={estilo.inputs} value={username} onChangeText={setUsername} />
        <Text style={estilo.nomeInput}>Senha</Text>
        <TextInput
          value={senha}
          onChangeText={setSenha}
          style={estilo.inputs}
          secureTextEntry={senhaVisivel}
        />
        <View style={[estilo.verSenha, { bottom: 335, right: 44 }]}>
          <TouchableHighlight onPress={toggleSenhaVisivel}>
            <MaterialCommunityIcons
              name={iconeVisivel}
              size={35}
              color={'#3BAB70'}
            />
          </TouchableHighlight>
        </View>

        <Text style={estilo.atencao}>Deve conter mais de 8 caracteres</Text>
        <Text style={estilo.nomeInput}>Estado</Text>
        <TextInput style={estilo.inputs} value={estado} onChangeText={setEstado}/>
        <TouchableOpacity style={estilo.botao} onPress={() => {
            const obj = {id,email,username,senha,estado}
            const resultado = buscarUsuario(obj);
            console.log(resultado)
            }}>
          <Text style={estilo.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress}>
          <Text style={[estilo.opcoesAdicionais, { marginTop: 20 }]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  };


export default Registro;