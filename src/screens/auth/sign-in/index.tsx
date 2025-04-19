import { FC } from "react";
import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonText } from "@/src/components/ui/button";
import { observer } from "mobx-react-lite";
import { Link, LinkText } from "@/src/components/ui/link";
import { useSignInStore } from "@/src/container";
import { useRouter } from "expo-router";
import { HStack } from "@/src/components/ui/hstack";
import AuthHeader from "@/src/components/auth/auth-header";
import FormControl from "@/src/components/auth/form-control";
import PasswordFormControl from "@/src/components/auth/password-form-control";

const SignIn: FC = () => {
  const router = useRouter();
  const { formData } = useSignInStore();
  const { emailField, passwordField } = formData;

  return (
    <SafeAreaView className="flex-1 bg-background-0 p-4">
      <VStack>
        <AuthHeader title="Sign In" subtitle="Welcome to Spendix" />

        <VStack space="xl">
          <FormControl {...emailField} />
          <PasswordFormControl {...passwordField} />

          <Link onPress={() => router.push("/forgot-password")}>
            <LinkText className="font-medium text-right text-primary-700 group-hover/link:text-primary-600">
              Forgot Password?
            </LinkText>
          </Link>

          <Button size="xl" onPress={formData.onSubmit}>
            <ButtonText>Sign In</ButtonText>
          </Button>
        </VStack>

        <HStack space="sm" className="mt-2 self-center">
          <Text size="md">Don't have an account?</Text>
          <Link onPress={() => router.push("/sign-up")}>
            <LinkText
              className="font-medium text-primary-700 group-hover/link:text-primary-600  group-hover/pressed:text-primary-700"
              size="md"
            >
              Sign up
            </LinkText>
          </Link>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};

export default observer(SignIn);
