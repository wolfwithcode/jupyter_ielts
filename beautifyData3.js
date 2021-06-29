const writeJsonFile = require('write-json-file');
const data = require("./beautifyData2.json");

const convert = (textList) => {
  const hashTable = {};
  let vocabulary;
  console.log("textList",textList);
  textList.forEach(text =>{
    if(!text) return;
   if(text.includes(" / ") || text.includes("[ ")) {
    vocabulary=text;
   } else{
     if(!vocabulary) return;
     if(!hashTable[`${vocabulary}`]) hashTable[`${vocabulary}`] = [];
     hashTable[`${vocabulary}`].push(text);
   }
  //   else console.log("vocabulary", text);
  })
  // return hashTable;
  return Object.keys(hashTable).map(key => {
    const content = hashTable[key];
    return{
    vocabulary: key,
    content,
    }
  })
}

const beautifyData=[];

Object.keys(data).map(week =>{
  console.log("data key", week);
  // data[key].map(text => {
  //   if(text.includes(" / ")) console.log("group", text);
  //   else console.log("vocabulary", text);
  // })
  const vocabularyList =convert(data[week]);
  beautifyData.push(...vocabularyList.map(element => {
    return{
      ...element,
      week
    }
  }))
})



writeJsonFile('beautifyData3.json', beautifyData);