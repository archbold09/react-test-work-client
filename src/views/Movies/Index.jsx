import { useState, useEffect } from "react";
import * as moviesAPI from "../../api/movies";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Container,
  Paper,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/StarBorder";
import Movie from "./Movie";
const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  content: {
    padding: theme.spacing(5),
    margin: theme.spacing(6, 12),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));


const Movies = () => {
  const [movies, setMovies] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    try {
      const data = moviesAPI.getMovies()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Paper elevation={5} className={classes.content}>
        <Typography variant="h6" fontWeight={900}>
          <Box fontWeight={900}>Peliculas</Box>
        </Typography>
        {/* <Container maxWidth="md" component="main">

          <Grid container spacing={5} alignItems="flex-end">
            {movie.map((movie) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={movie.title}
                xs={12}
                sm={12}
                md={4}
              >
                <Movie movie={movie}/>
              </Grid>
            ))}
          </Grid>
        </Container> */}
      </Paper>
    </>
  );
};

export default Movies;
