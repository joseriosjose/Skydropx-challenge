import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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
export const ContainerFilterWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));
