


alert("hello world");
var wins = 0;
var loses = 0;
var randomNumber = Math.floor(Math.random() * 120)+19; 
var redValue =  Math.floor(Math.random() * 12) + 1;  
var blueValue = Math.floor(Math.random() * 12) + 1;  
var yellowValue =  Math.floor(Math.random() * 12) + 1;  
var greenValue =  Math.floor(Math.random() * 12) + 1;  
var userScore= 0;

$(document).ready(function(){

		
// function to reset number for some of the variables	
	function resetValues() {
			
			 this.randomNumber = Math.floor(Math.random() * 120)+19;
			 $("#randomNumber").html(randomNumber);	
			 this.redValue = Math.floor(Math.random() * 12) + 1;; 
			 this.blueValue = Math.floor(Math.random() * 12) + 1;;  
			 this.yellowValue = Math.floor(Math.random() * 12) + 1;; 
			 this.greenValue =  Math.floor(Math.random() * 12) + 1;; 
			 this.userScore = 0; 
			 $("#sampleWords").html(userScore);
		
	}
// checks and compares varible values
	function checkNumber(){
			if(userScore === randomNumber){
				wins++;
				
				$("#wins").html(wins);
				resetValues();
			}
			else if (userScore > randomNumber){
				alert("you lost");
				loses++;
				$("#loses").html(loses);
				resetValues();	
			}
		}
	// plays the game.
	function myFunction(){
	    $("#randomNumber").html(randomNumber);
	  
		   $("#rc").on("click",function(){
		   		userScore += (redValue);
		   		$("#sampleWords").html(userScore);
		   		checkNumber();
		   	});
		    $("#bc").on("click",function(){
		   		userScore += (blueValue);
		   		$("#sampleWords").html(userScore);
		   		checkNumber();
		   	});

		   	 $("#yc").on("click",function(){
		   		userScore +=(yellowValue);
		   		$("#sampleWords").html(userScore);
		   		checkNumber();
		   	});

		   	  $("#gc").on("click",function(){
		   		userScore +=(greenValue);
		   		$("#sampleWords").html(userScore);
		   		checkNumber();
		   	});
		   	
		}
		myFunction();
		
		
	


});