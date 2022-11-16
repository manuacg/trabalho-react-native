import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Fundo from '../../../assets/loginfundo.jpg';
import { LinearGradient } from 'expo-linear-gradient';

export const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={Fundo}>
        <LinearGradient
          colors={['#00000000', '#191c21']}
          style={{ height: '100%', width: '100%' }}></LinearGradient>
      </ImageBackground>
      <View style={styles.texto}>
        <Text style={styles.title}>Sign in to Letterboxd</Text>
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor={'#9ab'}
          style={styles.login}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#9ab'}
          secureTextEntry={true}
          style={styles.senha}
        />
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>JOIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>RESET PASSWORD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonEntrar}>
            <Text style={styles.buttonEntrarText}>GO</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.legenda}>
          Artwork from The Mitchells vs. The Machines (2021)
        </Text>
      </View>
    </View>
  );
};
