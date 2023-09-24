// WEB303 Assignment 2
$(document).ready(function () {
    // Attach click event handlers to the links
    $('#prospect').load('prospect.html');
    });

    $('#convert').click(function () {
        loadContent('convert.html');
    });

    $('#retain').click(function () {
        loadContent('retain.html');
    });
    function loadContent(url) {
        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                // Hide content with fade-out animation
                $('#content').fadeOut(400, function () {
                    // Replace the content of #content with the loaded HTML
                    $(this).html(data);

                    // Show the content with fade-in animation
                    $(this).fadeIn(400);
                });
            },
            error: function () {
                console.log('Error loading content.');
            }
        });
    }
