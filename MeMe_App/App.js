import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import Login from "./screen/Login";
import ForgotPass from "./screen/ForgotPass";
import ForgotPass2 from "./screen/ForgotPass2";
import ResetPass from "./screen/ResetPass";
export default function App() {
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="ForgotPass2" component={ForgotPass2} />
        <Stack.Screen name="ResetPass" component={ResetPass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
});
