import "@/global.css";
import { FC } from "react";
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { Slot } from "expo-router";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { Box } from "@/src/components/ui/box";

const RootLayout: FC = () => {
  const { colorScheme } = useColorScheme();

  return (
    <GluestackUIProvider mode={colorScheme}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Box className="bg-background-0 w-full h-full flex justify-center items-center">
        <Slot />
      </Box>
    </GluestackUIProvider>
  );
};

export default RootLayout;
