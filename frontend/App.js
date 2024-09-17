import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Home from './src/Screens/Home';
import logo from './src/assets/logo.png';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.title}>eShop</Text>
        </View>
        <Home />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    // alignItems: 'center',
    marginLeft: 10,
    marginBottom: 30,
  },
});

export default App;
