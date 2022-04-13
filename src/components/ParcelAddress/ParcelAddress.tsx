import React from "react";
import { Grid, Typography, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AddressType } from "./../ParcelPreview/ParcelPreview";

export type ParcelAddressProps = {
  address: AddressType;
  indicator: string;
  icon: typeof SvgIcon;
};

const TitleInputWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  color: "#4c4949",
  svg: {
    margin: "30px 15px 15px 15px",
    color: theme.palette.primary.main,
  },
}));

const ParcelAddress = ({
  indicator,
  icon,
  address,
  ...props
}: ParcelAddressProps) => {
  const { province, city, address1, zip } = address;
  const Icon = icon;
  return (
    <TitleInputWrapper item xs={12} md={4.2} {...props}>
      <Icon />
      <div>
        <Typography variant="button">{indicator}</Typography>
        <Typography variant="body2">{province}</Typography>
        <Typography variant="body2">
          {city}, {address1}
        </Typography>
        <Typography variant="body2">CP: {zip}</Typography>
      </div>
    </TitleInputWrapper>
  );
};

export default ParcelAddress;
