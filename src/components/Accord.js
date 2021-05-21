import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PictureAsPdfRoundedIcon from "@material-ui/icons/PictureAsPdfRounded";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    flexDirection: "column",
  },
  icons: {
    position: "relative",
    bottom: -5,
    marginRight: 2,
  },
});
const Accord = ({ allData, sem }) => {
  const data = allData.filter((d) => d.semester === sem);
  const unsortedYear = [...new Set(data.map((e) => e.year))];
  const year = unsortedYear.sort((a, b) => b - a);
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
                        variant="body2"
                        href={`./static/${e.course}/${e.semester}/${e.year}/${e.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PictureAsPdfRoundedIcon
                          className={classes.icons}
                          fontSize="small"
                        />{" "}
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
