(function($) {
    $.fn.photoViewer = function() {
        this.each(function() {
            let $photoViewer = $(this);
            let $mainImage = $photoViewer.find('.photo-box');
            let $thumbnails = $photoViewer.find('.thumbnail-anchor');

            // Handle click on a thumbnail
            $thumbnails.on({
                mouseover: function(){
                    $(this).css({
                        'cursor': 'pointer',
                        'border-color': 'red'
                    });
                },
                mouseout: function(){
                    $(this).css({
                        'cursor': 'default',
                        'border-color': 'grey'
                    });
                },
                click: function(){
                    let imgURL = $(this).attr('href');
                    $mainImage.attr('href', imgURL); // Set the href attribute to the clicked thumbnail's href
                    $mainImage.find('img').fadeOut(100, function() {
                        $mainImage.find('img').attr('src', imgURL).fadeIn(100);
                    });

                    // Remove the "active" class from other thumbnails
                    $thumbnails.removeClass('active');

                    // Add the "active" class to the clicked thumbnail
                    $(this).addClass('active');
                }
            });
        });

        return this;
    };
})(jQuery);
