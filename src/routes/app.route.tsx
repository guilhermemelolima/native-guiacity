import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "@screens/Login";
import { Register } from "@screens/Register";
import { Home } from "@screens/Home";
import { MapScreen } from "@screens/MapScreen";
import { Search } from "@screens/Search";
import { Settings } from "@screens/Settings"
import { EnterpriseProfile } from "@screens/EnterpriseProfile/indes";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
	return(
		<Navigator screenOptions={{headerShown: false}}>
			<Screen
				name="login"
				component={Login}
			/>

			<Screen
				name="register"
				component={Register}
			/>

			<Screen
				name="home"
				component={Home}
			/>
            
			<Screen
				name="map"
				component={MapScreen}
			/>
            
			<Screen
				name="search"
				component={Search}
			/>
            
			<Screen
				name="settings"
				component={Settings}
			/>
            
			<Screen
				name="enterpriseProfile"
				component={EnterpriseProfile}
			/>
		</Navigator>
	)
}