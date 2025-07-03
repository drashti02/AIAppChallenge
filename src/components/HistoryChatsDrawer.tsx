import {
  DrawerContent,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import chatHistory from "@assets/data/chatHistory.json";
import { View, Text } from "react-native";
import { router, usePathname } from "expo-router";
export default function HistoryChatsDrawer(props: DrawerContentComponentProps) {
  const pathname = usePathname();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {chatHistory.map((Item) => (
        <DrawerItem
          label={Item.title}
          inactiveTintColor="white"
          focused={pathname === `/chat/${Item.id}`}
          key={Item.id}
          style={{ padding: 0 }}
          onPress={() => router.push(`/chat/${Item.id}`)}
        />
      ))}
    </DrawerContentScrollView>
  );
}
