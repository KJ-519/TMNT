console.log("hello")

let Pizza = document.querySelector(".Pizza");
console.log(Pizza);
let Color = document.querySelector(".Color");
console.log(Color);
let quiz = document.querySelector(".quiz");
console.log(quiz);

quiz.onclick = function(){
console.log("clicked");
let answer1 = Pizza.value;
console.log(answer1);
let answer2 = Color.value;
console.log(answer2);
if(answer1 === "Sausage" && answer2 === "Blue"){
console.log("Leonardo");
} else if (answer1 === "Cheese" && answer2 === "Red"){
console.log("Raphael");
} else if (answer1 === "Veggie" && answer2 === "Orange"){
console.log("Michelangelo");
} else if (answer1 === "Pepperoni" && answer2 === "Purple"){
console.log("Donatello");
}
}
