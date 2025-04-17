import { FC } from "react";
import { Button, ButtonText } from "@/src/components/ui/button";
import { Box } from "@/src/components/ui/box";
import { Text } from "@/src/components/ui/text";
import { useColorScheme } from "nativewind";

const Index: FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Box className="bg-background-0 w-full h-full flex justify-center items-center">
      <Text size="4xl">Hello</Text>
      <Button
        className="mt-5"
        onPress={() => {
          setColorScheme(colorScheme === "light" ? "dark" : "light");
        }}
      >
        <ButtonText>Toggle color mode</ButtonText>
      </Button>
    </Box>
  );
};

export default Index;
