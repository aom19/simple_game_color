var num_of_squares = 6;
var colors = generate_random_color(num_of_squares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message_display = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset_button = document.getElementById("reset");
var mode_buttons = document.querySelectorAll(".mode");


for ( var i = 0 ; i < mode_buttons.length; i++){
	mode_buttons[i].addEventListener("click" , function(){
		mode_buttons[0].classList.remove("selected");
		mode_buttons[1].classList.remove("selected");
		this.classList.add("selected");
		if ( this.textContent === "Easy"){
			num_of_squares = 3;
		}else{
			num_of_squares = 6;
		}
		reset();

	});

}

function reset(){
	colors = generate_random_color(num_of_squares);

	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
	reset_button.textContent= "New Colors";
	message_display.textContent="";
	for (var i = 0 ; i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.display = "block"; 
 			squares[i].style.backgroundColor = colors[i];
 		} else{
 			squares[i].style.display = "none";
 		}
 	}
 	h1.style.backgroundColor = "steelblue";
 };






 reset_button.addEventListener("click", function(){
 	reset();
 });

 colorDisplay.textContent = pickedColor;




for(var i = 0 ; i < squares.length ; i++){
	squares[i].style.backgroundColor = colors[i];
 	
squares[i].addEventListener("click", function(){
	var clicked_color = this.style.backgroundColor;
 		
	if(clicked_color === pickedColor){
			message_display.textContent = "Correct!"
			reset_button.textContent = "Play again ?"
		change_colors(clicked_color); 
			h1.style.backgroundColor = clicked_color;
		}else {
 			this.style.backgroundColor="#232323";
 			message_display.textContent= "Try Again";
		}
 	});
 }

 function change_colors(color){
 		for( var i = 0 ; i < squares.length ; i++){
 			squares[i].style.backgroundColor = color;
 	}


 }
 function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

 function generate_random_color(num){
 	var arr = [];
 	for (var i = 0 ; i < num ; i++){
 		arr.push(random_color());

 	}

 	return arr;
 }
 function random_color(){

 		var r = Math.floor(Math.random() * 256);
 		var g = Math.floor(Math.random() * 256);
 		var b = Math.floor(Math.random() * 256);
 		return "rgb(" + r + ", " + g + ", " + b + ")";

 };
