import {MMKV} from 'react-native-mmkv';
import {MUSIC_LIST_STORAGE} from '../utils/constants';
import {IMusicdata} from '../types';

export const MusicListStorageMMKV = new MMKV({
  id: MUSIC_LIST_STORAGE,
});

const saveMusicListToStorage = (musicList: Array<IMusicdata>) => {
  try {
    const jsonValue = JSON.stringify(musicList);
    MusicListStorageMMKV.set(MUSIC_LIST_STORAGE, jsonValue);
  } catch (e) {
    console.error('Error saving music list to storage:', e);
  }
};

const getMusicListFromStorage = (): Array<IMusicdata> | null => {
  try {
    const jsonValue = MusicListStorageMMKV.getString(MUSIC_LIST_STORAGE);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving music list from storage:', e);
    return null;
  }
};

const clearMusicListFromStorage = () => {
  try {
    MusicListStorageMMKV.clearAll();
  } catch (e) {
    console.error('Error clearing music list from storage:', e);
  }
};

const MusicListStorage = {
  getAll: getMusicListFromStorage,
  save: saveMusicListToStorage,
  clear: clearMusicListFromStorage,
};

export default MusicListStorage;
