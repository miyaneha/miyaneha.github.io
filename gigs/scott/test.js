alert("test!!");

var mh = document.getElementById("mainHeading");

var newh = document.createElement("h2");
var htext = document.createTextNode("Dynamically Added!");
newh.appendChild(htext);

mh.appendChild(newh);
