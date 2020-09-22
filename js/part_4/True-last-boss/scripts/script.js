// YOUR NAME HERE

// === constants ===
const MAX_QTY = 9;
const productIdKey = "product";
const achatIdKey = "achat";
const orderIdKey = "order";
const inputIdKey = "qte";

// === global variables  ===
// the total cost of selected products 
var total = 0;



// function called when page is loaded, it performs initializations 
var init = function () {
	createShop();
	createInterface();

	// TODO : add other initializations to achieve if you think it is required
}
window.addEventListener("load", init);



// usefull functions

/*
* create and add all the div.produit elements to the div#boutique element
* according to the product objects that exist in 'catalog' variable
*/
var createShop = function () {
	var shop = document.getElementById("boutique");
	for (var i = 0; i < catalog.length; i++) {
		shop.appendChild(createProduct(catalog[i], i));
	}
}

/*
* create the div.produit elment corresponding to the given product
* The created element receives the id "index-product" where index is replaced by param's value
* @param product (product object) = the product for which the element is created
* @param index (int) = the index of the product in catalog, used to set the id of the created element
*/
var createProduct = function (product, index) {
	// build the div element for product
	var block = document.createElement("div");
	block.className = "produit";
	// set the id for this product
	block.id = index + "-" + productIdKey;
	// build the h4 part of 'block'
	block.appendChild(createBlock("h4", product.name));
	//should add the figure of the product
	block.appendChild(createFigureBlock(product));
	// build and add the div.description part of 'block' 
	block.appendChild(createBlock("div", product.description, "description"));
	// build and add the div.price part of 'block'
	block.appendChild(createBlock("div", product.price, "prix"));
	// build and add control div block to product element
	block.appendChild(createOrderControlBlock(index));
	return block;
}


/* return a new element of tag 'tag' with content 'content' and class 'cssClass'
 * @param tag (string) = the type of the created element (example : "p")
 * @param content (string) = the html wontent of the created element (example : "bla bla")
 * @param cssClass (string) (optional) = the value of the 'class' attribute for the created element
 */
var createBlock = function (tag, content, cssClass) {
	var element = document.createElement(tag);
	if (cssClass != undefined) {
		element.className = cssClass;
	}
	element.innerHTML = content;
	return element;
}

/*
* builds the control element (div.controle) for a product
* @param index = the index of the considered product
*
* TODO : add the event handling, 
*   /!\  in this version button and input do nothing  /!\  
*/
var createOrderControlBlock = function (index) {
	var control = document.createElement("div");
	control.className = "controle";

	// create input quantity element
	var input = document.createElement("input");
	input.id = index + '-' + inputIdKey;
	input.type = "number";
	input.step = "1";
	input.value = "0";
	input.min = "0";
	input.max = MAX_QTY.toString();
	// add input to control as its child
	control.appendChild(input);

	// create order button
	var button = document.createElement("button");
	button.className = 'commander';
	button.id = index + "-" + orderIdKey;

	// stock index to select product on click
	button.i = index
	// add control to control as its child
	control.appendChild(button);

	// disable button and set opacity to .25 if input value <= 0
	if (input.value <= 0) {
		button.setAttribute("disabled", "")
		button.style.opacity = ".25"
	}

	// listen user input 
	input.addEventListener("input", function () {

		// disable button and set opacity to .25 if input value <= 0 again
		if (input.value <= 0) {
			button.setAttribute("disabled", "")
			button.style.opacity = ".25"
		}

		// remove disabled and set opacity to 1 if input value > 0
		else {
			button.removeAttribute("disabled")
			button.style.opacity = "1"
		}

		// Check if value is numeric
		if (!isNaN(parseFloat(input.value))) {

			// Set value to maximum if input is too high
			if (input.value > MAX_QTY) {
				input.value = MAX_QTY
			}

			// Set value to minimum if input is too low
			else if (input.value < input.min) {
				input.value = input.min
			}
		}

		// Set value to empty string if input isn't a number
		else {
			input.value = ""
		}
	})

	// the built control div node is returned
	return control;
}


/*
* create and return the figure block for this product
* see the static version of the project to know what the <figure> should be
* @param product (product object) = the product for which the figure block is created
*
* TODO : write the correct code
*/
var createFigureBlock = function (product) {
	var img = "<img src='" + product.image + "'>"
	return createBlock("figure", img);
}


var createInterface = function () {
	var achats = document.querySelector(".achats")
	
	var createAchatBlock = function (product, quantite, index) {
		// build the div element for achat
		var block = document.createElement("div");
		block.className = "achat";
		// set the id for this achat
		block.id = index + "-" + achatIdKey;
		//should add the figure of the achat
		block.appendChild(createFigureBlock(product));
		// build and add the h4 part of 'block' 
		block.appendChild(createBlock("h4", product.description));
		// build and add the div.quantite part of 'block'
		block.appendChild(createBlock("div", quantite, "quantite"));
		// build and add the div.price part of 'block'
		block.appendChild(createBlock("div", product.price, "prix"));
		// build and add a contole div
		var controle = document.createElement("div");
		block.appendChild(controle)
		// build and add the button.retirer part of 'controle'
		const trash = document.createElement("button")
		trash.className = "retirer"
		controle.appendChild(trash)

		trash.addEventListener("click", function () {
			block.parentElement.removeChild(block)
			updateTotal()
		})

		return block;
	}


	var command = document.querySelectorAll(".commander")
	for (btn of command) {
		btn.addEventListener("click", function(e) {
			let i = e.target.i
			let inputVal = parseInt(document.getElementById(i + "-qte").value)
			// create and add block.achat and make it impossible to add the same block twice
			const achat = document.getElementById(i + "-" + achatIdKey)
			if (achat == null) {
				achats.appendChild(createAchatBlock(catalog[i], inputVal, i))
			}
			// update block.achat if it already exist
			else {
				let curVal = parseInt(achat.querySelector(".quantite").textContent)
				curVal += inputVal
				if (curVal > MAX_QTY) {
					curVal = MAX_QTY
				}
				achat.querySelector(".quantite").textContent = curVal
			}
			updateTotal()
		})
	}

	const inputFilter = document.querySelector("#filter")
	inputFilter.value = ""
	inputFilter.addEventListener("keyup", function (){
		filter(inputFilter.value)
	})
}

function updateTotal() {
	const achats = document.querySelectorAll(".achat")
	total = 0
	for(achat of achats) {
		total += parseInt(achat.querySelector(".quantite").textContent) * parseInt(achat.querySelector(".prix").textContent)
	}
	document.querySelector("#montant").textContent = total
}

function filter(value) {
	const produits = document.querySelectorAll(".produit")
	for(produit of produits) {
		if (value != "") {
			produit.style.display = "none"
			if(produit.querySelector("h4").textContent.toLowerCase().includes(value.toLowerCase())) {
				produit.style.display = "inline-block"
			}
		} else {
			produit.style.display = "inline-block"
		}
	}	
}