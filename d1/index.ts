import { readFileSync } from "fs";
let total = 0;
const numWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

let firstNum: string = "";
let secondNum: string = "";

const findFirstWordNum = (text: string) => {
  let lowestIndex = text.length;
  for (let j = 0; j < numWords.length; j++) {
    const index = text.indexOf(numWords[j]);
    if (index !== -1 && index < lowestIndex) {
      firstNum = j.toString();
      lowestIndex = index;
    }
  }
};

const findLastWordNum = (text: string) => {
  let secondNum: string = "";
  let lowestIndex = 0;
  for (let j = 0; j < numWords.length; j++) {
    const index = text.indexOf(numWords[j]);
    if (index !== -1 && index >= lowestIndex) {
      secondNum = j.toString();
      lowestIndex = index;
    }
  }
};

for (const line of readFileSync("input.txt", "utf-8").split(/[\r\n]+/)) {
  let temp = "";
  for (let i = 0; i < line.length; i++) {
    if (!isNaN(parseInt(line[i]))) {
      firstNum = line[i];
      findFirstWordNum(temp);
      break;
    } else {
      temp += line[i];
    }
  }
  temp = "";
  for (let i = line.length - 1; i >= 0; i--) {
    if (!isNaN(parseInt(line[i]))) {
      secondNum = line[i];
      findLastWordNum(temp);
      temp = "";
      break;
    } else {
      temp = line[i] + temp;
    }
  }
  temp = "";
  if (secondNum === "" && firstNum === "") {
    findFirstWordNum(line);
    findLastWordNum(line);
  }

  console.log(
    `Input : ${line} / Output: ${parseInt(`${firstNum}${secondNum}`)}`
  );
  console.log(total);
  total +=
    !isNaN(parseInt(`${firstNum}${secondNum}`)) === true
      ? parseInt(`${firstNum}${secondNum}`)
      : 0;
}
console.log(total);
