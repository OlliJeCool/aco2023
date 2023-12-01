"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var total = 0;
var numWords = [
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
var firstNum = "";
var secondNum = "";
var findFirstWordNum = function (text) {
    var lowestIndex = text.length;
    for (var j = 0; j < numWords.length; j++) {
        var index = text.indexOf(numWords[j]);
        if (index !== -1 && index < lowestIndex) {
            firstNum = j.toString();
            lowestIndex = index;
        }
    }
};
var findLastWordNum = function (text) {
    var secondNum = "";
    var lowestIndex = 0;
    for (var j = 0; j < numWords.length; j++) {
        var index = text.indexOf(numWords[j]);
        if (index !== -1 && index >= lowestIndex) {
            secondNum = j.toString();
            lowestIndex = index;
        }
    }
};
for (var _i = 0, _a = fs_1.readFileSync("input.txt", "utf-8").split(/[\r\n]+/); _i < _a.length; _i++) {
    var line = _a[_i];
    var temp = "";
    for (var i = 0; i < line.length; i++) {
        if (!isNaN(parseInt(line[i]))) {
            firstNum = line[i];
            findFirstWordNum(temp);
            break;
        }
        else {
            temp += line[i];
        }
    }
    temp = "";
    for (var i = line.length - 1; i >= 0; i--) {
        if (!isNaN(parseInt(line[i]))) {
            secondNum = line[i];
            findLastWordNum(temp);
            temp = "";
            break;
        }
        else {
            temp = line[i] + temp;
        }
    }
    temp = "";
    if (secondNum === "" && firstNum === "") {
        findFirstWordNum(line);
        findLastWordNum(line);
    }
    console.log("Input : " + line + " / Output: " + parseInt("" + firstNum + secondNum));
    console.log(total);
    total +=
        !isNaN(parseInt("" + firstNum + secondNum)) === true
            ? parseInt("" + firstNum + secondNum)
            : 0;
}
console.log(total);
