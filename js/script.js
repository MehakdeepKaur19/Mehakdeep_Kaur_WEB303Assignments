$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
        $('.photo-box').on('click', function (e) {
            e.preventDefault(); // Prevent the default link behavior
            openModal();
        });
        function closeModal() {
            $('#modal').hide();
        }
        $('.modal-close').on('click', closeModal);

    });
});
