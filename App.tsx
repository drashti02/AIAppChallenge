import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
export default function App() {
  return (
    <View className="bg-white flex-1 items-center justify-center  dark:bg-black">
      <Text className="text-black sm:text-lg md:text-2xl  dark:text-white font-bold text-3xl">
        Hello World!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
