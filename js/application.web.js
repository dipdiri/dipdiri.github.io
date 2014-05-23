$(function() {
	$('a').fullsizable({
		detach_id: 'container',
		navigation: true,
		closeButton: true,
		clickBehaviour: 'next'
	});
});

$('.cropme').simpleCropper();

var $contents = $('#contents');
$contents.imagesLoaded( function() {
    $contents.masonry({
	  	itemSelector: '.item',
		isFitWidth: true,
		stamp: '.stamp'
	});
});
