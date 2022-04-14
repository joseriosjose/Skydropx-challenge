import { CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import Moment from "react-moment";
import "moment/locale/es";
import {
  CaptionWrapper,
  CardWrapper,
  ChipWrapper,
  DeliveryContentWrapper,
  TitleBullet,
} from "./DeliveryItemStyles";

export type DeliveryItemType = {
  provider: string;
  service_level: string;
  days: number;
  pricing: string;
  currency: string;
  selected: boolean;
  typechip: "better" | "default" | "faster";
  onClick: () => void;
};

const DeliveryItem = ({
  provider,
  service_level,
  days,
  pricing,
  currency,
  selected,
  typechip,
  onClick,
  ...props
}: DeliveryItemType) => {
  const date = new Date();
  return (
    <CardWrapper selected={selected} onClick={onClick} {...props}>
      {typechip !== "default" && (
        <CardHeader
          action={
            <ChipWrapper
              typechip={typechip}
              label={typechip === "better" ? "Recomendacion" : "Mas rapido"}
              data-testid="ChipTets-id"
            />
          }
        />
      )}
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          {provider}
        </Typography>
        <DeliveryContentWrapper></DeliveryContentWrapper>
        <Typography variant="h6">
          $ {pricing} {currency}
        </Typography>
        <TitleBullet>{service_level}</TitleBullet>
        <TitleBullet>Fecha estimada</TitleBullet>
        <CaptionWrapper variant="caption">
          <Moment add={{ days: days }} format="dddd D MMMM">
            {date}
          </Moment>
        </CaptionWrapper>
      </CardContent>
    </CardWrapper>
  );
};

export default DeliveryItem;
