$(document).ready(function() {
    // Accordion functionality
    $('.accord-label').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $accordion = $this.next('.accord-panel');

        // Toggle the showing class and slide the panel
        $this.toggleClass('showing');
        $accordion.slideToggle();

        // Hide other panels
        $('.accord-panel').not($accordion).slideUp();
        $('.accord-label').not($this).removeClass('showing');
    });

    // Tabbed Section functionality
    $('.tab-panel').hide();
    $('#tab1').show();

    $('.tab-list li').on('click', function(e) {
        e.preventDefault();

        // Remove current active class
        $('.tab-list li').removeClass('active');

        // Hide current tab panel
        $('.tab-panel').hide();

        // Add active class to new tab
        $(this).addClass('active');

        // Show new tab panel
        var panel = $(this).find('a').attr('href');
        $(panel).show();
    });
});
