const upperCipher = (charCode, key) => {
  return String.fromCharCode(((charCode + key - 65) % 26) + 65);
};
const lowerCipher = (charCode, key) => {
  return String.fromCharCode(((charCode + key - 97) % 26) + 97);
};

const encipher = (text, key) => {
  let cipheredtext = "";

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i).match(/[a-zA-Z]/)) {
      let code = text.charAt(i).charCodeAt();
      if (code >= 65 && code <= 90) {
        cipheredtext += upperCipher(code, key);
      }
      else if (code >= 97 && code <= 122) {
        cipheredtext += lowerCipher(code, key);
      }
    }
    else {
      cipheredtext += text.charAt(i);
    }
  }
  return cipheredtext;
};

const ceaserCipher = {
  encipher,
};
export default ceaserCipher;

