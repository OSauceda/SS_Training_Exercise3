function clearSearchBox(a) {
	var elSearchBox = document.getElementById("search-box");
	switch (a){
		case "clearOnFocus":
			if (elSearchBox.value=="Search.."){
				elSearchBox.value="";
			}
			break;
		case "resetOnBlur":
			if (elSearchBox.value.length==0){
				elSearchBox.value="Search...";
			}
			break;
		}
}

function validateEmptyInputFields(element,event) {
	switch (event){
		case "resetOnBlur":
			switch(element){
				case "inputName":
					var element = document.getElementById("input-name");
					if (element.value.length==0){
						element.value="Your Name..";
					}
					break;
				case "inputEmail":
					var element = document.getElementById("input-email");
					if (element.value.length==0){
						element.value="Your Email..";
					}
					break;
				case "inputMessage":
					var element = document.getElementById("input-message");
					if (element.value.length==0){
						element.value="Your Message..";
					}
					break;
			}// switch element
			break;
		case "clearOnFocus":
			switch(element){
				case "inputName":
					var element = document.getElementById("input-name");
					if (element.value=="Your Name.."){
						element.value="";
					}
					break;
				case "inputEmail":
					var element = document.getElementById("input-email");
					if (element.value=="Your Email.."){
						element.value="";
					}
					break;
				case "inputMessage":
					var element = document.getElementById("input-message");
					if (element.value=="Your Message.."){
						element.value="";
					}
					break;
			} //switch element
			break;
	} //switch event

} //validateEmptyInputFields



var searchBox = document.getElementById("search-box");

//Listeners for search box
searchBox.addEventListener('blur',function(){
	clearSearchBox('resetOnBlur');
},false);

searchBox.addEventListener('focus',function(){
	clearSearchBox('clearOnFocus');
},false);

//Listeners for contact form
var inputName = document.getElementById("input-name");
var inputEmail = document.getElementById("input-email");
var inputMessage = document.getElementById("input-message");

inputName.addEventListener('focus',function(){
	validateEmptyInputFields('inputName','clearOnFocus');
},false);

inputName.addEventListener('blur',function(){
	validateEmptyInputFields('inputName','resetOnBlur');
},false);

inputEmail.addEventListener('focus',function(){
	validateEmptyInputFields('inputEmail','clearOnFocus');
},false);

inputEmail.addEventListener('blur',function(){
	validateEmptyInputFields('inputEmail','resetOnBlur');
},false);

inputMessage.addEventListener('focus',function(){
	validateEmptyInputFields('inputMessage','clearOnFocus');
},false);

inputMessage.addEventListener('blur',function(){
	validateEmptyInputFields('inputMessage','resetOnBlur');
},false);
