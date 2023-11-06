$(function () {
    // Initialize the photo viewer
    $('#photo-viewer').photoViewer();

    $('#photo-viewer').on('click', '.photo-box', function (e) {
        e.preventDefault();
        openModal();
    });

    function openModal() {
        var $modal = $('<div id="modal" class="modal"></div>');
        var $modalContent = $('<div class="modal-content"></div>');
        var $clonedImage = $('#photo-viewer .photo-box').clone();
        var $closeButton = $('<span class="modal-close close-button">Close</span>');

        $modalContent.append($clonedImage);
        $modalContent.append($closeButton);
        $modal.append($modalContent);

        // Add a heading with your gallery name
        var $heading = $('<div class="modal-header">' + $('h1').text() + '</div>');
        $modalContent.prepend($heading);

        $modal.appendTo('body');
    }

    $(document).on('click', '.modal-close', function() {
        closeModal();
    });

    function closeModal() {
        $('#modal').remove();
    }
});
