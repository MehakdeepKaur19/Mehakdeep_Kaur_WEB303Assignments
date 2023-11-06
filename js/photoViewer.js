$('.photo-thumbnails').on({
    mouseover: function(){
        $(this).css({
            'cursor':'pointer',
            'border-color':'red'
    });
    },
    mouseout:function(){
        $(this).css({
            'cursor':'default',
            'border-color':'grey'
        });
    },
    click:function(){
        let imgURL = $(this).attr('src');
        $('.thumbnail-anchor active').fadeOut(100,function(){
            $(this).attr('src', imgURL);
        }).fadeIn(100);
    }
});