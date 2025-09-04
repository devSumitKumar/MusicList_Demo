import {ActivityIndicator, Text, View} from 'react-native';
import styles from './style';
const Loader = () => {
  return (
    <View style={styles.centerContainer}>
      <ActivityIndicator size="large" color="#0066cc" />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default Loader;
