import { Container } from "inversify";
import { UserStore } from "@/src/stores/user-store";
import { Identifiers } from "@/src/container/identifiers";

const container = new Container();
container.bind(Identifiers.UserStore).to(UserStore).inSingletonScope();

export const useUserStore = () =>
  container.get<UserStore>(Identifiers.UserStore);
