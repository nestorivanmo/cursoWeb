function cambiar(){
	var texto = document.getElementById("textoInsertado").value;
	var node = document.createElement("LI");
	var textnode = document.createTextNode(texto);
	node.appendChild(textnode);
	document.getElementById("miUL").appendChild(node);
	document.getElementById("textoInsertado").value = "";
}