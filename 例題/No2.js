'use strict';

function sleep(sec){
  return new Promise((resolve, reject) =>{
    setTimeout(resolve, sec*1000);
  });
}

async function main(){
  console.log("3秒後にお前は『おにぎりおいしい』という！");
  // ここでは 3 秒 sleep させてください。
  await sleep(3);
  console.log("おにぎりおいしい");
  // ここでは 1 秒 sleep させてください。
  await sleep(1);
  console.log("…ハッ！");
}

main();