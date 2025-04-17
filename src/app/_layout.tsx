import "@/global.css";
import { FC } from "react";
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { Box } from "@/src/components/ui/box";
import { Heading } from "@/src/components/ui/heading";
import { Text } from "@/src/components/ui/text";
import { GlobeIcon, Icon, SettingsIcon } from "@/src/components/ui/icon";

const RootLayout: FC = () => {
  const { colorScheme } = useColorScheme();

  return (
    <GluestackUIProvider mode={colorScheme}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Tabs
        screenOptions={{
          headerBackground: () => (
            <Box className="w-full h-full bg-background-0" />
          ),
          tabBarBackground: () => (
            <Box className="w-full h-full bg-background-0" />
          ),
          tabBarStyle: {
            borderTopWidth: 0,
          },
          headerTitle: ({ children }) => <Heading>{children}</Heading>,
          tabBarLabel: ({ children, focused }) => (
            <Text className={focused ? "text-tertiary-600" : "text-primary-0"}>
              {children}
            </Text>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Icon
                className={focused ? "text-tertiary-600" : "text-primary-0"}
                as={GlobeIcon}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ focused }) => (
              <Icon
                className={focused ? "text-tertiary-600" : "text-primary-0"}
                as={SettingsIcon}
              />
            ),
          }}
        />
      </Tabs>
    </GluestackUIProvider>
  );
};

export default RootLayout;
