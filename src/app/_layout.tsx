import { FC } from "react";
import { Tabs } from "expo-router";

const RootLayout: FC = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
    </Tabs>
  );
};

export default RootLayout;
