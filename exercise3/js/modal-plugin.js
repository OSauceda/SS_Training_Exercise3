(function($){

	var modalPlugin = function(){

		this.$modalOverlay = $('<div></div>');
		this.$modalWindow = $('<div></div>');
		this.$modalCloseBtn = $('<a></a>');
		this.$modalCloseBtnImg = $('<i></i>');
		this.$modalTitle = $('<h2></h2>');
		this.$modalContent = '';
		this.$body = $('body');	

	};

	modalPlugin.prototype.assemble = function(){

		this.$modalCloseBtnImg.addClass('fa fa-times-circle-o').attr('aria-hidden','true').appendTo(this.$modalCloseBtn);
		this.$modalCloseBtn.attr('href','#');
		this.$modalCloseBtn.appendTo(this.$modalWindow);
		this.$modalTitle.appendTo(this.$modalWindow);
		this.$modalContent.appendTo(this.$modalWindow);
		this.$modalWindow.addClass('popUpWindow');
		this.$modalWindow.appendTo(this.$modalOverlay);
		this.$modalOverlay.addClass('popUpContainer');
	};

	modalPlugin.prototype.close = function(){

		var overlay = this.$modalOverlay;
		var self = this;

		//We add an event listener to the modal closing button
		this.$modalCloseBtn.on('click',function(e){

			e.preventDefault();
			overlay.remove();
			self.scroll();
		});	

	};

	modalPlugin.prototype.escKeyListener = function(){

		var overlay = this.$modalOverlay;
		var body = this.$body;
		var self = this;

		//Listener event for escape key
		$(document).keyup(function(e) {

			if (e.keyCode == 27) { 

				//We are only going to remove the modal if it exists on the DOM
				if (body.find(overlay).length>0) {
					overlay.remove();
					self.scroll();
				}
			}
		});			
	};

	modalPlugin.prototype.scroll = function(){

		this.$body.toggleClass('no-scroll');

	};

	modalPlugin.prototype.open = function(param){

		if (param.title && param.title.length > 0) {
			this.$modalTitle.html(param.title);
		} else {
			this.$modalTitle.html('');
		}

		if (param.content && param.content.length > 0) {
			this.$modalContent=$(param.content);
		} else {
			this.$modalContent='';
		}			

		this.assemble();
		this.scroll();
		this.$modalOverlay.appendTo($('body'));
		this.close();
		this.escKeyListener();

	};

	$.fn.modalPlugin = function(modalContent){

		var modalContent = $.extend({
			//Default content
			title: 'Hola',
			content: 'Esto es una prueba'
		},modalContent);		
			
		var lightbox = new modalPlugin();

		this.off('click').click(function(e){

			e.preventDefault();
			lightbox.open(modalContent);
		});

		return this;							
	};

}(jQuery));
