import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export const CircularCoverBackdrop = (props) => {
  const classes = useStyles(props);

  return (
    <Backdrop
      className={classes.backdrop}
      open={props.open}
      onClick={props.handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
