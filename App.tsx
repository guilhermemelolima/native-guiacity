import { Map } from "@screens/Map";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Map />
    </>
  );
}
