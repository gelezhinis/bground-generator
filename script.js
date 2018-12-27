var css = document.querySelector("h3");
var clr1 = document.querySelector(".color1");
var clr2 = document.querySelector(".color2");
var clr3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var btn = document.getElementById("rndm");

// console.log(body);
// console.log(css);
// console.log(clr1);
// console.log(clr2);  //patikrinam ar teisingai parinkom "querySelector", "getElement"

// body.style.background = "black";   //galim pakeisti background spalva per js

function rndmColor() {
    var colora = '#'+('00000'+(Math.random()*(1<<25)).toString(16)).substr(-6);
    var colorb = '#'+('00000'+(Math.random()*(1<<25)).toString(16)).substr(-6);
    var colorc = '#'+('00000'+(Math.random()*(1<<25)).toString(16)).substr(-6);
    body.style.background = 
	"radial-gradient(" 
	+ colora 
	+ ", " 
	+ colorb
	+ ", "
	+ colorc 
	+ ")";
	css.textContent = body.style.background + ";";
}

btn.addEventListener("click", rndmColor);

function clrPick() {
	body.style.background = 
	"radial-gradient(" 
	+ clr1.value 
	+ ", " 
	+ clr2.value 
	+ ", " 
	+ clr3.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

clr1.addEventListener("input", clrPick);
clr2.addEventListener("input", clrPick);
clr3.addEventListener("input", clrPick);




