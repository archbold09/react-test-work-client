import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  IconButton,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import {
  SkipPreviousIcon,
  PlayArrowIcon,
  SkipNextIcon,
  SentimentVeryDissatisfiedIcon,
  SentimentDissatisfiedIcon,
  SentimentSatisfiedIcon,
  SentimentSatisfiedAltIcon,
  SentimentVerySatisfiedIcon,
  StarBorderIcon,
  FavoriteIcon,
} from "@material-ui/icons/SkipPrevious";

import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
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
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  detailsMovie: {
    marginTop: theme.spacing(4),
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 500,
    height: 300,
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
  ratingStyle:{
      textSize:10
  }
}));

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function SimpleRating({ ratingValue }) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="simple-controlled" value={ratingValue} max={5} />
      </Box>
    </div>
  );
}

const Movie = ({ movie }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          title={movie.title}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              {movie.title}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {movie.overview.substr(0, 200)}
            </Typography>
            <div className={classes.detailsMovie}>
              <Typography component="p" variant="subtitle">
                <Box fontWeight={500}>
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
              <Typography component="p" variant="p">
                <Box fontWeight={500}>
                  Calificación:{" "}
                  <Typography
                    component="span"
                    variant="caption"
                    color="textSecondary"
                  >
                    {movie.vote_average}
                    <SimpleRating className={classes.ratingStyle} ratingValue={movie.vote_average} />
                  </Typography>
                </Box>
              </Typography>
              <Typography component="p" variant="p">
                <Box fontWeight={500}>
                  Genero:{" "}
                  <Typography
                    component="span"
                    variant="caption"
                    color="textSecondary"
                  >
                    {movie.genre_ids}
                  </Typography>
                </Box>
              </Typography>
              <Typography component="p" variant="p">
                <Box fontWeight={500}>
                  Genero:{" "}
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
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default Movie;
