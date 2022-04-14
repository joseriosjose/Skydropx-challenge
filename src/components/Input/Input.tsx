import React from "react";
import { SvgIcon } from "@mui/material";
import { StandardTextFieldProps } from "@mui/material/TextField";
import {
  ContainerInputWrapper,
  TitleInputWrapper,
  InputWrapper,
} from "./InputStyles";

export interface InputWrapperProps extends StandardTextFieldProps {
  icon: typeof SvgIcon;
}

const Input = ({
  label,
  placeholder,
  icon,
  onChange,
  value,
  name,
  ...props
}: InputWrapperProps) => {
  const Icon = icon;
  return (
    <ContainerInputWrapper>
      <Icon />
      <TitleInputWrapper variant="overline">{label}</TitleInputWrapper>
      <InputWrapper
        fullWidth
        size="medium"
        placeholder={placeholder}
        {...props}
        variant="outlined"
        onChange={onChange}
        value={value}
        name={name}
        inputProps={{ "data-testid": "InputTest-id" }}
      />
    </ContainerInputWrapper>
  );
};

export default Input;
