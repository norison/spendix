import { FC } from "react";
import { Redirect, Tabs } from "expo-router";
import { useUserStore } from "@/src/container";
import { observer } from "mobx-react-lite";

const ProtectedLayout: FC = () => {
  const userStore = useUserStore();

  if (!userStore.email) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default observer(ProtectedLayout);
