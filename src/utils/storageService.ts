export interface StorageService {
  setItem<T extends string>(key: string, value: T): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
  clearStorage(): Promise<void>;
}

//Injeção de dependência
export let storageService: StorageService;

//Injeção de dependência
export function initializeStorage(storage: StorageService) {
  storageService = storage;
}
