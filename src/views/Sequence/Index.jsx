import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import FormSequence from './FormSequence'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Exercise2 = () => {
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
           Secuencia de números
          </Typography>

          <FormSequence/>
        </Grid>
      </Container>
    </>
  );
};

export default Exercise2;
