(function($){

/*	var defaults = $.extend({
		//Default content
		title: 'Hola',
		content: 'Esto es una prueba'
	},modalContent);*/

	$.modalPlugin = function(){
		//First we declare the elements that will form the modal window
			this.$modalOverlay = $('<div></div>');
			this.$modalWindow = $('<div></div>');
			this.$modalCloseBtn = $('<a></a>');
			this.$modalCloseBtnImg = $('<i></i>');
			this.$modalTitle = $('<h2></h2>');
			this.$modalContent = $('<p></p>');
			this.$body = $('body');			
	};

	$.modalPlugin.prototype.assemble = function(){
		this.$modalCloseBtnImg.addClass('fa fa-times-circle-o').attr('aria-hidden','true').appendTo(this.$modalCloseBtn);
		this.$modalCloseBtn.attr('href','#');
		this.$modalCloseBtn.appendTo(this.$modalWindow);
		this.$modalTitle.appendTo(this.$modalWindow);
		this.$modalContent.appendTo(this.$modalWindow);
		this.$modalWindow.addClass('popUpWindow');
		this.$modalWindow.appendTo(this.$modalOverlay);
		this.$modalOverlay.addClass('popUpContainer');
	};

	$.modalPlugin.prototype.close = function(){
		var overlay = this.$modalOverlay;
		var objectOwner = this;

		//We add an event listener to the modal closing button
		this.$modalCloseBtn.on('click',function(e){
			e.preventDefault();
			overlay.remove();
			objectOwner.scroll();
		});			
	};

	$.modalPlugin.prototype.escKeyListener = function(){
		var overlay = this.$modalOverlay;
		var body = this.$body;
		var objectOwner = this;

		//Listener event for escape key
		$(document).keyup(function(e) {
		if (e.keyCode == 27) { 

				//We are only going to remove the modal if it exists on the DOM
				if (body.find(overlay).length>0) {
					console.log(overlay);
					console.log(body.find(overlay));
					overlay.remove();
					objectOwner.scroll();
				}
			}
		});			
	};

	$.modalPlugin.prototype.scroll = function(){
		this.$body.toggleClass('no-scroll');
	};

	$.modalPlugin.prototype.open = function(){
		this.assemble();
		this.scroll();
		this.$modalOverlay.appendTo($('body'));
		this.close();
		this.escKeyListener();
	};

	$.fn.modalPlugin = function(){
			
			var lightbox = new $.modalPlugin();
			console.log(lightbox);
			this.off('click').click(function(e){
				e.preventDefault();
				lightbox.open();
			});
		return this;							
	};

}(jQuery));
