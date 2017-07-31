var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var loopCounter = 8;

var theColor ="";
var theReindeer="";

var writer = document.getElementById("reindeer").innerHTML;

for (var i = 0; i < loopCounter; i++){
	theColor = colors[i];
	theReindeer = reindeer[i];

var listItem = document.createElement("li");
var node = document.createTextNode(theColor + " " + theReindeer);
listItem.appendChild(node);
var position = document.getElementById("reindeer");
position.appendChild(listItem);


}