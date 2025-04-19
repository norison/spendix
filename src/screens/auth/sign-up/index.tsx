import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import AuthHeader from "@/src/components/auth/auth-header";
import { Text } from "@/src/components/ui/text";
import { Link, LinkText } from "@/src/components/ui/link";
import { HStack } from "@/src/components/ui/hstack";

const SignUp: FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <AuthHeader title="Sign up" subtitle="Sign up and start using spendix" />

      <HStack space="sm" className="mt-2 self-center">
        <Text size="md">Don't have an account?</Text>
        <Link onPress={() => router.back()}>
          <LinkText
            className="font-medium text-primary-700 group-hover/link:text-primary-600  group-hover/pressed:text-primary-700"
            size="md"
          >
            Sign In
          </LinkText>
        </Link>
      </HStack>
    </SafeAreaView>
  );
};

export default SignUp;
