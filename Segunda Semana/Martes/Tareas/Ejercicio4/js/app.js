function create(){
	alert("af");
	var texto = document.getElementById("myText").value;
	var node = document.createElement("LI");
	var textnode = document.createTextNode(texto);
	node.appendChild(textnode);
	document.getElementById("miUL").appendChild(node);
	document.getElementById("myText").value = " ";
}

function deleteF(){
	var numDel = document.getElementById("myText2).value;
	var lista = document.getElementById("miUL");
	lista.removeChild(lista.childNodes[numDel]);
}

function update(){
	var texto = document.getElementById("myText3").value
	var node = document.createElement("LI");
	var textnode = document.createTextNode(texto);
	var item = document.getElementById("miUL").childNodes[1];
	item.replaceChild(textnode,item.childNodes[1]);
}
	