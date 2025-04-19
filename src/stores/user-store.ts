import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";

@injectable()
export class UserStore {
  @observable
  public email: string = "";

  constructor() {
    makeObservable(this);
  }

  @action
  public setEmail(email: string) {
    this.email = email;
  }
}
