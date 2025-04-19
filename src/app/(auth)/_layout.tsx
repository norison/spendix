import { FC } from "react";
import { Redirect, Stack } from "expo-router";
import { useUserStore } from "@/src/container";
import { observer } from "mobx-react-lite";

const AuthLayout: FC = () => {
  const userStore = useUserStore();

  if (userStore.email) {
    return <Redirect href="(protected)" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
    </Stack>
  );
};

export default observer(AuthLayout);
