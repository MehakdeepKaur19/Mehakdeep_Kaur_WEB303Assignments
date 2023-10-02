//Assignment 3
$(document).ready(function () 
{//displaying one function at a time
    json();
    //ajax();
});

//Function 1: using $.getJsom method
function json() 
{
    $.getJSON("team.json", function (data) 
    {//data will call the different objects of 'members' array
        $.each(data.members, function (index, obj) 
        {//obj will call member of second array in 'members' array
            //appending each data to div #team
            $("#team").append("<h2>" + obj.name + "</h2>");
            $("#team").append("<h5>" + obj.position + "</h5>");
            $("#team").append("<p>" + obj.bio + "</p>");
        });
    });
}

//Function2: using $.ajax function
function ajax() 
{
    $.ajax({
        type: "GET",
        url: "team.json",
        dataType: "json",
        beforeSend: function () //used to display the text before the loading of actual page
        {
            $("#team").text("Loading....");
        },
        error: function () //throws an error if there is an issue
        {
            $("#team").text("Error: Content could not be retrieved");
        },
        success: function (response) //contains the content that will run if the code is correct
        {
            setTimeout(function () //sets the time between disappering of the actual data and before data
            {
                $("#team").empty();//to empty out the before text
                $.each(response.members, function (index, obj) //response calls the 'members' array
                { //while obj calls components of each objects in the 'member array'
                    //appending each data to div #team
                    $("#team").append("<h2>" + obj.name + "</h2>");
                    $("#team").append("<h5>" + obj.position + "</h5>");
                    $("#team").append("<p>" + obj.bio + "</p>");
                });
            }, 3000); //setting the time to 3 seconds as this counts as 3000 millisecond
        }
    });
  }
  