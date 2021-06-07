import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import GithubCard from "../components/GithubCard";
import Link from "@material-ui/core/Link";
const useStyles = makeStyles({
  welcome: {
    margin: "0.3rem 0 1rem 0",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <section className="main-cont home">
      <Typography
        align="center"
        classes={{ root: classes.welcome }}
        variant="h5"
        component="h1"
        color="textSecondary"
      >
        Welcome to QP Hoard
      </Typography>
      <Typography gutterBottom align="center">
        A{" "}
        <abbr title="Progressive Web App">
          <strong>PWA</strong>
        </abbr>{" "}
        Serving Question Papers for Undergrads of <em>BCA</em>, <em>BBA</em> and{" "}
        <em>BCOM</em>.
      </Typography>
      <Typography align="center">
        A PWA is a Web Application that you can install directly to your device
        from the Browser itself.
      </Typography>
      <GithubCard />
      <Typography className="foot" variant="caption" color="textSecondary">
        Developed by{" "}
        <Link
          href="https://anil.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
          color="textPrimary"
          underline="always"
        >
          Anil Seervi
        </Link>
      </Typography>
    </section>
  );
};

export default Home;
