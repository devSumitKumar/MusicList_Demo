import {useCallback, useEffect, useState} from 'react';
import {IMusicdata} from '../../types';
import {API_IRL} from '../constants';
import NetInfo from '@react-native-community/netinfo';
import MusicListStorage from '../../storage/MusicListStorage';
import FastImage from '@d11/react-native-fast-image';

export default function useMusicList() {
  const [musicList, setMusicList] = useState<Array<IMusicdata>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const isDataChanged = (
    newMusicList: Array<IMusicdata>,
    savedMusicList: Array<IMusicdata>,
  ) => {
    if (newMusicList.length !== savedMusicList.length) {
      return true;
    }
    for (let i = 0; i < newMusicList.length; i++) {
      if (newMusicList[i].trackId !== savedMusicList[i].trackId) {
        return true;
      }
    }
    return false;
  };

  const getImageSource = (uri : string) => ({
      uri,
      cache: isConnected
        ? FastImage.cacheControl.web // fetch & cache when online
        : FastImage.cacheControl.cacheOnly, // load only from cache when offline
      priority: FastImage.priority.normal,
    });

  const fetchMusicList = useCallback(async () => {
    try {
      // Simulate an API call with a timeout
      setLoading(true);
      const response = await fetch(API_IRL);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      if (result && Array.isArray(result.results)) {
        //add method to save data to local storage
        const savedMusicList = MusicListStorage.getAll();
        if (savedMusicList && savedMusicList.length > 0) {
          //compare the values
          if (isDataChanged(result.results, savedMusicList)) {
            //save data in storage
            MusicListStorage.clear();
            MusicListStorage.save(result.results);
          } else {
            setMusicList(savedMusicList);
          }
        } else {
          MusicListStorage.save(result.results);
        }
        setLoading(false);
      } else {
        setMusicList([]);
        setLoading(false);
        throw new Error('Error: No data found');
      }
    } catch (err) {
      setLoading(false);
      setError(
        err instanceof Error ? err.message : 'An unknown error occurred',
      );
    }
  }, []);

  const handleConnectivity = useCallback(async () => {
    const state = await NetInfo.fetch();
    if (state.isConnected) {
      setIsConnected(true);
      fetchMusicList();
    } else {
      setIsConnected(false);
      setLoading(false);
      const savedMusicList = MusicListStorage.getAll();
      if (savedMusicList && savedMusicList.length > 0) {
        setMusicList(savedMusicList);
      } else {
        setMusicList([]);
        setError('No internet connection and no cached data available');
      }
    }
  }, [fetchMusicList]);

  useEffect(() => {
    handleConnectivity();
  }, [handleConnectivity]);

  return {musicList, loading, error, getImageSource};
}
