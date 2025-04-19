import { FC, useState } from "react";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/src/components/ui/form-control";
import {
  Input,
  InputField,
  InputSlot,
  InputIcon,
} from "@/src/components/ui/input";
import { AlertCircleIcon, EyeIcon, EyeOffIcon } from "@/src/components/ui/icon";

type PasswordFormControlProps = {
  label: string;
  isValid: boolean;
  error: string | null;
  props: any;
};

const PasswordFormControl: FC<PasswordFormControlProps> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormControl isInvalid={!props.isValid} isRequired>
      <FormControlLabel>
        <FormControlLabelText>{props.label}</FormControlLabelText>
      </FormControlLabel>
      <Input>
        <InputField
          {...props.props}
          type={showPassword ? "text" : "password"}
          secureTextEntry={!showPassword}
        />

        <InputSlot
          className="pr-3"
          onPress={() => setShowPassword(!showPassword)}
        >
          <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
        </InputSlot>
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>{props.error}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

export default PasswordFormControl;
