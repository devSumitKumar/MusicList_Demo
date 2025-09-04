import {Text, View} from 'react-native';
import style from './style';

const EmptyData = () => {
  return (
    <View style={style.centerContainer}>
      <Text style={style.emptyText}>No data available</Text>
      <Text style={style.emptySubText}>Pull down to refresh</Text>
    </View>
  );
};

export default EmptyData;
