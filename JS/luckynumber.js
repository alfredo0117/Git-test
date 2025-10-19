const luckynumber = 7; 
 
let guess = Math.floor(Math.random() * 10) + 1;


while (guess !== luckynumber) {
  console.log(`No its not ${guess}`)
  guess = Math.floor(Math.random() * 10) + 1;
}

console.log(`My lucky number is ${luckynumber}`)