import { FC } from "react";
import { Box } from "@/src/components/ui/box";
import { Text } from "@/src/components/ui/text";

const Settings: FC = () => {
  return (
    <Box className="bg-background-0 w-full h-full flex justify-center items-center">
      <Text size="4xl">Settings</Text>
    </Box>
  );
};

export default Settings;
