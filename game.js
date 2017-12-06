var colorlist = ["red", "green", "blue", "yellow","pink", "orange"];
var answer = [];
var row = 12;
var max_column = 4;

var current_row = 1;

for(var current_row = 1; current_row <= row; current_row++){
	var new_row = document.createElement('div');
	new_row.classname = "row row_" + current_row;
	for(var current_column = 1; current_column <= max_column; current_column++){
		var new_btn =document.createElement('btn');
		new_btn.id = "btn_" + current_row + "_" + current_column;
		new_row.appendchild(new_btn);
	}
	frame.appendchild(new_row);
}



function mastermind(event){
	console.log(mastermind);
	document.getElementById('tafel').src = 'img/tafel.jpg';
	for(var i = 0; i < 4; i++)
	{
		var colorNum = Math.round(Math.random() * 5);
		answer [i] = colorNum;

		


	}
}

startlevel();