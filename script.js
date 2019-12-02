var num_of_squares = 6;
var colors = [];
var pickedColor ;

var squares = 			document.querySelectorAll(".square");
var colorDisplay = 		document.getElementById("colorDisplay");
var message_display = 	document.getElementById("message");
var h1 = 				document.querySelector("h1");
var reset_button = 		document.getElementById("reset");
var mode_buttons = 		document.querySelectorAll(".mode");

init();

//FUNCTION INIT
function init(){
	set_mode();
	set_squares();
 	reset();
}
//FUNCTION SET MODEL EASY OR HARD
function set_mode(){
	for ( var i = 0 ; i < mode_buttons.length; i++){
		mode_buttons[i].addEventListener("click" , function(){
			mode_buttons[0].classList.remove("selected");
			mode_buttons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? num_of_squares = 3: num_of_squares = 6;
			reset();
		});
	}

}

function set_squares(){
	for(var i = 0 ; i < squares.length ; i++){
 		//add click listener;
		squares[i].addEventListener("click", function(){
			var clicked_color = this.style.backgroundColor;
 			//compare the color;
	
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

 
 function change_colors(color){
 		for( var i = 0 ; i < squares.length ; i++){
 			squares[i].style.backgroundColor = color;
 	}
 }


 function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }
//GENERATE RANDOM COLORS TO SQUARES
 function generate_random_color(num){
 	var arr = [];
 	for (var i = 0 ; i < num ; i++){
 		arr.push(random_color());
 	}
 	return arr;
 }
// RANDOM RGB COLOR  - RED GREEN BLUE
 function random_color(){
 		var r = Math.floor(Math.random() * 256);
 		var g = Math.floor(Math.random() * 256);
 		var b = Math.floor(Math.random() * 256);
 		return "rgb(" + r + ", " + g + ", " + b + ")";

 };
