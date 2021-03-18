import { textHelpers } from "../utils/validateText";
const isNumber = require("is-number");

const validateNumber = (value) => {
  return isNumber(value);
};

const validateInput = (typeError) => {
  const helper = textHelpers.find((helper) => helper.type === typeError);
  return helper.text;
};

const validateMultiple = (value) => {
  let result_3 = value % 3;
  let result_5 = value % 5;
  if (result_5 === 0 && result_3 === 0) {
    return "AKELAB";
  } else if (result_5 === 0) {
    return "LAB";
  } else if (result_3 === 0) {
    return "AKE";
  } else {
    return value;
  }
};

export { validateNumber, validateInput, validateMultiple };
