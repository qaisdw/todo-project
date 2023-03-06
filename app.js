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

(()=>Traverse(main()))() // calling multiple fun in one line.

function start(questions) {
    let answer = prompt(questions)
    if(answer==''||answer=='null'){
         return 'invalid';
    }else if(answer=='yes'||answer=='no'){
        return answer;
    }else{
        alert('invalid, answer only in yes or no format');
        main(questions);
    }
}



function main() {

    let answer = [];

    let answer1=start ('You usually walk to work');
    //console.log(answer1);
    answer.push(answer1);
    let answer2=start ('Can I grow potatoes in a pot?');
    //console.log(answer2);
    answer.push(answer2);
    let answer3=start ('Can the dog swim?');
    //console.log(answer3);
    answer.push(answer3);

    return answer;
}


function Traverse(answers) {
    for (var i = 0; i < answers.length; i++) {
        console.log(answers[i]);
    }
    return answers;
}

