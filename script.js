/*
    ASSIGNMENT 5
*/
$(document).ready(function()
{
    // your code here
    class ContentItem 
    {
        //initializing content items
        id;
        name;
        des;
        category;

        //constructor
        constructor(id,name,des,category) 
        {
            this.id = id;
            this.name = name;
            this.des = des;
            this.category = category;
        }

        //updating contents
        updateContentItem(id,name,des,category) 
        {
            //checking the conditions
            if((this.id == id)&&(name != null)&&(des != null)&&(category != null))
            {
                this.name = name;
                this.des = des;
                this.category = category;
            }
        }

        //ToString method
        toString() 
        {
            return `<div id="content-item-${this.id}" class="content-item-wrapper">
                        <h2>${this.name}</h2>
                        <p>${this.des}</p>
                        <div>${this.category}</div>
                    </div>`;
        }
    }
    
    //giving div items in array form
    let contentItems=
        [
            new ContentItem(0,'The Godfather','The Godfather Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter','Crime'),
            new ContentItem(1,'Frozen','Frozen is a 2013 American animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures.','Animation adventure comedy'),
            new ContentItem(2,'Beauty and the Beast','Beauty and the Beast is a 2017 American musical romantic fantasy film directed by Bill Condon and produced by David Hoberman and Todd Lieberman, from the screenplay by Stephen Chbosky and Evan Spiliotopoulos.','Romance'),
            new ContentItem(3,'Cinderella','Cinderella (2021), a live-action film musical starring Camila Cabello as Cinderella, Idina Menzel as Cinderella stepmother, Nicholas Galitzine as the Prince, and Billy Porter as the Fairy Godmother.','Fantasy'),
            new ContentItem(4,'Anaballe', 'Annabelle is a 2014 American supernatural horror film directed by John R. Leonetti, written by Gary Dauberman and produced by Peter Safran and James Wan.','Horror')
        ];
    //Looping each content to string menthod
    contentItems.forEach(function(item) 
    {
        let contentItemEach = item.toString();
        $("#content-item-list").append(contentItemEach);
    });

    // Update the theme name in the page
    $('#theme-name').text('Disney Theme');

    // Apply CSS styles to content-item-wrapper using jQuery
    $('.content-item-wrapper').css(
        {
            'border':'3px solid black',
            'width':'75%',
            'padding':'12px',
            'margin':'8px 2px'
        }
    );

    //Creating the "Update Successfully" button
    const success='<button>Update Successfully</button>';
    $(success).click(function() 
    {
        //updating first item
        contentItems[0].updateContentItem(0,'Snow White','A princess and 7 dwarfs.','Betrayal');

        //calling toString function for first
        $('#content-item-0').html(contentItems[0].toString());
    });

    const fail ='<button>Update Unsuccessfully</button>';
    //Creating the "Update Unsuccessfully" button
    $(fail).click(function() 
    {
        //unsuccessfully trying to update first item
        contentItems[0].updateContentItem(1, 'Updated Title', 'Updated Description', 'Updated Category');

        //trying to unsuccessfully updating
        $('#content-item-0').html(contentItems[0].toString());
    });

    // Append the buttons to the page
    $('#content').append(success);
    $('#content').append(fail);
});