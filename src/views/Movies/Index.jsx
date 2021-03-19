import { useState, useEffect } from "react";
import * as movieAPI from "../../api/movies";
import {
  Grid,
  Container,
  Paper,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

/* my components */
import Movie from "./Movie";
import Loading from "../../components/Dashboard/Loading";

const useStyles = makeStyles((theme) => ({
  contentMovie: {
    padding: theme.spacing(8, 0, 6),
    margin: theme.spacing(5),
  },
  inputSearch: {
    marginBottom: 10,
  },
}));

function ShowResults({ movies, genres }) {
  if (movies.length === 0) {
    return <h4>No se encontraron datos :(</h4>;
  }
  return (
    <Grid container spacing={1} alignItems="flex-end">
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={12} md={4}>
          <Movie movie={movie} genres={genres} />
        </Grid>
      ))}
    </Grid>
  );
}

const MoviesView = () => {
  const [movies, setMovies] = useState([]);
  const [updatedMovies, setUpdatedMovies] = useState([]);
  const [genres, setGenders] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [moviesSearched, setMoviesSearched] = useState("");

  useEffect(() => {
    async function getMovies() {
      try {
        const result = await movieAPI.getMovies();
        setMovies(result.data.data.results);
        setGenders(result.data.data.genres);
        setUpdatedMovies(result.data.data.results);
        setLoadingState(false);
      } catch (error) {
        alert(error.message);
      }
    }
    getMovies();
  }, []);

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setMoviesSearched(inputValue);
    if (moviesSearched.length === 0) {
      setUpdatedMovies(movies);
      return updatedMovies;
    }

    return setUpdatedMovies(
      movies.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  const classes = useStyles();
  return (
    <>
      <Paper elevation={7} className={classes.contentMovie}>
        <Container component="main">
          <h1>Películas</h1>

          <TextField
            className={classes.inputSearch}
            id="input-with-icon-textfield"
            label="Buscar"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {loadingState ? (
            <Loading state={loadingState} />
          ) : (
            <ShowResults movies={updatedMovies} genres={genres} />
          )}
        </Container>
      </Paper>
    </>
  );
};

export default MoviesView;
