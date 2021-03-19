import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems:"center"
  },
}));

const Loading = ({state}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress/>
    </div>
  );
};

export default Loading;
