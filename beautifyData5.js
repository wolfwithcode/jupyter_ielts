const writeJsonFile = require("write-json-file");
const data = require("./beautifyData4.json");

// console.log("data", data[0]);



// writeJsonFile(
//   "beautifyData5.json",
//   data[0]
// );

const convertOneLine = (text) => {
  console.log("text", text);
  if (text) {
    const strArray1 = text.split("(");
    console.log("strArray", strArray1);
    if (strArray1.length > 1 && strArray1[0]) {
      strArray1[1] = "("+ strArray1[1];
      return strArray1;
    }

    const strArray2 = text.split("Ex:");
    console.log("strArray2", strArray2);
    if (strArray2.length > 1 && strArray2[0]) {
      strArray2[1] = "Ex:"+ strArray2[1];
      return strArray2;
    }
    
  }
  return [text];
  // return title.trim();
}

const convertToLines = (content) => {
  const lines = [];
  content.forEach(element => {
    const strArray = convertOneLine(element);
    lines.push(...strArray);
  })
  // console.log("lines", lines)
  return lines;
}

const originContent =[
  "= (Literally, “against decaying” ) substance that prevents infection",
  "(Nghĩa đen: “Chống lại sự phân hủy” ) chất chống nhiễm trùng, chất sát trùngEx: The wound was carefully washed; then an antiseptic, tincture of iodine, wasapplied.",
  "(Vết thƣơng đƣợc rửa cẩn thận rồi bôi thuốc sát trùng, tentuya idot, vào.)"
];

const result =data.map(element => {
  const {originContent} = element;
  const lines = convertToLines(originContent);
  return {originContent,lines};
} ) ;


writeJsonFile(
  "beautifyData5.json",
  result,
);
