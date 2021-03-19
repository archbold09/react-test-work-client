import { useState, useEffect } from "react";
import * as movieAPI from "../../api/movies";
import {
  Grid,
  Container,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/* my components */
import Movie from "./Movie";
import Loading from "../../components/Dashboard/Loading";

const useStyles = makeStyles((theme) => ({
  contentMovie: {
    padding: theme.spacing(8, 0, 6),
    margin: theme.spacing(5),
  },
}));

function ShowResults({ movies }) {
  return (
    <Grid container spacing={1} alignItems="flex-end">
      {movies.results.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={12} md={4}>
          <Movie movie={movie} genres={movies.genres}  />
        </Grid>
      ))}
    </Grid>
  )
}

const MoviesView = () => {
  const [movies, setMovies] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const result = await movieAPI.getMovies();
        setMovies(result.data.data);
        setLoadingState(false);
      } catch (error) {
        alert(error.message);
      }
    }
    getMovies()
  }, []);

  const classes = useStyles();
  return (
    <>
      <Paper elevation={1} className={classes.contentMovie}>
        <Container component="main">
          {loadingState ? <Loading state={loadingState} /> : <ShowResults movies={movies} /> }
        </Container>
      </Paper>
    </>
  );
};

export default MoviesView;
