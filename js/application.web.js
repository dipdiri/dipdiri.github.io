$('.cropme').simpleCropper();

var $container = $('#container');
$container.imagesLoaded( function() {
    $container.masonry({
	  	itemSelector: '.item',
		isFitWidth: true,
		stamp: '.stamp'
	});
});
