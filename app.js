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

function main() {
    let answers = start();
    empty(answers);
    //let answers2 = Traverse(answers1);
}

main();


function start() {
    let answer = [];
        answer.push(prompt('You usually walk to work.'));
        answer.push(prompt('Can I grow potatoes in a pot?'));
        answer.push(prompt('Can the dog swim?'));
    return answer;
}

function empty(answers) {
    for (var i = 0; i < answers.length; i++) {
        if (answers == nall) {
            alert('invalid');
            window.stop();
        } else {
            continue
        }
    }
}

function Traverse(answers) {
    for (var i = 0; i < answers.length; i++) {
        console.log(answers[i]);
    }
    return answers;
}

