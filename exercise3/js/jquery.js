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
