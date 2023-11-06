$(function () {
    $('#photo-viewer').show().on('click', '.photo-box', function x(e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        // Get the modal
        var modal = $("#myModal");



        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var modalImg = $("#img");
        $('.photo-box').on('click', function (e) {
            $(modal).show()
            $(modalImg).attr('src', $('.active').children('.myImg').map(function () {
                return $(this).attr('src')
            }).get());
        })


        // When the user clicks on <span> (x), close the modal
        $('#close').on('click', function (e) {
            e.preventDefault();
            $('#photo-viewer').hide();
        });

    });
});

