import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          incidunt unde distinctio tempore suscipit? Ipsam delectus harum unde
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          incidunt unde distinctio tempore suscipit? Ipsam delectus harum unde
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          incidunt unde distinctio tempore suscipit? Ipsam delectus harum unde
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          incidunt unde distinctio tempore suscipit? Ipsam delectus harum unde
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
           The final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          incidunt unde distinctio tempore suscipit? Ipsam delectus harum unde
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
};

export default FAQ;
