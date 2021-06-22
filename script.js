document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 60;
necesarios = 35;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*590);
   randNum2 =  Math.round(Math.random()*1400);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 35) {
   	alert("ganaste");
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("Has Perdido");
		tiempo = 0;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);