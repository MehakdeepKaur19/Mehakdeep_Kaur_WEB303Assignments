$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
       $('#close').on('click',function(){
           $('#box-container').hide();
       });
       $('#photo-box').on({
        mouseover: function() {
            $(this).css({
                'cursor': 'pointer',
                'border-color': 'red'
            });
        },
        mouseout: function() {
            $(this).css({
                'cursor': 'default',
                'border-color': 'grey'
            });
        },
        click: function() {
            let imgURL = $(this).attr('href'); // Get the href of the clicked thumbnail
            $('#modal-image').fadeOut(100, function() {
                $(this).attr('src', imgURL); // Update the src attribute with the clicked thumbnail's href
            }).fadeIn(100);
        }
    });
    });
});
