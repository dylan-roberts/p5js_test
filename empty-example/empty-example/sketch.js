var data;

function preload(){
	data = loadStrings("https://raw.githubusercontent.com/fivethirtyeight/data/master/most-common-name/new-top-firstNames.csv");
}

function setup() {
	createCanvas(600,600);
}

function draw() {
	background(0);
}

function mouseClicked() {
	convert();
	console.log(data);
}

function convert(){
	for(var i = 0; i < data.length; i++){
		data[i] = data[i].substring(0,data[i].indexOf(".")-1) + int(data[i].substring(data[i].indexOf(".")-1)*316497531) + " people";
	}
	data[0]="";
}

	


