import React from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { validateNumber, validateInput } from "../../utils/validate";
import Alert from "../../components/Dashboard/Alert";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  item: {
    padding: theme.spacing(2),
  },
}));

function FibonacciSolution(value) {
  let data = [0, 1];
  for (let i = 2; i <= value; i++) {
    data[i] = data[i - 1] + data[i - 2];
  }
  return data;
}

function ShowAlert({ errorValue, textAlert }) {
  if (errorValue) {
    return <Alert typeAlert="error" textAlert={textAlert} />;
  } else {
    return "";
  }
}

function ShowResult({ errorValue, resultFibonacci, classes }) {
  if (!errorValue && resultFibonacci.length > 0 ) {
    return (
      <Grid item className={classes.item}>
        <Typography> 😎 Resultado</Typography>
        <Typography>[{resultFibonacci}]</Typography>
      </Grid>
    );
  } else {
    return ''
  }
}

const FormFibonacci = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState("");
  const [errorValue, setErrorValue] = React.useState(false);
  const [helperTextValue, setHelperTextValue] = React.useState("");
  const [resultFibonacci, setResultFibonacci] = React.useState("");

  const handleChange = (event) => {
    /* Error prop */
    validateNumber(event.target.value)
      ? setErrorValue(false)
      : setErrorValue(true);

    /* TextHelper prop */

    if (event.target.value.length === 0) {
      setHelperTextValue(validateInput("NullValue"));
    } else if (!validateNumber(event.target.value)) {
      setHelperTextValue(validateInput("OnlyNumber"));
    } else if (event.target.value < 1) {
      setHelperTextValue(validateInput("LowNumber"));
    } else {
      setHelperTextValue("");
    }

    /* Input value */

    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /* resultado fibonacci */
    let result = FibonacciSolution(value).join(",");
    setResultFibonacci(result);
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid item className={classes.item}>
          <TextField
            name="fibonacciValue"
            label="Ingrese un número"
            variant="outlined"
            error={Boolean(errorValue)}
            helperText={helperTextValue}
            value={value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item className={classes.item}>
          <Button
            disabled={Boolean(errorValue)}
            type="submit"
            variant="outlined"
            color="primary"
          >
            Ver resultado
          </Button>
        </Grid>
      </form>

      <ShowResult
        errorValue={errorValue}
        inputValue={value}
        resultFibonacci={resultFibonacci}
        classes={classes}
      />

      <ShowAlert errorValue={errorValue} textAlert={helperTextValue} />
    </>
  );
};

export default FormFibonacci;
