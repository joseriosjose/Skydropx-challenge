import { AccordionDetails, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const AltoTextWrapper = styled(Typography)(({ theme }) => ({
  whiteSpace: "nowrap",
  display: "block",
  bottom: 0,
  width: 20,
  height: 20,
  marginTop: 88,
  transform: "rotate(270deg)",
  [theme.breakpoints.down("md")]: {
    marginLeft: "25%",
  },
}));
export const LargoTextWrapper = styled(Typography)(({ theme }) => ({
  marginLeft: 12,
}));
export const AnchoTextWrapper = styled(Typography)(({ theme }) => ({
  marginTop: 60,
  transform: "rotate(330deg)",
  display: "block",
  whiteSpace: "nowrap",
  bottom: 0,
  height: 20,
  marginLeft: "-20px",
}));
export const PesoTextWrapper = styled(Typography)(({ theme }) => ({
  marginLeft: 12,
}));

export const ImgWrapper = styled("img")(({ theme }) => ({
  margin: "8px",
  marginRight: "-10px",
  width: 74,
}));
export const AccordionDetailsWrapper = styled(AccordionDetails)(
  ({ theme }) => ({
    marginTop: 10,
    padding: "8px 8px 16px 16px",
  })
);

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowBackIosIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(360deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(270deg)",
    color: theme.palette.primary.main,
  },
  padding: 0,
  color: "#04142a",
}));
