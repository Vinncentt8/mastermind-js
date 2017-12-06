var color = ["red", "green", "blue", "yellow","purple", "orange"];
var frame = document.getElementById("frame");
var answer = [];
var row = 12;
var max_column = 4;
var countBtn = 1;
var countRow = 1;
var guess = [];
var current_row = 12;


for(var current_row = 12; current_row >= 1; current_row--){
	var new_row = document.createElement('div');
	new_row.className = "row row_" + current_row;
	for(var current_column = 1; current_column <= max_column; current_column++){
		var new_btn =document.createElement('div');
		new_btn.className = "btn";
		new_btn.id = "btn_" + current_row + "_" + current_column;
		new_row.appendChild(new_btn);
	}
	render.appendChild(new_row);
}

mastermind();
	//for(i=0; i<answer.length; i++){
		//console.log(i + "=" + color[answer[i]]);
		//console.log("----");
	//}

function addcolor(colorIndex){
	var kleur = color[colorIndex];
	document.getElementById('btn_' + countRow + '_' + countBtn).style.backgroundColor = kleur;
	guess[countBtn-1] = colorIndex;
	countBtn++;
	if(countBtn == 5){
	    elements = document.getElementsByClassName("vakje");
	    for (var i = 0; i < elements.length; i++) {
	    	//console.log("vak " + i + " zilver gemaakt.");
	        elements[i].style.backgroundColor="silver";
	    }
		checkGuesses: for(i=0;i<guess.length;i++){
		    checkAnswer: for(j=0;j<answer.length;j++){
		    	if(guess[i] == answer[j]){//kleur
		    		//console.log(guess[i] + " staat op plek " + i);
		    		if(i==j){ // kijk of de plek index (I en index J) in de lijst gelijk is
						//console.log(guess[i] + " is gelijk aan "+answer[j]);
						document.getElementById("optelbol_" + (i+1)).style.backgroundColor =  'black';
						//console.log("optelbol_" + (i+1) + " zwart gemaakt");
						break checkAnswer;//we willwen hier uit de binnenste for loop breken.
		    		}
		    		else{
						//console.log(guess[i] + " staat niet op dezelfde plek als het antwoord: "+answer[j]);
						document.getElementById("optelbol_" + (i+1)).style.backgroundColor =  'white';
						//console.log("optelbol_" + (i+1) + " wit gemaakt");

					}
		    	}
    	    }		
    	}
		countBtn = 1;
		countRow++;
	}	
}

function mastermind(){
	console.log(mastermind);
	for(var i = 0; i < 4; i++)
	{
		var colorNum = Math.round(Math.random() * 5);
		answer [i] = colorNum;
	}
}