import {
    Card,
    Grid,
    Typography,
    Theme,
    Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { MUIStyledCommonProps } from "@mui/system";

type ChipWrapperProps = MUIStyledCommonProps<Theme> &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> & {
        typechip: "better" | "default" | "faster";
    };

type CardWrapperProps = MUIStyledCommonProps<Theme> &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> & {
        selected: boolean;
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

export const CardWrapper = styled(Card)(({ theme, selected }: CardWrapperProps) => ({
    borderRadius: 30,
    padding: 20,
    maxWidth: 500,
    [(theme as Theme).breakpoints.down("md")]: {
        padding: 5,
    },
    transition: "all .2s ease-in-out",
    cursor: "pointer",
    ...(selected
        ? {
            backgroundColor: (theme as Theme).palette.primary.light,
            color: "white",
            transform: " scale(1.05)",
        }
        : {}),
    ":hover": {
        backgroundColor: (theme as Theme).palette.primary.light,
        color: "white",
        transform: " scale(1.05)",
    },
}));

export const ChipWrapper = styled(Chip)(
    ({ theme, typechip = "default" }: ChipWrapperProps) => ({
        letterSpacing: 1,
        ...(styles(theme as Theme)[typechip] || {}),
    })
);

export const TitleBullet = styled(Typography)(({ theme }) => ({
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
export const CaptionWrapper = styled(Typography)(({ theme }) => ({
    [(theme as Theme).breakpoints.up("md")]: { marginLeft: 15 },
    textTransform: "capitalize",
}));
export const DeliveryContentWrapper = styled(Grid)(({ theme }) => ({
    diplay: "flex",
}));
