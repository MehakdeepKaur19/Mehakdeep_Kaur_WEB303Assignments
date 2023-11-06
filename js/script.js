$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        
        // Open the modal when a thumbnail is clicked
        openModal($content);
    });
    
    // Close the modal when the "Close" element is clicked
    $('#close').on('click', function () {
        closeModal();
    });
    
    // Photo viewer functionality
    $('.photo-box').on({
        mouseover: function () {
            $(this).css({
                'cursor': 'pointer',
                'border-color': 'red'
            });
        },
        mouseout: function () {
            $(this).css({
                'cursor': 'default',
                'border-color': 'grey'
            });
        },
        click: function () {
            var imgURL = $(this).attr('href');
            openModal($('<img src="' + imgURL + '" alt="Full-Sized Image" />'));
        }
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
});
