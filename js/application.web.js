$('.cropme').simpleCropper();

var $contents = $('#contents');
$contents.imagesLoaded( function() {
    $contents.masonry({
	  	itemSelector: '.item',
		isFitWidth: true,
		stamp: '.stamp'
	});
});
