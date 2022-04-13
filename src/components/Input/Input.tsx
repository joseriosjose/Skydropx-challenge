import React from "react";
import { styled, Theme } from "@mui/material/styles";
import { SvgIcon, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { StandardTextFieldProps } from "@mui/material/TextField";

export interface InputWrapperProps extends StandardTextFieldProps {
  icon: typeof SvgIcon;
}

const InputWrapper = styled(TextField)(({ theme }) => ({
  [`& fieldset`]: {
    borderRadius: 30,
  },
}));

const ContainerInputWrapper = styled("div")(({ theme }) => ({
  svg: {
    verticalAlign: "middle",
    color: theme.palette.primary.main,
    margin: 10,
    display: "inline-block",
  },
}));

const TitleInputWrapper = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  color: "#898791",
}));

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
      />
    </ContainerInputWrapper>
  );
};

export default Input;
