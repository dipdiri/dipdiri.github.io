$(document).ready(function () {
    $("#four").nanoGallery();
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
