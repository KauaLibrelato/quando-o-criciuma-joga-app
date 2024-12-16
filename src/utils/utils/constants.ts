import { asyncStorageService } from '../asyncStorageService';
import { StorageService } from '../storageService';

export const storage: StorageService = asyncStorageService;

export const enumMatches = {
  NEXT: 0,
  PREVIOUS: 1,
};
