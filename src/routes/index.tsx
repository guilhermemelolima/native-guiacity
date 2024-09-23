import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { AppRoutes } from "./app.route";



export function Routes(){
	const { COLORS } = useTheme()
	return(
		<View style={{flex:1, backgroundColor: COLORS.BACKGROUND_DARK}} >
			<NavigationContainer >
				<AppRoutes/>
			</NavigationContainer>
		</View>

	)
}