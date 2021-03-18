import React from "react";
import { Alert as AlertUI } from "@material-ui/lab";
const Alert = ({ typeAlert, textAlert }) => {
  return (
    <>
      <AlertUI severity={typeAlert}>{textAlert}</AlertUI>
    </>
  );
};

export default Alert;
