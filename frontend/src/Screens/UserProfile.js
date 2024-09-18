import {View, Text, Image, StyleSheet} from 'react-native';
import mob from '../assets/logo.png';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA',
    mobile: '123-456-7890',
    userType: 'Premium',
    profilePhoto: '',
    onlineStatus: 'Online',
  };

  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={mob} style={styles.profilePhoto} />
      </View>
      <Text style={styles.name}>Name: {user.name}</Text>
      <Text style={styles.email}>Email: {user.email}</Text>
      <Text style={styles.address}>Address: {user.address}</Text>
      <Text style={styles.mobile}>Mobile: {user.mobile}</Text>
      <Text style={styles.userType}>User-Type: {user.userType}</Text>
      <Text style={styles.onlineStatus}>
        User Activity: {user.onlineStatus}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: 'center',
  },
  photoContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    marginBottom: 20,
    color: 'gray',
  },
  address: {
    fontSize: 18,
    marginBottom: 20,
    color: 'gray',
  },
  mobile: {
    fontSize: 18,
    marginBottom: 20,
    color: 'gray',
  },
  userType: {
    fontSize: 18,
    marginBottom: 20,
    color: 'blue',
  },
  onlineStatus: {
    fontSize: 18,
    marginBottom: 20,
    color: 'green',
  },
});

export default UserProfile;
