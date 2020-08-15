var frames = 1;
var intervalo = setInterval(function(){
	frames++;
	document.querySelector(".frame").src="IMG/"+frames+".png";
	if (frames == 26) {
		clearInterval(intervalo);
	}
}, 100);
