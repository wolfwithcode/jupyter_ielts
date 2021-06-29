const writeJsonFile = require('write-json-file');
const data = require("./paragraphs.json");


let week;
const beautifyData2 = {};
data.forEach(text => {
  if(!text) return;
  if(text.includes("IELTS VOCABULARY") || text.includes("IETLS VOCABULARY") ){
    console.log("element", text)
    week=text;
  } else{
    if(week){
      if(!beautifyData2[`${week}`]) beautifyData2[`${week}`]=[];
      beautifyData2[`${week}`].push(text);
    }
  }
})

writeJsonFile('beautifyData2.json', beautifyData2);