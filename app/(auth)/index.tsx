import { FC, useMemo, useState } from "react";
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
import { useTranslation } from "react-i18next";
import { translationKeys } from "@/translations";
import { TFunction } from "i18next";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";

const createSignInSchema = (t: TFunction<"translation", undefined>) => {
  return z.object({
    email: z
      .string()
      .min(1, t(translationKeys.auth.emailRequired))
      .email(t(translationKeys.auth.emailInvalid)),
    password: z.string().min(1, t(translationKeys.auth.passwordRequired)),
  });
};

type SignInSchemaType = z.infer<ReturnType<typeof createSignInSchema>>;

const SignIn: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const signInSchema = useMemo(() => createSignInSchema(t), [t]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      className="h-full w-full max-w-[440px] justify-center self-center px-2"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <VStack space="xl">
        <VStack className="w-full" space="md">
          <Heading className="text-center" size="3xl">
            {t(translationKeys.auth.signIn)}
          </Heading>
          <Text className="text-center">{t(translationKeys.auth.welcome)}</Text>
        </VStack>

        <VStack className="w-full" space="xl">
          <FormControl isInvalid={!!errors?.email} className="w-full">
            <FormControlLabel>
              <FormControlLabelText>
                {t(translationKeys.auth.email)}
              </FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    placeholder={t(translationKeys.auth.enterEmail)}
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
              <FormControlLabelText>
                {t(translationKeys.auth.password)}
              </FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    type={showPassword ? "text" : "password"}
                    placeholder={t(translationKeys.auth.enterPassword)}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    returnKeyType="done"
                    autoCapitalize="none"
                    autoComplete="password"
                    textContentType="password"
                    secureTextEntry={!showPassword}
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
          <HStack className="justify-end">
            <Link>
              <LinkText className="font-medium text-primary-700 group-hover/link:text-primary-600 ">
                {t(translationKeys.auth.forgotPassword)}
              </LinkText>
            </Link>
          </HStack>

          <VStack className="w-full" space="lg">
            <Button className="w-full" onPress={handleSubmit(() => {})}>
              <ButtonText className="font-medium">
                {t(translationKeys.auth.signIn)}
              </ButtonText>
            </Button>
            <Button
              variant="outline"
              className="w-full gap-1"
              onPress={() => {}}
            >
              <ButtonText className="font-medium">
                {t(translationKeys.auth.continueWithGoogle)}
              </ButtonText>
              <ButtonIcon as={GoogleIcon} />
            </Button>
          </VStack>
          <HStack className="self-center" space="sm">
            <Text size="md">{t(translationKeys.auth.dontHaveAccount)}</Text>
            <Link onPress={() => router.replace("/signup")}>
              <LinkText
                className="font-medium text-primary-700 group-hover/link:text-primary-600  group-hover/pressed:text-primary-700"
                size="md"
              >
                {t(translationKeys.auth.signUp)}
              </LinkText>
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
