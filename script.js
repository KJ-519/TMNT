console.log("hello")

let Pizza = document.querySelector(".Pizza");
console.log(Pizza);
let Color = document.querySelector(".Color");
console.log(Color);
let quiz = document.querySelector(".quiz");
console.log(quiz);
let PlayAgain = document.querySelector(".PlayAgain");
console.log(PlayAgain);
let message = document.querySelector(".message");
let LeoImg = document.querySelector(".LeoImg");
let RaphImg = document.querySelector(".RaphImg");
let MikeyImg = document.querySelector(".MikeyImg");
let DonnieImg = document.querySelector(".DonnieImg");
let TurtleFam = document.querySelector(".TurtleFam");

quiz.onclick = function(){
console.log("clicked");
PlayAgain.onclick = function(){
console.log("Again");
TurtleFam.style.display = "block";
LeoImg.style.display = "none";
RaphImg.style.display = "none";
MikeyImg.style.display = "none";
DonnieImg.style.display = "none";
PlayAgain.style.display = "none";
message.style.display = "none";
}
PlayAgain.style.display = "block"
TurtleFam.style.display = "none";
message.style.display = "block";
let answer1 = Pizza.value;
console.log(answer1);
let answer2 = Color.value;
console.log(answer2);
if(answer1 === "Sausage" && answer2 === "Blue"){
LeoImg.style.display = "block";
message.innerHTML = "Leonardo"
console.log("Leonardo");
} else if (answer1 === "Cheese" && answer2 === "Red"){
RaphImg.style.display = "block";
message.innerHTML = "Raphael"
console.log("Raphael");
} else if (answer1 === "Veggie" && answer2 === "Orange"){
MikeyImg.style.display = "block";
message.innerHTML = "Michelangelo"
console.log("Michelangelo");
} else if (answer1 === "Pepperoni" && answer2 === "Purple"){
DonnieImg.style.display = "block";
message.innerHTML = "Donatello"
console.log("Donatello");
}
}
