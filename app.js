var name = prompt("Enter your name please ?");

var gender = prompt("What is your gender ?")

var age = prompt("What is your Age ?");

gender == "male" || gender == "female"  ? console.log("welcome") : console.log("leave");

if ( age <= 0){
    alert("Your age cant be zero bro !!!");
}

var x = confirm(" do you want to proceed the action ?");
console.log(x);

if (x == true){
    if (gender == "male" ) {
        alert("Welcome Mr "+ name );
    }
    else if (gender == "female"){
        alert("Welcome Ms "+ name );
    }
    else {
        alert("leave !!!");
    }
}