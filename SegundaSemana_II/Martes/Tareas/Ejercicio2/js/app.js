function iniciar(){
	var estilo = document.getElementById("textoEstilo").value;
	document.getElementById("estiloParaAplicar").style.color = estilo;
	document.getElementById("textoEstilo").value = "";
}