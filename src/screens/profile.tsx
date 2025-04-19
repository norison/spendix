import { FC } from "react";
import { Text } from "react-native";

import { useUserStore } from "@/src/container";
import { Button, ButtonText } from "@/src/components/ui/button";
import { VStack } from "@/src/components/ui/vstack";

const Profile: FC = () => {
  const userStore = useUserStore();

  return (
    <VStack className="flex-1 bg-background-0">
      <Text>{userStore.email}</Text>
      <Button onPress={() => userStore.setEmail("")}>
        <ButtonText>Logout</ButtonText>
      </Button>
    </VStack>
  );
};

export default Profile;
