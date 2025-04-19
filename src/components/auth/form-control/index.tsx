import { FC } from "react";
import {
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/src/components/ui/form-control";
import { Input, InputField } from "@/src/components/ui/input";
import { AlertCircleIcon } from "@/src/components/ui/icon";
import { FormControl as GlueFormControl } from "@/src/components/ui/form-control";

type FormControlProps = {
  label: string;
  isValid: boolean;
  error: string | null;
  props: any;
};

const FormControl: FC<FormControlProps> = (props) => {
  return (
    <GlueFormControl isInvalid={!props.isValid} isRequired>
      <FormControlLabel>
        <FormControlLabelText>{props.label}</FormControlLabelText>
      </FormControlLabel>
      <Input>
        <InputField {...props.props} />
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>{props.error}</FormControlErrorText>
      </FormControlError>
    </GlueFormControl>
  );
};

export default FormControl;
