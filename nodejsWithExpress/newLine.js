const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

// 提出問題並接收input
rl.question(`What is ${num1} + ${num2}? \n`, (userInput) => {
    if( userInput.trim() == answer){
        rl.close();
    }else{
        rl.setPrompt(`Incorrect answer. Try again.\n`);
        rl.prompt();
        rl.on('line', (userInput) => {
            if( userInput.trim() == answer){
                rl.close();
            }else{
                rl.prompt();
            }
        });
    }
});

// 觸發close事件
rl.on('close', () => {
    console.log("Your answer is correct!");
});
