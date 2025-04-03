import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { useColorScheme } from "nativewind";

export default function TabOneScreen() {
  const { toggleColorScheme } = useColorScheme();

  return (
    <Center className="flex-1">
      <VStack>
        <Text className="text-center">Home</Text>
        <Button className="mt-1" onPress={toggleColorScheme}>
          <ButtonText>Toggle theme</ButtonText>
        </Button>
      </VStack>
    </Center>
  );
}
