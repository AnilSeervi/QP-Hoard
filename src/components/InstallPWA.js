import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { useCallback } from "react";
import { makeStyles } from "@material-ui/core";
import useIsInstalled from "../Hooks/useIsInstalled";

const useStyles = makeStyles((theme) => ({
  margin: {
    position: "fixed",
    bottom: theme.spacing(9),
    right: theme.spacing(3),
  },
}));

const InstallPWA = () => {
  const classes = useStyles();
  const { deferredPrompt } = useIsInstalled();
  const install = useCallback(async () => {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
  }, [deferredPrompt]);

  return (
    deferredPrompt && (
      <Tooltip title="Install" aria-label="Install" placement="top" arrow>
        <Fab
          onClick={install}
          size="medium"
          color="primary"
          aria-label="Install"
          className={classes.margin}
        >
          <GetAppRoundedIcon />
        </Fab>
      </Tooltip>
    )
  );
};

export default InstallPWA;
