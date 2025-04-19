import { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "@/src/components/auth/auth-header";

const ForgotPassword: FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-0 p-4">
      <AuthHeader
        title="Forgot Password?"
        subtitle="Enter email associated with your account"
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;
