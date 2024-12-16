import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageService } from './storageService';

export const asyncStorageService: StorageService = {
  async setItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Error setting item in AsyncStorage:', error);
    }
  },

  async getItem(key) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error('Error getting item from AsyncStorage:', error);
      return null;
    }
  },

  async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from AsyncStorage:', error);
    }
  },

  async clearStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  },
};
