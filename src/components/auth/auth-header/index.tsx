import { FC } from "react";
import { Heading } from "@/src/components/ui/heading";
import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";

type AuthHeaderProps = {
  title: string;
  subtitle: string;
};

const AuthHeader: FC<AuthHeaderProps> = ({ title, subtitle }) => {
  return (
    <VStack>
      <Heading className="text-center" size="3xl">
        {title}
      </Heading>
      <Text className="text-center">{subtitle}</Text>
    </VStack>
  );
};

export default AuthHeader;
