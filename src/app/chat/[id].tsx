import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text className="text-white">ChatScreen :{id}</Text>
    </View>
  );
}
