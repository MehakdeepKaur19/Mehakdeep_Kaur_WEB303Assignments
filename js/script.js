$(document).ready(function () {
    const countryDropdown = $('#country');

    // Populate the country dropdown dynamically from countries.js
    countries.forEach(function (countryName) {
        const option = $('<option></option>');
        option.val(countryName);  // You can use country code as the value if needed
        option.text(countryName);
        countryDropdown.append(option);
    });

    // Function to check if all form requirements are met
    function checkFormRequirements() {
        const username = $('#username').val();
        const password = $('#password').val();
        const confirmPassword = $('#checkpsd').val();
        const termsCheckbox = $('#terms').prop('checked');
        const selectedCountry = $('#country').val();

        const submitButton = $('#submitButton');

        // Enable the submit button if all requirements are met
        submitButton.prop('disabled', !(username && password.length >= 12 && confirmPassword === password && termsCheckbox && selectedCountry));
    }

    // Event listeners to check form requirements on input/change
    $('#username').on('input', checkFormRequirements);
    $('#password').on('input', checkFormRequirements);
    $('#checkpsd').on('input', checkFormRequirements);
    $('#terms').on('change', checkFormRequirements);
    $('#country').on('change', checkFormRequirements);

    // Event listener for form submission
    $('#registration').on('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting for demo purposes

        const username = $('#username').val();
        const selectedCountry = $('#country :selected').text(); // Get the selected country text

        // Redirect to registration.html with parameters
        window.location.href = `registration.html?username=${encodeURIComponent(username)}&country=${encodeURIComponent(selectedCountry)}`;
    });
});
