import { FC } from "react";
import { Box } from "@/src/components/ui/box";
import { Button, ButtonText } from "@/src/components/ui/button";
import { useColorScheme } from "nativewind";

const SignInScreen: FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Box className="w-full h-full flex justify-center items-center">
      <Button
        onPress={() =>
          setColorScheme(colorScheme === "dark" ? "light" : "dark")
        }
      >
        <ButtonText>Toggle theme</ButtonText>
      </Button>
    </Box>
  );
};

export default SignInScreen;
