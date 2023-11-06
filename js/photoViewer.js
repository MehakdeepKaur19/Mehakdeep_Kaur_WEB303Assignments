(function($) {
    // Define the jQuery plugin function
    $.fn.photoViewer = function() {
      this.each(function() {
        let $photoViewer = $(this);
        let $mainImage = $photoViewer.find('.');
        let $thumbnails = $photoViewer.find('.thumbnail-anchor');
  
        // Add a border to the main image
        $mainImage.css('border' , '2px solid red');
  
        // Add border to active thumbnail
        $thumbnails.filter('.active').css('border' , '2px solid blue');
  
        // Handle click on a thumbnail
        $thumbnails.click(function() {
          let imgURL = $(this).attr('href');
          $mainImage.fadeOut(100, function() {
            $mainImage.attr('src', imgURL);
          }).fadeIn(100);
  
          // Remove border from previously active thumbnail
          $thumbnails.removeClass('thumbnail-anchor active');
  
          // Add border to the clicked thumbnail
          $(this).addClass('thumbnail-anchor active');
        });
  
        // // Add click event for displaying the modal
        // $mainImage.click(function() {
        //   var $clonedImage = $mainImage.clone();
        //   var $modal = $('<div class="modal"></div>').appendTo('body');
        //   var $modalContent = $('<div class="modal-content"></div>').appendTo($modal);
  
        //   // Set modal dimensions and content
        //   $modal.css({
        //     width: settings.modalWidth + 'px',
        //     height: settings.modalHeight + 'px',
        //   });
        //   $modalContent.append($clonedImage);
  
        //   // Add a heading and close button
        //   var $modalHeader = $('<div class="modal-header">' + $('h1').text() + '</div>').appendTo($modal);
        //   var $closeButton = $('<span id="close" class="close-button">Close</span>').appendTo($modalHeader);
  
        //   // Handle click on the close button
        //   $closeButton.click(function() {
        //     $modal.remove();
        //   });
        });
  
      // Make the plugin chainable
      return this;
    };
  })(jQuery);
  