import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191c21',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    fontFamily: 'arial',
  },
  image: {
    width: '100%',
    height: 450,
  },
  texto: {
    flex: 3,
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'arial',
  },
  login: {
    backgroundColor: '#191c21',
    color: '#fff',
    fontSize: 18,
    marginTop: 30,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#455666',
  },
  senha: {
    backgroundColor: '##191c21',
    color: '#fff',
    fontSize: 18,
    marginTop: 30,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#455666',
  },
  botoes: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#455666',
    padding: 7,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    marginRight: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
  },
  buttonEntrar: {
    backgroundColor: '#01c030',
    padding: 7,
    paddingHorizontal: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    marginRight: 10,
  },
  buttonEntrarText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  legenda: {
    color: '#9ab',
    fontSize: 12,
    marginTop: 15,
  },
});
