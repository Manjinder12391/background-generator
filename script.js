var css= document.queryselector("h3");
var color1=document.queryseleector(".color1");
var color2 = document.queryselector(".color2");
var gradient=document.getelementbyid("gradient");
function SetGradient(){
	body.style.background:
	"linear-gradient(to right, "+color1.value+","+color2.vlaue+")";

	css.textcontent = gradient.value+";";
}

color1.addeventlistener("input",SetGradient);
color2.addeventlistener("input",SetGradient);
