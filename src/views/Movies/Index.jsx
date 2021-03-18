import { useState, useEffect } from "react";
import * as movieAPI from "../../api/movies";
import {
  Grid,
  Container,
  Paper,
  TextField,
  Divider,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";
import Movie from "./Movie";

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
  margin: {
    margin: theme.spacing(0, 0, 5, 0),
  },
  iconArrow: {
    fontSize: 14,
  },
}));

function ShowResults({ movies }) {
  if (movies.length !== 0) {
    return (
      <Grid container spacing={5} alignItems="flex-end">
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={12} md={4}>
            <Movie movie={movie} />
          </Grid>
        ))}
      </Grid>
    );
  } else {
    return "";
  }
}

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

const MoviesView = () => {
  const [movies, setMovies] = useState([{}]);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const open = Boolean(anchorEl1);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  useEffect(async () => {
    try {
      const result = await movieAPI.getMovies();
      setMovies(result.data.data.results);
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }, [{}]);

  const classes = useStyles();
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <>
      <Paper elevation={4} className={classes.contentMovie}>
        <Container maxWidth="md" component="main">
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <SearchIcon />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="Buscar" />
              </Grid>

              <Grid item>
                <div>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick1}
                  >
                    <MenuIcon />
                  </IconButton>
                  {/* <Menu
                      id="long-menu"
                      anchorEl1={anchorEl1}
                      keepMounted
                      open={open}
                      onClose={handleClose1}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          selected={option === "Pyxis"}
                          onClick={handleClose1}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu> */}
                </div>
              </Grid>
              <Grid item>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick2}
                >
                  Ordenar
                  <ArrowForwardIosIcon className={classes.iconArrow} />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem onClick={handleClose2}>Profile</MenuItem>
                  <MenuItem onClick={handleClose2}>My account</MenuItem>
                  <MenuItem onClick={handleClose2}>Logout</MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Container component="main">
          <ShowResults movies={movies} />
        </Container>
      </Paper>
    </>
  );
};

export default MoviesView;
