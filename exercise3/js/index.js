//CONTACT FORM VALIDATIONS
function validateContactForm(){
	var contactFormInputName = document.getElementById("input-name"),
		contactFormInputEmail = document.getElementById("input-email"),
		contactFormInputMessage = document.getElementById("input-message");

	//VALIDATE IF THE NAME FIELD IS EMPTY
	if (contactFormInputName.value.length==0){
		sweetAlert("Please provide your name.");
		contactFormInputName.focus();
		return false;
	}
	//VALIDATE IF THE EMAIL FIELD IS EMPTY
	if (contactFormInputEmail.value.length==0){
		sweetAlert("Please provide your Email.");
		contactFormInputEmail.focus();
		return false;
	}	

	//VALIDATE IF A VALID EMAIL WAS PROVIDED
	var emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (!emailPattern.test(contactFormInputEmail.value)){
		sweetAlert("Please provide a valid email address");
		contactFormInputEmail.focus();
		return false;
	}
	//VALIDATE IF THE MESSAGE FIELD IS EMPTY
	if (contactFormInputMessage.value.length==0){
		sweetAlert("Please provide a Message.");
		contactFormInputMessage.focus();
		return false;
	}
} //VALIDATE CONTACT FORM

//CHANGE SELECTED ITEM
function changeSelected(e) {
	var galleryButtons = document.getElementsByClassName("btn-work-type"),
		galleryElements = document.getElementsByClassName("gallery-element"),
		clickedButton = e.target;

	for (var i = 0; i <= galleryButtons.length-1; i++) {
		galleryButtons[i].classList.remove("selected");
	}
	e.target.classList.add("selected");

	//HIDE GALLERY ELEMENTS
	for (var i = 0 ; i <= galleryElements.length-1; i++) {
		if (e.target.id !== "photography-btn") {
			galleryElements[i].classList.add("display-hidden");
		} else {
			galleryElements[i].classList.remove("display-hidden");
		}
	}
	//hide gallery elements gradually
	// for (var i = 0; i <= galleryElements.length-1; i++) {
	// 	if (e.target.id !== "photography-btn") {
	// 		for (var ii = 1; ii <= 10; ii++) {
	// 			var op= 1-parseFloat('0.'+ii);
	// 			if (ii==10){
	// 				op = 0;
	// 			}
	// 			galleryElements[i].style.opacity = op;
	// 		}
	// 	} else {
	// 		//galleryElements[i].classList.remove("display-hidden");
	// 	}
	// }
}

//SCROLL DOWN HEADER
var scrollDownHeader = function(){
	var scrollHeaderButton = document.getElementById("header-scroll-btn"),
		headerContainer = document.getElementById("prueba");

		headerContainer.classList.toggle("scrolled");
		scrollHeaderButton.classList.toggle("scrolled");
}

//MODAL WINDOW OBJECT
function modalWindow () {
	this.popUpContainer = document.createElement("div");
	this.popUpContainer.className="popUpContainer";
	this.popUpWindow = document.createElement("div");
	this.popUpWindow.className="popUpWindow";
	this.closeButton = document.createElement("a");
	this.closeButton.href = "#";
	this.closeButtonImage = document.createElement("i");
	this.closeButtonImage.className="fa fa-times-circle-o";
	this.closeButtonImage.setAttribute("aria-hidden","true");
	this.titleTag = document.createElement("h2");
	this.contentTag = document.createElement("p");

	//ASSEMBLE THE MODAL WINDOW
	this.popUpWindow.appendChild(this.closeButton).appendChild(this.closeButtonImage);
	this.popUpWindow.appendChild(this.titleTag);
	this.popUpWindow.appendChild(this.contentTag);
	this.popUpContainer.appendChild(this.popUpWindow);
};

modalWindow.prototype.openWindow = function(settings) {	
	//EVALUATE PARAMETERS	
	if (settings.title && settings.title.length > 0) {
		this.titleTagText = document.createTextNode(settings.title);
	} else {
		this.titleTagText = document.createTextNode("");
	}

	if (settings.content && settings.content.length > 0) {
		this.contentTagText = document.createTextNode(settings.content);
	} else {
		this.contentTagText = document.createTextNode("");
	}

	if (settings.width && settings.width > 0) {
		this.popUpWindow.style.height = settings.height + 'px';
	}

	if (settings.height && settings.height > 0) {
		this.popUpWindow.style.width = settings.width + 'px';	
	} 

	this.titleTag.appendChild(this.titleTagText);
	this.contentTag.appendChild(this.contentTagText);

	//APPENDS MODAL WINDOW INTO THE BODY
	document.body.appendChild(this.popUpContainer);
	this.closeWindow();
};

modalWindow.prototype.closeWindow = function() {
	var modalWindow = this.popUpContainer;

	//CREATES CLOSING EVENT
	this.closeButton.addEventListener("click",function(e){
		e.preventDefault();
		modalWindow.remove();
	},false);

	// document.addEventListener("keydown",function(e){
	// 	e.preventDefault();
	// 	var key = e.keyCode;
	// 	console.log(key);
	// 	if (key===27 && document.contains(modalWindow)) {
	// 		modalWindow.remove();
	// 	}
	// },false);
};

//LISTENER FOR HEADER SCROLL BUTTON
var headerScrollButton = document.getElementById("header-scroll-btn");

headerScrollButton.addEventListener('click',scrollDownHeader,false);

//LISTENER FOR LASTEST WORK GALLERIES
var galleryButtonContainer = document.getElementById("btn-work-type-container");

galleryButtonContainer.addEventListener('click',changeSelected,false);

//LISTENER FOR CONTACT BUTTON
var contactForm = document.getElementById("contact-us-form");

contactForm.addEventListener("submit",function(e){
	validateContactForm();
},false);

//LISTENER FOR POPUP TEST BUTTON
var popUpbtn = document.getElementById("pruebaPopUp");
var popUpbtn2 = document.getElementById("pruebaPopUp2");
var popUpbtn3 = document.getElementById("pruebaPopUp3");

popUpbtn.addEventListener("click",function(e){
	e.preventDefault();
	var infoPopUp = new modalWindow();

	infoPopUp.openWindow({title: "Lorem ipsum",
						content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
						width: 400,
						height: 800});
},false);

popUpbtn2.addEventListener("click",function(e){
	e.preventDefault();
	var infoPopUp2= new modalWindow();

	infoPopUp2.openWindow({title: "Lorem ipsum",
						content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
						width: 300,
						height: 600});
},false);

popUpbtn3.addEventListener("click",function(e){
	e.preventDefault();
	var infoPopUp3 = new modalWindow();

	infoPopUp3.openWindow({title: "Lorem ipsum",
						content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
						width: 400,
						height: 500});
},false);

