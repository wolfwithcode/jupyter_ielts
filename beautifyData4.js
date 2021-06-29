const writeJsonFile = require("write-json-file");
const data = require("./beautifyData3.json");

// console.log("data", data[0]);

const getWordTitle = (text) => {
  let title = "";
  if (text) {
    const strArray = text.split("/");
    // console.log("strArray", strArray);
    if (strArray.length > 0) title = strArray[0];
  }
  return title.trim();
};

const getWordType = (text) => {
 
  if (text) {
    const strArray1 = text.split("(");
    console.log("strArray1", strArray1);
    if (strArray1.length > 1) return "(" + strArray1[1];
    const strArray2 = text.split("[");
    // console.log("strArray", strArray);
    if (strArray2.length > 1) return "[" + strArray2[1];
    
  }
  return "";
};

const getWordPronunciation = (text) => {
 
  if (text) {
    const strArray = text.split("/");
    // console.log("strArray", strArray);
    if (strArray.length > 1) return "/" + strArray[1];    
  }
  return "";
};

const convert = (values) => {
  const object = {};
  object["key"] = values.vocabulary;
  object["wordTitle"] = getWordTitle(values.vocabulary);
  object["type"] = getWordType(values.vocabulary);
  object["pronunciation"] = getWordPronunciation(values.vocabulary);
  object["originContent"] = values.content;
  object["week"] = values.week;
  
  object["meaningEnglish"] = [];
  object["meaningVietnamese"] = [];
  object["example"] = [];
  object["unknown"] = [];
  values.content.forEach((element) => {
    if (element.startsWith("/")) object["pronunciation"] = element;
    else if (element.startsWith("=")) object["meaningEnglish"].push(element);
    else if (element.startsWith("(")) object["meaningVietnamese"].push(element);
    else if (element.startsWith("Ex")) object["example"].push(element);
    else object["unknown"].push(element);
  });
  // console.log("object", object);
  return object;
};

writeJsonFile(
  "beautifyData4.json",
  data.map((element) => convert(element))
);
