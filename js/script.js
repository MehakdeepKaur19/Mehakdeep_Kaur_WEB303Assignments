$(document).ready(function() {
    // Accordion functionality
    $('.accordion-label').click(function() {
        var accordion = $(this).closest('.accordion');
        accordion.find('.accordion-content').not($(this).next()).slideUp('fast');
        $(this).next().slideToggle('fast');
    });

    // Tabbed section functionality
    $('.tab').click(function() {
        var tabId = $(this).data('tab');
        $('.tab-content').hide();
        $('#' + tabId).show();
    });
});
