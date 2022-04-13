
import { styled, Theme } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";


export const ButtonWrapper = styled(MuiButton)(({ theme }) => ({
    borderRadius: 13,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    svg: {
        fontSize: 17,
        marginLeft: 7,
    },
    [(theme as Theme).breakpoints.down("md")]: {
        span: {
            display: "none",
        },
    },
}));