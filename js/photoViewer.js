(function ($) {
    $.fn.customPhotoViewer = function () {
        // Function to open the modal and display the full-sized image
        function openModal(thumbnail) {
            const modal = $('#box-container');
            const modalImage = $('#modal-image');

            const fullImageSrc = thumbnail.attr('href');

            // Set the href of a.photo-box to the clicked thumbnail's href
            $('a.photo-box').attr('href', fullImageSrc);

            modalImage.attr('src', fullImageSrc);

            modal.show();
        }

        // Bind a click event to the thumbnails for opening the modal
        this.on('click', '.thumbnail-anchor', function (e) {
            e.preventDefault(); // Prevent the default link behavior

            const clickedThumbnail = $(this);
            openModal(clickedThumbnail);
        });

        // Function to close the modal
        function closeModal() {
            $('#box-container').hide();
        }

        // Bind a click event to the close button for closing the modal
        $('#close').on('click', function () {
            closeModal();
        });

        return this; // Enable method chaining
    };
})(jQuery);
