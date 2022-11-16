import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import Poster from '../../../assets/poster.jpg';
import Fundo from '../../../assets/header.jpg';
import Ad from '../../../assets/ad.jpg';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blocoHeader}>
        <Image source={Fundo} style={styles.header} />
      </View>

      <View style={styles.content}>
        <View style={styles.blocoUm}>
          <View style={styles.informacoes}>
            <Text style={styles.title}>Hereditary</Text>
            <Text style={styles.text}>DIRECTED BY</Text>
            <Text style={styles.texto}>Ari Aster</Text>
            <View style={styles.detalhes}>
              <Text style={styles.text}>2018 • 128 mins</Text>
              <Text style={styles.link}>TRAILER</Text>
            </View>
          </View>

          <Image source={Poster} style={styles.image} />
        </View>

        <View style={styles.blocoSinopse}>
          <Text style={styles.text}>EVERY FAMILY TREE HIDES A SECRET.</Text>
          <Text style={styles.text}>
            When Ellen, the matriarch of the Graham family, passes away, her
            daughter’s family begins to unravel cryptic and increasingly
            terrifying secrets about their ancestry.
          </Text>
        </View>

        <View style={styles.div}></View>

        <View style={styles.ad}>
          <Image source={Ad} style={styles.adImage} />
          <Text style={styles.adText}>REMOVE ADS</Text>
        </View>

        <View style={styles.div}></View>

        <View style={styles.blocoRatings}>
          <Text style={styles.text}>RATINGS</Text>
          <View style={styles.ratings}>
            <Entypo name="star" size={10} color="#01c030" />
            <View style={styles.barras}>
              <View style={styles.barra1}></View>
              <View style={styles.barra2}></View>
              <View style={styles.barra1}></View>
              <View style={styles.barra3}></View>
              <View style={styles.barra4}></View>
              <View style={styles.barra5}></View>
              <View style={styles.barra6}></View>
              <View style={styles.barra7}></View>
              <View style={styles.barra8}></View>
              <View style={styles.barra9}></View>
            </View>
            <View style={styles.media}>
              <Text style={styles.text}>4.0</Text>
              <View style={styles.barras}>
                <Entypo name="star" size={10} color="#01c030" />
                <Entypo name="star" size={10} color="#01c030" />
                <Entypo name="star" size={10} color="#01c030" />
                <Entypo name="star" size={10} color="#01c030" />
                <Entypo name="star" size={10} color="#01c030" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.div}></View>
      </View>
    </View>
  );
};
