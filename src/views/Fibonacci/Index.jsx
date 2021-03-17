import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import FormFibonacci from './FormFibonacci'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  form: {},
}));

const Exercise1 = () => {
  const classes = useStyles();


  return (
    <>
      <Container maxWidth="sm" className={classes.heroContent}>
        <Grid item align="center">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Serie Fibonacci
          </Typography>

          <FormFibonacci/>
        </Grid>
      </Container>
    </>
  );
};

export default Exercise1;
