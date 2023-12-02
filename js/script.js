$(document).ready(function () {
    const countryDropdown = $('#country');
    const submitButton = $('#submitButton');

    // Populate the country dropdown dynamically from countries.js
    countries.forEach(function (country) {
        const option = $('<option></option>');
        option.val(country.code);
        option.text(country.name);
        countryDropdown.append(option);
    });

    // Function to check if all form requirements are met
    function checkFormRequirements() {
        const username = $('#username').val();
        const password = $('#password').val();
        const confirmPassword = $('#checkpsd').val();
        const termsCheckbox = $('#terms').prop('checked');
        const selectedCountry = $('#country').val();

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
        const username = $('#username').val();
        const selectedCountry = $('#country :selected').val();
		$('#welcomeMessage').append('<p>Welcome'+$username+'! The country code you selected is'+selectedCountry+'</p>');

        event.preventDefault(); // Prevent form from submitting for demo purposes
    });
});