const calcSum = (array) => {
  return array.reduce((prev, curr) => prev + curr, 0);
};

const calcLength = (array) => {
  return array.length;
};

const calcAverage = (array) => {
  return calcSum(array) / calcLength(array);
};

const calcMin = (array) => {
  return array.reduce((prev,curr)=>Math.min(prev,curr))
};

const calcMax = (array) => {
  return array.reduce((prev,curr)=>Math.max(prev,curr))

};

const analyzeArray = (array) => {
  const analyzedArray = {
    average: calcAverage(array),
    min: calcMin(array),
    max: calcMax(array),
    length: calcLength(array),
  };
  return analyzedArray;
};

export default analyzeArray;
