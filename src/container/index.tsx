import { Container } from "inversify";
import { Identifiers } from "@/src/container/identifiers";
import { UserStore } from "@/src/stores/user-store";
import { SignInStore } from "@/src/stores/auth/sign-in-store";

const container = new Container();
container.bind(Identifiers.UserStore).to(UserStore).inSingletonScope();
container.bind(Identifiers.SignInStore).to(SignInStore).inSingletonScope();

export const useUserStore = () =>
  container.get<UserStore>(Identifiers.UserStore);

export const useSignInStore = () =>
  container.get<SignInStore>(Identifiers.SignInStore);
