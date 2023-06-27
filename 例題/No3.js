'use strict';
const fs = require('node:fs');

function writeToFile(content){
  return new Promise((resolve, reject) => {
    fs.appendFile('dwango.txt', content, 'utf8', resolve)
  });
}

async function main(){
  for (let count = 0; count < 2525; count++ ){
    await writeToFile('ド');
    await writeToFile('ワ');
    await writeToFile('ン');
    await writeToFile('ゴ');
    await writeToFile('\n');
  }
}

main();