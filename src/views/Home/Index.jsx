import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Link,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
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

const exercises = [
  {
    title: "Fibonacci",
    description: "Serie fibonacci, un ejercicio clasico.",
    buttonText: "Ver",
    to: "exercise1",
  },
  {
    title: "Secuencia",
    description: "Secuencia de números con algo peculiar ;).",
    buttonText: "Ver",
    to: "exercise2",
  },
  {
    title: "API Movies",
    description:
      "Consumo de una API creada con Express, con un buscador, componentes y más.",
    buttonText: "Ver",
    to: "exercise3",
  },
];

const HomeView = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Prueba de React Js :D
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          component="p"
        >
          Realice este proyecto implementando las mejores practicas y "Pro tips"
          que he ido aprendiendo. Agradezco revisar :).
        </Typography>
        <Alert severity="warning" style={{ marginTop: 30 }}>
          Me ayudaria muchisimo su valoración y puntos a mejorar.
        </Alert>

        <Alert severity="success" style={{ marginTop: 30 }}>
          Repositorio del Server:{" "}
          <Link
            style={{ fontWeight: 900 }}
            color="inherit"
            target="_blank"
            href="https://github.com/archbold09/react-test-work-server"
          >
            https://github.com/archbold09/react-test-work-server
          </Link>{" "}
        </Alert>

        <Alert severity="success" style={{ marginTop: 30 }}>
          Repositorio del Cliente:{" "}
          <Link
            style={{ fontWeight: 900 }}
            color="inherit"
            target="_blank"
            href="https://github.com/archbold09/react-test-work-client"
          >
            https://github.com/archbold09/react-test-work-client
          </Link>{" "}
        </Alert>
      </Container>

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {exercises.map((item) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={item.title}
              xs={12}
              sm={item.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={item.title}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography
                    variant="p"
                    align="center"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                  <Link
                    variant="button"
                    fullWidth
                    color="primary"
                    component={RouterLink}
                    to={item.to}
                  >
                    {item.buttonText}
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomeView;
