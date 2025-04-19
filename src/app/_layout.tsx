import "@/global.css";
import { FC } from "react";
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";

const RootLayout: FC = () => {
  const { colorScheme } = useColorScheme();

  return (
    <GluestackUIProvider mode={colorScheme}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name="(protected)" />
      </Stack>
    </GluestackUIProvider>
  );
};

export default RootLayout;
