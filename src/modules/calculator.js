const isValidNumber = (number) => {
  return typeof number === "number";
};

const add = (num1, num2) => {
  if (isValidNumber(num1) && isValidNumber(num2)) {
    return num1 + num2;
  } else {
    return "Not valid Number(s)";
  }
};

const subtract = (num1, num2) => {
  if (isValidNumber(num1) && isValidNumber(num2)) {
    return num1 - num2;
  } else {
    return "Not valid Number(s)";
  }
};

const calculator = {
  add,
  subtract,
};

export default calculator;
