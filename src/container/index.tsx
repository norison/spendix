import { FC, PropsWithChildren } from "react";
import { Container } from "inversify";
import { Provider } from "inversify-react";
import { UserStore } from "@/src/stores/user-store";
import { Identifiers } from "@/src/container/identifiers";

const container = new Container();
container.bind(Identifiers.UserStore).to(UserStore).inSingletonScope();

export const DIProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider container={container}>{children}</Provider>;
};

export const useUserStore = () =>
  container.get<UserStore>(Identifiers.UserStore);
