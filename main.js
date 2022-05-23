let userName = "Ubaid";
const userQuestion = "Will this summer be the greatest and most impactful summer ever on my life?"
let randomNumber = Math.floor(Math.random() *8);
let eightBall = "";

userName === "Ubaid" ? console.log(`Hello, ${userName}`) : console.log('Hello!');
console.log(userQuestion);

if (randomNumber === 0){
  let eightBall = "It is certain";
  console.log(eightBall);
} else if (randomNumber === 1){
  let eightBall = "It is decidedly so";
  console.log(eightBall);
}else if (randomNumber === 2){
  let eightBall = "Reply hazy try again";
  console.log(eightBall);
} else if (randomNumber === 3){
  let eightBall = "Cannot predict now";
  console.log(eightBall);
} else if (randomNumber === 4){
  let eightBall = "Do not count on it";
  console.log(eightBall);
}else if (randomNumber === 5){
  let eightBall = "My sources say no";
  console.log(eightBall);
} else if (randomNumber === 6){
  let eightBall = "Outlook not so good";
  console.log(eightBall);
}else if (randomNumber === 7){
  let eightBall = "Signs point to yes";
  console.log(eightBall);
}

