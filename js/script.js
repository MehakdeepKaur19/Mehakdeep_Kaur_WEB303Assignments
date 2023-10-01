$(document).ready(function(){
        //json();
            ajax();
    });
function json(){
    $.getJSON("team.json",function(data){
        $.each(data.members, function(index,obj){
        $("#team").append("<h2>"+obj.name+"</h2>");
        $("#team").append("<h5>"+obj.position+"</h5>");
        $("#team").append("<p>"+obj.bio+"</p>");
    }); 
    });
}
function ajax(){
    $.ajax({
        type: "GET",
        url: "team.json",
        dataType: "json",
        beforeSend:function(){
            $("#team").text('Loading....');
        },
        error: function() {
            $('#team').text('Error: Content could not be retrieved');
        },
        success: function(response) {
            console.log(response);
            $.each(response.members, function(index,obj){
                $("#team").append("<h2>"+obj.name+"</h2>");
                $("#team").append("<h5>"+obj.position+"</h5>");
                $("#team").append("<p>"+obj.bio+"</p>");            });
        }
    });
}

