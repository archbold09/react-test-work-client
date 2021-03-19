import React from "react";
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { searchGenres } from "../../utils/searcher";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 14,
  },
  contentMovie: {
    padding: theme.spacing(8, 0, 6),
    margin: theme.spacing(5),
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

  details: {
    display: "flex",
    flexDirection: "column",
  },
  detailsMovie: {
    marginTop: theme.spacing(4),
  },
  content: {
    flex: "",
  },
  cover: {
    width: 800,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  ratingStyle: {
    sizeSmall: "small",
  },
  cardMovieMainContent: {
    display: "flex",
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  cardMovieDetailContent: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  cardMovieActionContent: {
    paddingTop: 30,
  },
}));

function SimpleRating({ ratingValue }) {
  return (
    <div>
      <Rating name="size-small" value={ratingValue} max={5} size="small" />
    </div>
  );
}

function SearchGenrer({ genreIds, genres }) {
  const genresNames = searchGenres(genreIds, genres);
  return genresNames.join(", ");
}

const Movie = ({ movie, genres }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} variant="outlined">
        <div>
          <CardContent>
            <Typography
              className={classes.title}
              variant="h5"
              component="h2"
              color="textSecondary"
              gutterBottom
            >
              <Box fontWeight={900}>{movie.title}</Box>
            </Typography>
          </CardContent>
          <div className={classes.cardMovieMainContent}>
            <CardMedia
              className={classes.cover}
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              title={movie.title}
            />
            <div className={classes.cardMovieDetailContent}>
              <Typography variant="caption" color="textSecondary">
                {movie.overview.substr(0, 200)}
              </Typography>

              <div className={classes.cardMovieActionContent}>
                <Typography variant="caption" color="textSecondary">
                  <Box fontWeight={900}>
                    Titulo:{" "}
                    <Typography
                      component="span"
                      variant="caption"
                      color="textSecondary"
                    >
                      {movie.title}
                    </Typography>
                  </Box>
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  <Box fontWeight={900}>
                    Calificación:{" "}
                    <Typography
                      component="span"
                      variant="caption"
                      color="textSecondary"
                    >
                      {movie.vote_average}
                      <SimpleRating ratingValue={movie.vote_average} />
                    </Typography>
                  </Box>
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  <Box fontWeight={900}>
                    Genero:{" "}
                    <Typography
                      component="span"
                      variant="caption"
                      color="textSecondary"
                    >
                      <SearchGenrer
                        genres={genres}
                        genreIds={movie.genre_ids}
                      />
                    </Typography>
                  </Box>
                </Typography>

                <Typography variant="caption" color="textSecondary">
                  <Box fontWeight={900}>
                    Fecha de realización:{" "}
                    <Typography
                      component="span"
                      variant="caption"
                      color="textSecondary"
                    >
                      {movie.release_date}
                    </Typography>
                  </Box>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Movie;
