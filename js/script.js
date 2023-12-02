$(document).ready(function () {
    let countryDropdown = $('#country');
    let submitButton = $('#submitButton');

    // Populate the country dropdown dynamically from countries.js
    countries.forEach(function (country) {
        let option = $('<option></option>');
        option.val(country.code);
        option.text(country.name);
        countryDropdown.append(option);
    });

    // Function to check if all form requirements are met
    function checkFormRequirements() {
        let username = $('#username').val();
        let password = $('#password').val();
        let confirmPassword = $('#checkpsd').val();
        let termsCheckbox = $('#terms').prop('checked');
        let selectedCountry = $('#country').val();

        // Enable the submit button if all fields are filled
        submitButton.prop('disabled', (username && password.length >= 12 && confirmPassword === password && termsCheckbox && selectedCountry));
    }

    // Event listeners to check form requirements on input/change
    $('#username').on('input', checkFormRequirements);
    $('#password').on('input', checkFormRequirements);
    $('#checkpsd').on('input', checkFormRequirements);
    $('#terms').on('change', checkFormRequirements);
    $('#country').on('change', checkFormRequirements);

    // Event listener for form submission
    $('#registration').on('submit', function (event) {
        let username = $('#username').val();
        let selectedCountry = $('#country :selected').val();
		$('#welcomeMessage').append('<p>Welcome'+username+'! The country code you selected is'+selectedCountry+'</p>');

        event.preventDefault(); // Prevent form from submitting for demo purposes
    });
});