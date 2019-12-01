var num_of_squares = 6;
var colors = generate_random_color(num_of_squares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message_display = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset_button = document.getElementById("reset");
 var easy_btn = document.getElementById("easybtn");
 var hard_btn = document.getElementById("hardbtn");





easy_btn.addEventListener("click", function(){
 	easy_btn.classList.add("selected");
 	hard_btn.classList.remove("selected");
 	num_of_squares = 3 ;
 	colors = generate_random_color(num_of_squares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	for(var i = 0 ; i < squares.length ; i ++){
 		if(colors[i]){
 			squares[i].style.backgroundColor = colors[i];
 		}else{
 			squares[i].style.display = "none";
		}
 	}
});

hard_btn.addEventListener("click", function(){
 	hard_btn.classList.add("selected");
 	easy_btn.classList.remove("selected");
 	num_of_squares = 6;
 	colors = generate_random_color(num_of_squares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	for(var i = 0 ; i < squares.length ; i ++){
 			squares[i].style.backgroundColor = colors[i];
 			squares[i].style.display = "block";
 	}
});



 reset_button.addEventListener("click", function(){
 	colors = generate_random_color(num_of_squares);

 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;


 	for (var i = 0 ; i < squares.length ; i++){
 		squares[i].style.backgroundColor = colors[i];
 	}
 	h1.style.backgroundColor = "steelblue";
 	message_display.textContent="";
 	this.textContent= "New Colors";
 });

 colorDisplay.textContent = pickedColor;




for(var i = 0 ; i < squares.length ; i++){
	squares[i].style.backgroundColor = colors[i];
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

 function change_colors(color){
 	//merge prin toate patratele
 	//schimba toate patratele in culoarea corecta ;
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
 		//rosu - 0 ..255;
 		//galben - 0 ..255;
 		var r = Math.floor(Math.random() * 256);
 		var g = Math.floor(Math.random() * 256);
 		var b = Math.floor(Math.random() * 256);
 		return "rgb(" + r + ", " + g + ", " + b + ")";

 };
