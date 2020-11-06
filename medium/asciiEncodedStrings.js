//Input '729799107101114328297110107'
//Output HackerRank

function decode(encoded) {
  let encodedResersedString = encoded.split("").reverse().join("");
  console.log("encodedResersedString", encodedResersedString);
  let decoded = "";
  let currentString;
  let curNum;
  for (let i = 0; i < encodedResersedString.length; i += 2) {
    currentString = encodedResersedString[i] + encodedResersedString[i + 1];
    console.log("currentString1", currentString, "cur index", i);
    curNum = +currentString;
    if (
      (curNum >= 65 && curNum <= 90) ||
      (curNum >= 97 && curNum <= 122) ||
      curNum === 32
    ) {
      decoded += String.fromCharCode(curNum);
      console.log("decoded1", decoded);
    } else {
      currentString =
        encodedResersedString[i] +
        encodedResersedString[i + 1] +
        encodedResersedString[i + 2];
      console.log("currentString2", currentString);
      curNum = +currentString;
      decoded += String.fromCharCode(curNum);
      console.log("decoded2", decoded);
      i++;
    }
    console.log(curNum);
  }
  return decoded;
}
// console.log("result", decode("729799107101114328297110107"));
