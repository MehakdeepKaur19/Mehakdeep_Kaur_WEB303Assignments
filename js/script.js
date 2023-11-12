$(document).ready(function () {
    let $table = $('<table/>');
    $('body').append($table);

    $('table').after('<div id="filterButtonsContainer"/>');
    $('#filterButtonsContainer').append('<button id="filterAM">A - M (0)</button>');
    $('#filterButtonsContainer').append('<button id="filterNZ">N - Z (0)</button>');
    $('h1').after('<input/>');
    $('input').attr('id', 'searchInput'); // Corrected the input id

    // add thead and tbody to the table
    $('table').append('<thead/>');
    $('table').append('<tbody/>');
    $('table').addClass('tb1');

    // create the header row
    let $headerRow = $('<tr/>').addClass('headerRow');
    // add cells to the header row
    $headerRow.append($('<td/>').text('Name'));
    $headerRow.append($('<td/>').text('Character'));
    $headerRow.append($('<td/>').text('Age'));
    $headerRow.append($('<td/>').text('Gender'));
    $headerRow.append($('<td/>').text('Hometown'));

    // add header row to thead
    $('thead').append($headerRow);

    // Update the success function for the AJAX request
    $.ajax({
        type: 'get',
        url: 'info.json',
        error: function () {
            $('.tb1').empty().append('<h1> File not found </h1>');
        },
        success: function (response) {
            // Your existing code...
            $.each(response, function (index, value) {
                // create row
                let $row = $('<tr/>').addClass('row');
                // add td to the row
                $row.append($('<td></td>').text(value.name));
                $row.append($('<td></td>').text(value.character)); // Corrected the property name
                $row.append($('<td></td>').text(value.age));
                $row.append($('<td id="gender"></td>').text(value.gender)); // Corrected the property name
                $row.append($('<td></td>').text(value.hometown)); // Corrected the property name

                // add row to the table
                $('table').append($row);
                let $gender = $('tbody #gender');

            });

            // Add event listener for the search input
            $('#searchInput').on('input', function () {
                searchCharacters($(this).val());
            });

            // Add event listeners for filter buttons
            $('#filterAM').on('click', function () {
                filterCharacters('A', 'M');
            });

            $('#filterNZ').on('click', function () {
                filterCharacters('N', 'Z');
            });
        }
    });

    // Add the searchCharacters function
    function searchCharacters(searchTerm) {
        $('tbody tr').each(function () {
            let firstName = $(this).find('td:first').text();
            let containsTerm = firstName.toLowerCase().includes(searchTerm.toLowerCase());

            if (containsTerm) {
                $(this).addClass('highlighted');
            } else {
                $(this).removeClass('highlighted');
            }
        });
    }

    // Add the filterCharacters function
    function filterCharacters(startRange, endRange) {
        var tableRows = $('tbody tr');

        tableRows.each(function () {
            var lastName = $(this).find('td:nth-child(2)').text();
            var firstLetter = lastName.charAt(0).toUpperCase();
            var isInRange = firstLetter >= startRange && firstLetter <= endRange;

            $(this).toggle(isInRange);
        });

        updateFilterButtonCount();
    }

    // Add the updateFilterButtonCount function
    function updateFilterButtonCount() {
        var countAM = $('tbody tr:visible').filter(function () {
            var lastName = $(this).find('td:nth-child(2)').text();
            var firstLetter = lastName.charAt(0).toUpperCase();
            return firstLetter >= 'A' && firstLetter <= 'M';
        }).length;

        var countNZ = $('tbody tr:visible').filter(function () {
            var lastName = $(this).find('td:nth-child(2)').text();
            var firstLetter = lastName.charAt(0).toUpperCase();
            return firstLetter >= 'N' && firstLetter <= 'Z';
        }).length;

        $('#filterAM').text('A - M (' + countAM + ')');
        $('#filterNZ').text('N - Z (' + countNZ + ')');
    }
});
