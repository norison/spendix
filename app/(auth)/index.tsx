import { FC, useState } from "react";
import { Text } from "@/components/ui/text";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { AlertCircleIcon, EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Link, LinkText } from "@/components/ui/link";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { GoogleIcon } from "@/assets/icons/google";
import { HStack } from "@/components/ui/hstack";

const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(1, "Password is required"),
});

type SignInSchemaType = z.infer<typeof signInSchema>;

const SignIn: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: SignInSchemaType) => {
    console.log("data", data);
  };

  return (
    <VStack className="w-full h-full px-4 py-safe-or-8" space="xl">
      <VStack className="w-full" space="md">
        <Heading className="md:text-center" size="3xl">
          Sign in
        </Heading>
        <Text>Sign in to start using spendix</Text>
      </VStack>

      <VStack className="w-full" space="xl">
        <FormControl isInvalid={!!errors?.email} className="w-full">
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  placeholder="Enter email"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  returnKeyType="done"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoComplete="email"
                  textContentType="emailAddress"
                />
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <FormControl isInvalid={!!errors.password} className="w-full">
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  returnKeyType="done"
                  autoCapitalize="none"
                  keyboardType="visible-password"
                  autoComplete="password"
                  textContentType="password"
                />
                <InputSlot
                  onPress={() => setShowPassword(!showPassword)}
                  className="pr-3"
                >
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              {errors?.password?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Link>
          <LinkText className="font-medium text-sm text-primary-700 text-right">
            Forgot Password?
          </LinkText>
        </Link>
        <VStack className="w-full" space="lg">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <ButtonText className="font-medium">Sign in</ButtonText>
          </Button>
          <Button variant="outline" className="w-full gap-1" onPress={() => {}}>
            <ButtonText className="font-medium">
              Continue with Google
            </ButtonText>
            <ButtonIcon as={GoogleIcon} />
          </Button>
        </VStack>
        <HStack className="self-center" space="sm">
          <Text size="md">Don't have an account?</Text>
          <Link>
            <LinkText
              className="font-medium text-primary-700 group-hover/link:text-primary-600  group-hover/pressed:text-primary-700"
              size="md"
            >
              Sign up
            </LinkText>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default SignIn;
