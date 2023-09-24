$(document).ready(function () {
    // Attach click event handlers to the links
    $('#prospect').click(function () {
        loadContent('prospect.html');
    });

    $('#convert').click(function () {
        loadContent('convert.html');
    });

    $('#retain').click(function () {
        loadContent('retain.html');
    });

    function loadContent(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var content = $('#content')[0]; // Get the DOM element
                content.style.opacity = 0;
                setTimeout(function () {
                    content.innerHTML = xhr.responseText;
                    content.style.opacity = 1;
                }, 400);
            } else {
                console.log('Error loading content.');
            }
        };

        xhr.send();
    }
});
