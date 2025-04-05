import { FC } from "react";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

const AuthLayout: FC = () => {
  return (
    <SafeAreaView className="w-full h-full">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaView>
  );
};

export default AuthLayout;
