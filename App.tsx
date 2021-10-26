import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider } from "./Theme";

import Home from "./Home";
import Details from "./Details";
import Settings from "./Settings";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NewsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={Home} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: "New Details" }}
      />
    </Stack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "New List" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: "New Details" }}
        />
      </Stack.Navigator> */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return (
                  <Ionicons name={"newspaper"} size={size} color={color} />
                );
              } else if (route.name === "Settings") {
                return <Ionicons name={"settings"} size={size} color={color} />;
              }
            },
            tabBarActiveTintColor: "#4338CA",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={NewsStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
