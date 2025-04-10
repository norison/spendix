import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "@/translations/resources";

i18next.use(initReactI18next).init({
  debug: false,
  fallbackLng: "en",
  resources: resources,
});

export const translationKeys = {
  auth: {
    welcome: "auth.welcome",
    signIn: "auth.signIn",
    signUp: "auth.signUp",
    email: "auth.email",
    enterEmail: "auth.enterEmail",
    emailRequired: "auth.emailRequired",
    emailInvalid: "auth.emailInvalid",
    password: "auth.password",
    enterPassword: "auth.enterPassword",
    passwordRequired: "auth.passwordRequired",
    confirmPassword: "auth.confirmPassword",
    enterConfirmPassword: "auth.enterConfirmPassword",
    confirmPasswordRequired: "auth.confirmPasswordRequired",
    passwordsDontMatch: "auth.passwordsDontMatch",
    forgotPassword: "auth.forgotPassword",
    dontHaveAccount: "auth.dontHaveAccount",
    alreadyHaveAccount: "auth.alreadyHaveAccount",
    continueWithGoogle: "auth.continueWithGoogle",
  },
};
