// DOM Manipulation

document.querySelector(".accordion-option-01").addEventListener("click", function() {
	document.querySelector(".accordion-input-01").classList.toggle("visible");
});

document.querySelector(".accordion-option-02").addEventListener("click", function() {
	document.querySelector(".accordion-input-02").classList.toggle("visible");
});

document.querySelector(".accordion-option-03").addEventListener("click", function() {
	document.querySelector(".accordion-input-03").classList.toggle("visible");
});

document.querySelector(".accordion-option-04").addEventListener("click", function() {
	document.querySelector(".accordion-input-04").classList.toggle("visible");
	report();
});

document.querySelector("#sbmt-01").addEventListener("click", function() {
	insert(
			document.querySelector("#id").value,
			document.querySelector("#nome").value,
			document.querySelector("#preco").value,
			document.querySelector("#estoque").value
          );
	document.querySelector("#id").value = "";
	document.querySelector("#nome").value = "";
	document.querySelector("#preco").value = "";
	document.querySelector("#estoque").value = "";
});

document.querySelector("#sbmt-02").addEventListener("click", function() {

});

document.querySelector("#sbmt-03").addEventListener("click", function() {

});

//Functions

var option;
var products = [];
var productInfo;
var productInfoObj = {};

function splitString(productInfo) {
	var initial = 0;
	var productInfoArray = [];
	for(var i = 0; i < productInfo.length; i++) {
		if(productInfo.charAt(i) === " ") {
			productInfoArray.push(productInfo.slice(initial, i));
			initial = i + 1;
		}
	}
	return productInfoArray;
}

function insert(id, nome, preco, estoque) {
	var obj = {
		codigo: id,
		nome: nome,
		preco: preco,
		estoque: estoque
	};

	products.push(obj);
	console.log(JSON.stringify(products, null, 4));
}

function report() {
	document.querySelector(".accordion-input-04").innerHTML = ""
	document.querySelector(".accordion-input-04").innerHTML = "Lista de Produtos <br> <br>"
	for(var i = 0; i < products.length; i++) {
		document.querySelector(".accordion-input-04").innerHTML += "  " + "Codigo: " + products[i].codigo + "    " + "<br>Nome: " + products[i].nome + "   " + "<br>   Preco: " + products[i].preco + "  " + "<br> Estoque: " + products[i].estoque + "<br> <br>";
	}
}

function searchId() {
	product_id = prompt("Informe o ID do produto que deseja comrpar");

	for (var i = products.length - 1; i >= 0; i--) {
		if (products[i].codigo === product_id) 
		{
			return products[i];				
		}
	}	
}

function buy(products) {
	quantity = prompt("Informe a quantidade");
	products.estoque = Number(products.estoque) + Number(quantity);
}

function sell(products) {
	quantity = prompt("Informe a quantidade");
	products.estoque = Number(products.estoque) - Number(quantity);
}

