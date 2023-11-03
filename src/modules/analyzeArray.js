const calcSum = (array) => {
  return array.reduce((prev, curr) => prev + curr, 0);
};

const calcLength = (array) => {
  return array.length;
};

const calcAverage = (array) => {
  const result = calcSum(array) / calcLength(array);
  return Number.isInteger(result) ? result : parseFloat(result.toFixed(2));
};

const calcMin = (array) => {
  return array.reduce((prev, curr) => Math.min(prev, curr));
};

const calcMax = (array) => {
  return array.reduce((prev, curr) => Math.max(prev, curr));
};

const isValidArray = (array) => {
  if (!Array.isArray(array)) return false;

  return array.every((item) => typeof item === "number");
};

const analyzeArray = (array) => {
  if (!isValidArray(array)) {
    return "Not a valid Array";
  }
  const analyzedArray = {
    average: calcAverage(array),
    min: calcMin(array),
    max: calcMax(array),
    length: calcLength(array),
  };
  return analyzedArray;
};

export default analyzeArray;
