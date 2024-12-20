import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initializeStorage } from '~/utils/storageService';
import { asyncStorageService } from '~/utils/asyncStorageService';
import RootStack from '~/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ToastManager from 'toastify-react-native';
import theme from '~/theme/theme';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  //Injeção de dependência do storage
  initializeStorage(asyncStorageService);

  const queryClient = new QueryClient();
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
}
