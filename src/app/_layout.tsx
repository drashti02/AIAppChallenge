import { Slot, Stack, Tabs } from "expo-router";
import "../../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import HistoryChatsDrawer from "@/components/HistoryChatsDrawer";
const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white",
  },
};
export default function RootLayout() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <Stack /> */}
        <ThemeProvider value={myTheme}>
          <Drawer
            drawerContent={HistoryChatsDrawer}
            screenOptions={{
              headerTitle: "",
              headerStyle: { backgroundColor: "black" },
              drawerInactiveTintColor: "white",
              drawerStyle: {
                borderRightColor: "grey",
                borderWidth: StyleSheet.hairlineWidth,
              },
            }}
          >
            <Drawer.Screen
              name="index"
              options={{
                drawerLabel: "ChatGPT",
                drawerIcon: () => (
                  <FontAwesome5 name="atom" size={18} color="white" />
                ),
              }}
            />
            <Drawer.Screen
              name="chat/[id]"
              options={{
                drawerItemStyle: { display: "none" },
                drawerIcon: () => (
                  <FontAwesome5 name="atom" size={18} color="white" />
                ),
              }}
            />
          </Drawer>
        </ThemeProvider>
      </GestureHandlerRootView>
    </>
  );
}
