function calcularTotal() {
	var qtd = parseInt(document.getElementById("cQtd").value);
	total = qtd * 1500;
	document.getElementById("cPreco").value = total;
}