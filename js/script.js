//Event Handler
$('.accord-label').on('click', function(e){
    e.preventDefault();

    let $this = $(this);
    $this.toggleClass('showing');
    $this.next().slideToggle();
});

//Tabbed Panels
$('.tab-panel').hide();
$('#tab1').show();

$('.tab-list li').on('click', function(e){
    e.preventDefault();
    
    $('.tab-list li').removeClass('active');
    $('.tab-panel').hide();
    
    $(this).addClass('active');
    
    let panel = $(this).find('a').attr('href');
    $(panel).show();
    return false;
});
