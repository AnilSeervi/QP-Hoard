import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="main-cont">
      <Typography variant="h5" component="h2">
        The Page you are looking for is not available.
      </Typography>
      <Typography>
        <Link to="/">Back to Homepage...</Link>
      </Typography>
    </main>
  );
};
export default Error;
