
//random number function
random_number = Math.floor(Math.random(1,100)*100);

random_number = parseInt(random_number);
document.getElementById('guess').innerHTML = random_number;



//initial nested function will verify if !NaN and within bounds 
var user_input = function(){
	guess = prompt("Guess a number");
	if(isNaN(guess)){
		console.log("Enter a number between 1-100");
		guess_num();
	}else{

		if(guess < 0){
			console.log("Try a higher number");
			user_input();
		} else if(guess > 100){
			console.log("Too high! Try again");
			user_input();
		} else {
			return guess;
		}
	}
}


//actual function, will tell if above or below random static number
var guess_num = function(){
	user_input();

	if(guess < random_number){
		console.log("Cold! Keep guessing...");
		guess_num();

	}
	else if(guess > random_number){
		console.log("Hot! Keep going...");
		guess_num();

	}else {
		console.log("you got it!");
	}
}

guess_num();