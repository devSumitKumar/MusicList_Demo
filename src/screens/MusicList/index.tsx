import {FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import {IMusicdata} from '../../types';
import useStyle from './style';
import useMusicList from '../../utils/hooks/useMusicList';
import EmptyData from '../../components/EmptyData';
import Loader from '../../components/Loader';
import FastImage from '@d11/react-native-fast-image';

const MusicList = (navigation: any) => {
  const styles = useStyle();

  const {loading, musicList, getImageSource} = useMusicList();

  const onMusicSelect = (item: IMusicdata) => {
    navigation.navigate('MusicDetails', {musicData: item});
  };

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity onPress={() => onMusicSelect(item)}>
        <FastImage
          style={{width: 200, height: 200, marginTop: 10}}
          source={getImageSource(item.artworkUrl100)}
          resizeMode={FastImage.resizeMode.cover}
          onError={() => console.log('Image not available in cache!')}
        />
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={musicList}
        renderItem={renderItem}
        keyExtractor={item => item.trackId.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={null}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        ListEmptyComponent={EmptyData}
        contentContainerStyle={
          musicList.length === 0 ? styles.emptyListContainer : null
        }
      />
    </SafeAreaView>
  );
};

export default MusicList;
