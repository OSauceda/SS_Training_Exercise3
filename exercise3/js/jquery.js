function modalWindow(){

	//First we declare the elements that will form the modal window
	this.$modalOverlay = $('<div></div>');
	this.$modalWindow = $('<div></div>');
	this.$modalCloseBtn = $('<a></a>');
	this.$modalCloseBtnImg = $('<i></i>');
	this.$modalTitle = $('<h2></h2>');
	this.$modalContent = $('<p></p>');
};

modalWindow.prototype.assemble = function(){

	//Here we assemble the modal window
	//We need to assign classes to each element of the modal window
	//And then we append each element to its respective parent
	this.$modalCloseBtnImg.addClass('fa fa-times-circle-o').attr('aria-hidden','true').appendTo(this.$modalCloseBtn);
	this.$modalCloseBtn.attr('href','#');
	this.$modalCloseBtn.appendTo(this.$modalWindow);
	this.$modalTitle.appendTo(this.$modalWindow);
	this.$modalContent.appendTo(this.$modalWindow);
	this.$modalWindow.addClass('popUpWindow');
	this.$modalWindow.appendTo(this.$modalOverlay);
	this.$modalOverlay.addClass('popUpContainer');
};

modalWindow.prototype.open = function(modalContent){

	//First we validate the parameters
	if (modalContent.title && modalContent.title.length > 0) {
		this.$modalTitle.html(modalContent.title);
	} else {
		this.$modalTitle.html('');
	}

	if (modalContent.content && modalContent.content.length > 0) {
		this.$modalContent.html(modalContent.content);
	} else {
		this.$modalContent.html('');
	}
	//First we call the assemble function 
	this.assemble();

	//Before inserting the modal window we need remove the body's scroll
	this.scroll();

	//Then we append the modal element to the body
	this.$modalOverlay.appendTo($('body'));

	//Then we create the event listener for the closing button
	this.close();
	this.escKeyListener();
};

modalWindow.prototype.close = function(){
	var overlay = this.$modalOverlay;
	var objectOwner = this;

	//We add an event listener to the modal closing button
	this.$modalCloseBtn.on('click',function(e){
		e.preventDefault();
		overlay.remove();
		objectOwner.scroll();
	});
};

modalWindow.prototype.escKeyListener = function(){
	var overlay = this.$modalOverlay;
	var objectOwner = this;
	var $body = $('body');

	//Listener event for escape key
	$(document).keyup(function(e) {
	if (e.keyCode == 27) { 

			//We are only going to remove the modal if it exists on the DOM
			if ($body.find(overlay).length>0) {
				console.log(overlay);
				console.log($body.find(overlay));
				overlay.remove();
				objectOwner.scroll();
			}
		}
	});	
};

modalWindow.prototype.scroll = function(){
	$body = $('body');

	$body.toggleClass('no-scroll');
}

$(document).ready(function(){

	//TOGGLES THE CLASS "SELECTED"
	$(".btn-work-type").on("click",function(){
		var btnWorkType = $(".btn-work-type")
		btnWorkType.removeClass("selected");
		$(this).addClass("selected");

		if ($(this).index()==btnWorkType[0]){
			$(".gallery-element").fadeIn(1000);
		} else {
			$(".gallery-element").fadeOut(1000);	
		}
	});//END TOGGLES THE CLASS "SELECTED"

	//CONTACT FORM VALIDATIONS
	$("#contact-us-form").on("submit",function(){
		var userName =$("#input-name"),
			userEmail=$("#input-email"),
			userMessage=$("#input-message"),
			emailRegEx=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

		//VALIDATION FOR EMPTY NAME
		if (userName.val().length==0){
			alert("Please provide a Name.");
			userName.focus();
			return false;
		}
		//VALIDATION FOR EMPTY EMAIL
		if (userEmail.val().length==0){
			alert("Please provide an Email.");
			userEmail.focus();
			return false;
		}	
		//VALIDATION FOR VALID EMAIL
		if (!emailRegEx.test(userEmail.val())) {
			alert("Please provide a valid Email.");
			userEmail.focus();
			return false;
		}
		//VALIDATION FOR EMPTY MESSAGE
		if (userMessage.val().length==0){
			alert("Please provide a Message.");
			userMessage.focus();
			return false;
		}
	}); //END OF CONTACT FORM VALIDATION

	//HEADER SCROLL BUTTON
	$(".btn-scroll").on("click",function(){
		$(this).toggleClass("scrolled");
		$("header").toggleClass("scrolled");
	});//HEADER SCROLL BUTTON

/*	$('#pruebaPopUp').on('click',function(e){
		e.preventDefault();
		var popUpTest = new modalWindow();

		popUpTest.open({
			title: 'Hola',
			content: 'Esto es una prueba.'
		});
	});*/
	$('.btn-learn-more').modalPlugin().css('color','blue');

});

