import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import OpenInNewRoundedIcon from "@material-ui/icons/OpenInNewRounded";
import Link from "@material-ui/core/Link";
import { useContext } from "react";
import { appContext } from "../App";
import { makeStyles, Tooltip } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: "1rem auto",
  },
  image: {
    minHeight: 100,
  },
});

const GithubCard = () => {
  const classes = useStyles();
  const { darkMode } = useContext(appContext);
  const uri = `https://github-readme-stats.vercel.app/api/pin/?username=anilseervi&repo=QP-Hoard&show_owner=true&hide_border=true&theme=${
    darkMode ? "slateorange" : "buefy"
  }`;
  const repoLink = "https://github.com/AnilSeervi/qp-hoard";
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={<GitHubIcon />}
        action={
          <Tooltip title="Visit Github" placement="left" arrow>
            <Link
              href="https://github.com/AnilSeervi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton aria-label="settings">
                <OpenInNewRoundedIcon fontSize="small" />
              </IconButton>
            </Link>
          </Tooltip>
        }
        title="QP-Hoard"
        subheader="Github"
      />
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          className={classes.image}
          alt="GitHub Repo Stats"
          title="Repo Stats"
          src={uri}
        />
      </a>
      <CardContent>
        <Typography color="textSecondary" variant="body2">
          Want to contribute to the app? Head over to Github to find more how.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">
          <Link
            color="inherit"
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default GithubCard;
