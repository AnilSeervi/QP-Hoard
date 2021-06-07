import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PictureAsPdfRoundedIcon from "@material-ui/icons/PictureAsPdfRounded";
import { makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { appContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
  },
  dark: {
    color: "#ffffff",
  },
  light: {
    color: theme.palette.primary.main,
  },
  icons: {
    position: "relative",
    bottom: -5,
    marginRight: 8,
  },
}));
const Accord = ({ allData, sem }) => {
  const data = allData.filter((d) => d.semester === sem);
  const year = [...new Set(data.map((e) => e.year))].sort((a, b) => b - a);
  const { darkMode } = useContext(appContext);
  const classes = useStyles();
  return (
    <>
      {year.map((year) => {
        return (
          <Accordion key={year}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{year} </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.root}>
              {data.map((e, index) => {
                return (
                  e.year === year && (
                    <Typography gutterBottom noWrap key={index}>
                      <Link
                        className={darkMode ? classes.dark : classes.light}
                        variant="body2"
                        href={`./static/${e.course}/${e.semester}/${e.year}/${e.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PictureAsPdfRoundedIcon
                          color="error"
                          className={classes.icons}
                          fontSize="small"
                        />
                        {e.subject}
                      </Link>
                    </Typography>
                  )
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default Accord;
