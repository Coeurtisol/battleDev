import fs from "fs";
import path from "path";

const filePath = "/examples/input1.txt";
let nbManche;
let scoreA = 0;
let scoreB = 0;

function fileParse() {
  const fileContent = fs.readFileSync(path.resolve() + filePath);
  const parsedContent = fileContent.toString();
  const arrayData = parsedContent.split("\n");
  nbManche = arrayData.shift();
  return arrayData;
}

function battle() {
  const cartes = fileParse();
  for (let i = 0; i < nbManche; i++) {
    const [A, B] = cartes[i].split(" ").map(Number);
    if (A != B) {
      A > B ? scoreA++ : scoreB++;
    }
  }
  console.log(scoreA > scoreB ? "A" : "B");
}

battle();
