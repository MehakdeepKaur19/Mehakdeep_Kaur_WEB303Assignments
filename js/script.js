$(document).ready(function () {
    // Populate the country dropdown dynamically
    var countryDropdown = $('#country');

    countries.forEach(function (countryName) {
        var option = $('<option></option>');
        option.val(countryName.substring(0, 2).toUpperCase()); // Using first two characters as country code
        option.text(countryName);
        countryDropdown.append(option);
    });

    // Function to check if all form requirements are met
    function checkFormRequirements() {
        var username = $('#username').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        var termsCheckbox = $('#termsCheckbox').prop('checked');
        var country = $('#country').val();

        var submitButton = $('#submitButton');
        
        // Enable the submit button if all requirements are met
        submitButton.prop('disabled', !(username && password.length >= 12 && confirmPassword === password && termsCheckbox && country));
    }

    // Event listeners to check form requirements on input/change
    $('#username').on('input', checkFormRequirements);
    $('#password').on('input', checkFormRequirements);
    $('#confirmPassword').on('input', checkFormRequirements);
    $('#termsCheckbox').on('change', checkFormRequirements);
    $('#country').on('change', checkFormRequirements);

    // Event listener for form submission
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault(); // Prevent form from redirecting to /register

        var welcomeMessage = $('#welcomeMessage');
        var username = $('#username').val();
        var selectedCountry = $('#country').val();

        // Display welcome message
        welcomeMessage.text('Welcome ' + username + '! The country code you selected is ' + selectedCountry);
        welcomeMessage.css('display', 'block');
    });
});
