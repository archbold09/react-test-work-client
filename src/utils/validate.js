import { textHelpers } from "../utils/validateText";
const isNumber = require("is-number");

const validateNumber = (value) => {
  return isNumber(value);
};

const validateInput = (typeError) => {
  const helper = textHelpers.find((helper) => helper.type === typeError);
  return helper.text
};

export { validateNumber, validateInput };
