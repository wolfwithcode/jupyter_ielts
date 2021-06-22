const writeJsonFile = require('write-json-file');
const data = require("./dataLi4.json");

console.log("data", data[0]);

const convert = (values) => {
  const obj = {
    index: values.index,
    word_title: values.word_title || "",
    pronunciation: [],
    meaningEnglish: [],
    meaningVietnamese: [],
    example: [],
    unknown: [],
  };
  values.content.forEach((element) => {
    const category = element.key;
    const value = element.value;
    if(!value) return;
    if (!obj[`${category}`]) obj[`${category}`] = [];
    obj[`${category}`].push(value);
  });
  return obj;
};

// console.log("obj", convert(data[0]));


writeJsonFile('beautifyData.json', data.map(element => convert(element)));