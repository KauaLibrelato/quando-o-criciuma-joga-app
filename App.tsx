import 'react-native-gesture-handler';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '~/theme';
import { initializeStorage } from '~/utils/storageService';
import { asyncStorageService } from '~/utils/asyncStorageService';
import RootStack from '~/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ToastManager from 'toastify-react-native';
export default function App() {
  //Injeção de dependência do storage
  initializeStorage(asyncStorageService);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <ToastManager />
          <StatusBar style="dark" backgroundColor="#FACC15" />
          <RootStack />
        </ThemeProvider>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
