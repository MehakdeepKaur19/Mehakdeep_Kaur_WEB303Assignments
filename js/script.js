//Event Handler
$('.accord-label1').on('click', function(e){
    e.preventDefault();

    let $this = $(this);
    $('.accord-panel').each(function(){
        //make sure that showing class is removed - no panel is removed
        $this.removeClass('showing');
    })

    // show the panel that is for the button we clicked
    $this.toggleClass('showing');
    $this.next().slideToggle();

    // hide other panels
    $('.accord-panel').not($this.next()).slideUp();
});
$('.accord-label2').on('click', function(e){
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
