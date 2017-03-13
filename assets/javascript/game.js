
$(document).ready(function(){

alert("hello world");
var wins = 0;
var loses = 0;
var randomNumber = Math.floor(Math.random() * 120)+19; 
var redValue =  Math.floor(Math.random() * 12) + 1;  
var blueValue = Math.floor(Math.random() * 12) + 1;  
var yellowValue =  Math.floor(Math.random() * 12) + 1;  
var greenValue =  Math.floor(Math.random() * 12) + 1;  
var userScore= 0;


		
		
function resetValues() {
		
		 $("#randomNumber").html(randomNumber);
		 // redValue = Math.floor(Math.random() * 12) + 1;  
		 // blueValue = Math.floor(Math.random() * 12) + 1;  
		 // yellowValue =  Math.floor(Math.random() * 12) + 1;  
		 // greenValue =  Math.floor(Math.random() * 12) + 1; 
		 userScore = 0; 
		 alert(randomNumber);

}

function myFunction(){
    $("#randomNumber").html(randomNumber);
  
	   $("#rc").on("click",function(){
	   		userScore= userScore + (redValue);
	   		$("#sampleWords").html(userScore);
	   		checkNumber();
	   	});
	    $("#bc").on("click",function(){
	   		userScore = userScore + (blueValue);
	   		$("#sampleWords").html(userScore);
	   		checkNumber();
	   	});

	   	 $("#yc").on("click",function(){
	   		userScore = userScore + (yellowValue);
	   		$("#sampleWords").html(userScore);
	   		checkNumber();
	   	});

	   	  $("#gc").on("click",function(){
	   		userScore = userScore + (greenValue);
	   		$("#sampleWords").html(userScore);
	   		checkNumber();
	   	});
	   	// checkNumber();
	}
	myFunction();
	
	function checkNumber(){
		if(userScore === randomNumber){
			wins++;
			
			$("#wins").html(wins),
			resetValues();
		}
		else if (userScore > randomNumber){
			alert("you lost");
			loses++;
			$("#loses").html(loses);
			resetValues();
		}
	}
// reset the random number of the varible

});