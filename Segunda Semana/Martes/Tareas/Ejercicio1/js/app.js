function adivinar(){
	var j2 = document.getElementById("j2").value;
	var j1 = Math.floor((Math.random() * 3)+1);
	
	if(j2 == 1){
		if(j1 == 1){
			alert("Empate");
		}
		else if(j1 == 2){
			alert("Perdiste");
		}else{
			alert("Ganaste");
		}
	}else if(j2 == 2){
		if(j1 == 1){
			alert("Ganaste");
		}
		else if(j1 == 2){
			alert("Empate");
		}else{
			alert("Perdiste");
		}
	}else{
		if(j1 == 1){
			alert("Perdiste");
		}
		else if(j1 == 2){
			alert("Ganaste");
		}else{
			alert("Empate");
		}
	}
}