$(function () {
    // Initialize the customPhotoViewer plugin and show it
    $('#photo-viewer').customPhotoViewer().show();

    // Bind a click event to '.photo-box' for opening the modal
    $('#photo-viewer').on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });

        // You can add modal code here
        // For example, open a modal using $content as the content
        openModal($content);
    });

    // Function to open the modal and display the content
    function openModal(content) {
        var modal = $('#box-container');
        var modalImage = $('#modal-image');
        modalImage.html(content);
        modal.show();
    }

    // Function to close the modal
    function closeModal() {
        $('#box-container').hide();
    }

    // Bind a click event to the close button for closing the modal
    $('#close').on('click', function () {
        closeModal();
    });
});
