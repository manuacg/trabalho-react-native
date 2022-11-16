import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  blocoHeader: {
    flex: 2,
    backgroundColor: '#191c21',
  },
  header: {
    width: '100%',
    height: 280,
    flex:2
  },
  content: {
    flex: 4,
    backgroundColor: '#191c21'
  },
  informacoes: {
    justifyContent: 'space-between'
  },
  text: {
    color: '#99a9b9',
    fontSize: 15,
    marginTop: 15
  },
  texto: {
    color: '#99a9b9',
    fontSize: 15,
    fontWeight: 'bold'
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  link: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 30,
    marginTop: 14
  },
  detalhes: {
     flexDirection: 'row',
     justifyContent: 'space-around'
  },
  image: {
    width: 90, 
    height: 120,
    direction: 'rtl',
    borderWidth: 1,
    borderColor: '#99a9b9'
  },
  blocoUm: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  blocoSinopse: {
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingHorizontal: 10
  },
  div: {
    backgroundColor: '#36393e',
    width: '100%',
    height: 1,
    marginTop: 15
  },
  ad: {
    color: '#99a9b9',
    fontSize: 15,
    marginTop: 15,
    alignItems: 'center',
    alignContent: 'center',
  },
  adImage: {
    width: 300,
    height: 45, 
  },
  adText: {
    color: '#99a9b9',
    fontSize: 15,
  },
  blocoRatings: {
    paddingHorizontal: 10
  },
  ratings: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly'
  },
  media: {
    alignItems: 'center',
    alignContent: 'center'
  },
  barras: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  barra1: {
    backgroundColor: '#455666',
    width: 23,
    height: 1,
    marginLeft: 1
  },
  barra2: {
    backgroundColor: '#455666',
    width: 23,
    height: 2,
    marginLeft: 1
  },
  barra3: {
    backgroundColor: '#455666',
    width: 23,
    height: 4,
    marginLeft: 1
  },
  barra4: {
    backgroundColor: '#455666',
    width: 23,
    height: 3,
    marginLeft: 1
  },
  barra5: {
    backgroundColor: '#455666',
    width: 23,
    height: 8,
    marginLeft: 1
  },
  barra6: {
    backgroundColor: '#455666',
    width: 23,
    height: 9,
    marginLeft: 1
  },
  barra7: {
    backgroundColor: '#455666',
    width: 23,
    height: 23,
    marginLeft: 1
  },
  barra8: {
    backgroundColor: '#455666',
    width: 23,
    height: 15,
    marginLeft: 2
  },
  barra9: {
    backgroundColor: '#455666',
    width: 23,
    height: 18,
    marginLeft: 2
  },
  plus:{
    position: 'absolute',
    right: 0,
    width: 40,
    height: 40,
    backgroundColor: '#01c030',
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    padding: 5
  },
});
