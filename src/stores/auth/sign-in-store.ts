import { action, computed, makeObservable, observable } from "mobx";
import { injectable } from "inversify";
import yupPlugin from "mobx-react-form/lib/validators/YUP";
import * as yup from "yup";
import Form from "mobx-react-form";
import FieldInterface from "mobx-react-form/lib/models/FieldInterface";

@injectable()
export class SignInStore {
  @observable
  private readonly form;

  constructor() {
    makeObservable(this);
    this.form = this.createForm();
  }

  @computed
  public get formData() {
    const emailField: FieldInterface = this.form.$("email");
    const passwordField: FieldInterface = this.form.$("password");

    return {
      onSubmit: this.form.onSubmit,
      emailField: {
        label: emailField.label!,
        isValid: emailField.isValid,
        error: emailField.error,
        props: {
          ...emailField.bind(),
          onChangeText: emailField.set.bind(emailField),
          autoComplete: "email",
          keyboardType: "email-address",
          returnKeyType: "done",
          autoCapitalize: "none",
          textContentType: "emailAddress",
        },
      },
      passwordField: {
        label: passwordField.label!,
        isValid: passwordField.isValid,
        error: passwordField.error,
        props: {
          ...passwordField.bind(),
          onChangeText: passwordField.set.bind(passwordField),
          autoComplete: "current-password",
          returnKeyType: "done",
          autoCapitalize: "none",
          textContentType: "password",
        },
      },
    };
  }

  @action
  private onSuccess = (form: Form) => {
    console.log("onSuccess", form.values());
  };

  @action
  private onError = (form: Form) => {
    console.log("onError", form.errors());
  };

  private createForm() {
    return new Form(
      {
        fields: [
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
            inputMode: "email",
            autofocus: true,
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
          },
        ],
      },
      {
        plugins: {
          yup: yupPlugin({
            package: yup,
            schema: (y: typeof yup) =>
              y.object().shape({
                email: y.string().required().email(),
                password: y.string().required().min(8),
              }),
          }),
        },
        hooks: { onSuccess: this.onSuccess, onError: this.onError },
        options: {
          validateOnInit: false,
          validateOnChange: false,
          validateOnBlur: false,
          validateOnChangeAfterSubmit: true,
        },
      },
    );
  }
}
