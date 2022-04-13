import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Theme,
  Chip,
} from "@mui/material";
import React from "react";
import Moment from "react-moment";
import "moment/locale/es";
import { styled } from "@mui/material/styles";
import { MUIStyledCommonProps } from "@mui/system";

type DeliveryItemType = {
  provider: string;
  service_level: string;
  days: number;
  pricing: string;
  currency: string;
  selected: boolean;
  typeChip: "better" | "default" | "faster";
};

type ChipWrapperProps = MUIStyledCommonProps<Theme> &
  React.ClassAttributes<HTMLDivElement> &
  React.HTMLAttributes<HTMLDivElement> & {
    typeChip: "better" | "default" | "faster";
  };

const styles = (theme: Theme) => ({
  better: {
    backgroundColor: theme?.palette.secondary.main,
    color: "#ffffff",
  },
  faster: {
    backgroundColor: (theme as Theme).palette.primary.light,
    color: "white",
  },
  default: { display: "none" },
});

const CardWrapper = styled(Card)(({ theme }) => ({
  borderRadius: 30,
  padding: 20,
  [(theme as Theme).breakpoints.down("md")]: {
    padding: 5,
  },
  transition: "all .2s ease-in-out",
  cursor: "pointer",
  ":hover": {
    backgroundColor: (theme as Theme).palette.primary.light,
    color: "white",
    transform: " scale(1.05)",
  },
}));

const ChipWrapper = styled(Chip)(
  ({ theme, typeChip = "default" }: ChipWrapperProps) => ({
    letterSpacing: 1,
    ...(styles(theme as Theme)[typeChip] || {}),
  })
);

const TitleBullet = styled(Typography)(({ theme }) => ({
  [(theme as Theme).breakpoints.up("sm")]: {
    [`::before`]: {
      content: '"•"',
      color: theme.palette.primary.main,
      marginRight: 10,
      display: "inline-block",
      paddingTop: 4,
      transform: "scale(2.2)",
    },
  },
}));
const CaptionWrapper = styled(Typography)(({ theme }) => ({
  [(theme as Theme).breakpoints.up("md")]: { marginLeft: 15 },
  textTransform: "capitalize",
}));
const DeliveryContentWrapper = styled(Grid)(({ theme }) => ({
  diplay: "flex",
}));

const DeliveryItem = ({
  provider,
  service_level,
  days,
  pricing,
  currency,
  selected,
  typeChip,
}: DeliveryItemType) => {
  const date = new Date();
  return (
    <CardWrapper>
      {typeChip !== "default" && (
        <CardHeader
          action={<ChipWrapper typeChip={typeChip} label="Recomendacion" />}
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
