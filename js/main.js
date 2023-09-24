$(document).ready(function () {
    var content = $("#content");
  
    function loadContent(url) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            content.fadeOut(400, function () {
              content.html(xhr.responseText);
              content.fadeIn(400);
            });
          } else {
            console.log("Error loading content.");
          }
        }
      };
  
      xhr.send();
    }
  
    // Attach click event handlers to the links
    $("#prospect").click(function () {
      loadContent("prospect.html");
    });
  
    $("#convert").click(function () {
      loadContent("convert.html");
    });
  
    $("#retain").click(function () {
      loadContent("retain.html");
    });
  });
  