const encipher = (string, key) => {
  let cipheredString = "";
  for (let i = 0; i < string.length; i++) {
    cipheredString += String.fromCharCode(string[i].charCodeAt() + key);
  }
  return cipheredString;
};

const ceaserCipher = {
  encipher,
};
export default ceaserCipher;
