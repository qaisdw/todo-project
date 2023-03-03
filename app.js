// var name = prompt("Enter your name please ?");

// var gender = prompt("What is your gender ?")

// var age = prompt("What is your Age ?");

// gender == "male" || gender == "female" ? console.log("welcome") : console.log("leave");

// if (age <= 0) {
//     alert("Your age cant be zero bro !!!");
// }

// var x = confirm(" do you want to proceed the action ?");
// console.log(x);

// if (x == true) {
//     if (gender == "male") {
//         alert("Welcome Mr " + name);
//     }
//     else if (gender == "female") {
//         alert("Welcome Ms " + name);
//     }
//     else {
//         alert("Now leave !!!");
//     }
// }

alert("Please answer the next following questions in yes or no format");

start();
(()=>Traverse(start()))() // calling multiple fun in one line.

let answer = [];

function start() {

    //let answer = [];

    answer.push(empty(prompt('You usually walk to work.')));
    answer.push(empty(prompt('Can I grow potatoes in a pot?')));
    answer.push(empty(empty(prompt('Can the dog swim?'))));
    
    return answer;
}

function empty(answer) {
    
    for(let i = 0; i<answer.length;i++){

        if (answer[i] === null && answer[i] === "null") {
            alert('invalid');   
            window.stop();
        }
    }
}

function Traverse(answers) {
    for (var i = 0; i < answers.length; i++) {
        console.log(answers[i]);
    }
    return answers;
}

// const questions = [
//     "You usually walk to work.",
//     "Can I grow potatoes in a pot?",
//     "Can the dog swim?",
//   ];
  
//   const answers = questions.map(q => {
//     while(true){ // infinite loop unless we `return`
//       const input = prompt(`${q} (Y/N)`).trim().toLowerCase();
//       if(["y", "n"].includes(input)) return input === "y";
//       else alert("Invalid input, please try again");
//     }
//   });

