import { FC } from "react";
import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";
import { Heading } from "@/src/components/ui/heading";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/src/components/ui/form-control";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonText } from "@/src/components/ui/button";
import { observer } from "mobx-react-lite";
import { Link as RouterLink } from "expo-router";
import { Link, LinkText } from "@/src/components/ui/link";
import { useUserStore } from "@/src/container";

const SignIn: FC = () => {
  const userStore = useUserStore();

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack>
        <VStack>
          <Heading className="text-center">Sign In</Heading>
          <Text className="text-center">Welcome to Spendix</Text>
        </VStack>

        <VStack>
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
          </FormControl>

          <Button onPress={() => userStore.setEmail("test")}>
            <ButtonText>Login</ButtonText>
          </Button>

          <RouterLink href="/sign-up" push asChild>
            <Link href="">
              <LinkText>Don't have an account? Sign Up</LinkText>
            </Link>
          </RouterLink>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default observer(SignIn);
