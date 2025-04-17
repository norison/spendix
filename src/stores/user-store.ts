import { injectable } from "inversify";
import { makeAutoObservable } from "mobx";

@injectable()
export class UserStore {
  public email: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  public setEmail(email: string) {
    this.email = email;
  }
}
