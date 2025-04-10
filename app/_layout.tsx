import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { ThemeProvider } from "@react-navigation/core";
import { Theme } from "@react-navigation/native/src/types";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const themes = {
  light: {
    dark: false,
    colors: {
      primary: "rgb(179, 179, 179)",
      background: "rgb(255, 255, 255)",
      card: "rgb(255, 255, 255)",
      text: "rgb(0, 0, 0)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(0, 0, 0)",
    },
    fonts: {
      ...DefaultTheme.fonts,
    },
  } as Theme,
  dark: {
    dark: true,
    colors: {
      primary: "rgb(166, 166, 166)",
      background: "rgb(18, 18, 18)",
      card: "rgb(18, 18, 18)",
      text: "rgb(255, 255, 255)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(0, 0, 0)",
    },
    fonts: {
      ...DarkTheme.fonts,
    },
  } as Theme,
};

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <GluestackUIProvider mode={colorScheme}>
      <ThemeProvider
        value={colorScheme === "dark" ? themes.dark : themes.light}
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
