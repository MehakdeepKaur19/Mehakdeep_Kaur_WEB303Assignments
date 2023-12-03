$(document).ready(function () {
    let countryDropdown = document.getElementById('country');
            countries.forEach(function (country) {
                let option = document.createElement('option');
                option.value = country.code;
                option.text = country.name;
                countryDropdown.appendChild(option);
            });

            let form = document.getElementById('registration');
            let submitButton = document.getElementById('submit');
            let welcomeMessage = document.getElementById('welcomeMessage');

            function checkFormRequirements() {
                let username = document.getElementById('username').value;
                let password = document.getElementById('password').value;
                let confirmPassword = document.getElementById('confirmPassword').value;
                let termsCheckbox = document.getElementById('terms').checked;
                let selectedCountry = countryDropdown.value;

                submitButton.disabled = (username && password.length >= 12 && confirmPassword === password && termsCheckbox && selectedCountry);
            }

            form.addEventListener('submit', function (event) {
                event.preventDefault();
                let username = document.getElementById('username').value;
                let selectedCountry = countryDropdown.options[countryDropdown.selectedIndex].text;

                welcomeMessage.innerHTML = `<p>Welcome ${username}! The country code you selected is ${selectedCountry}</p>`;
            });

            form.addEventListener('input', checkFormRequirements);
        });