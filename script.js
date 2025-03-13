console.log("hello")

let Pizza = document.querySelector(".Pizza");
console.log(Pizza);
let Turtle = document.querySelector(".Turtle");
console.log(Turtle);
let quiz = document.querySelector(".quiz");
console.log(quiz);

quiz.onclick = function(){
console.log("clicked");
let answer1 = Pizza.value;
console.log(answer1);
let answer2 = Turtle.value;
console.log(answer2);
if(answer1 === "tall" && answer2 === "snack"){
console.log("shagy");
}
};