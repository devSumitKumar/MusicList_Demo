import {
  SafeAreaView,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import styles from './style';
import FastImage from '@d11/react-native-fast-image';
import {IMusicdata} from '../../types';

const MusicDetails = (props: any) => {
  const {width} = useWindowDimensions();
  const isTablet = width >= 768; 
  const musicDetails = props.route.params.musicData as IMusicdata;

  console.log('props in music details screen', props);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.content, isTablet && styles.tabletContent]}>
          {/* Image Section */}
          <FastImage
            source={{uri: musicDetails.artworkUrl100}}
            style={[styles.image, isTablet && styles.tabletImage]}
            resizeMode={FastImage.resizeMode.cover}
          />

          {/* Details Section */}
          <View style={[styles.details, isTablet && styles.tabletDetails]}>
            <Text style={styles.title}>{musicDetails.trackName}</Text>
            <Text style={styles.subtitle}>{musicDetails.artistName}</Text>
            <Text style={styles.description}>
              {musicDetails.primaryGenreName}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MusicDetails;
