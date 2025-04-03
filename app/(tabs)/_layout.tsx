import React from "react";
import { Tabs } from "expo-router";
import { Box } from "@/components/ui/box";

export default function TabLayout() {
  return (
    <Box className="flex-1">
      <Tabs>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="settings" />
      </Tabs>
    </Box>
  );
}
