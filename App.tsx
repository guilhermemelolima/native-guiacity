import { StatusBar } from "react-native";
import { ThemeProvider } from 'styled-components/native';
import { useFonts, ReemKufi_400Regular, ReemKufi_700Bold } from '@expo-google-fonts/reem-kufi';

import theme from 'src/theme';

import { Loading } from '@components/Loading';
import { MapScreen } from "@screens/MapScreen";

export default function App() {

  	const [fontsLoader] = useFonts({ ReemKufi_400Regular, ReemKufi_700Bold });

	return (
		<ThemeProvider theme={theme}>

		<StatusBar
			barStyle='dark-content'
			backgroundColor='transparent'
			translucent
		/>
		{ fontsLoader ? <MapScreen /> : <Loading /> }

		</ThemeProvider>
	);
}
