import "@/global.css";
import "../translations";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import { ThemeProvider } from "@react-navigation/core";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { getLocales } from "expo-localization";
import React, { useCallback, useEffect } from "react";
import { AppState } from "react-native";

React.useLayoutEffect = React.useEffect;

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const { i18n } = useTranslation();

  const setLanguage = useCallback(async () => {
    const code = getLocales()[0]?.languageCode?.toString() || "en";
    await i18n.changeLanguage(code);
  }, [i18n]);

  useEffect(() => {
    setLanguage().then(() => SplashScreen.hideAsync());
  }, [setLanguage]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", setLanguage);

    return () => {
      subscription.remove();
    };
  }, [setLanguage]);

  return (
    <GluestackUIProvider mode={colorScheme}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(main)" />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
