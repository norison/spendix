import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import { resources } from "@/translations/resources";

i18next.use(initReactI18next).init({
  debug: false,
  lng: getLocales()[0].languageCode?.toString() || "en",
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
    forgotPassword: "auth.forgotPassword",
    dontHaveAccount: "auth.dontHaveAccount",
    continueWithGoogle: "auth.continueWithGoogle",
  },
};
