$(document).ready(function () {
    let countryDropdown = document.getElementById('country');
    countries.forEach(function (country) {
        let option = document.createElement('option');
        option.value = country.code;
        option.text = country.name;
        countryDropdown.appendChild(option);
    });

    let form = document.getElementById('registration');
    let subBtn = document.getElementById('submit');
    let welcomeMessage = document.getElementById('welcomeMessage');
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let selectedCountry = countryDropdown.options[countryDropdown.selectedIndex].value;
    let confirmPassword = document.getElementById('confirmPassword');
    let termsCheckbox = document.getElementById('terms');

    const validation = function () {
        if (username.value == '') {
            alert("Please enter username");
            username.focus();
            return false;
        }
        if (password.value == '' || password.value.length < 12) {
            alert("Please enter a valid password larger than 12 letters");
            password.focus();
            return false;
        }
        if (password.value == '' || password.value != confirmPassword.value) {
            alert("Please re-enter your password same as before");
            confirmPassword.focus();
            return false;
        }
        if (!termsCheckbox.checked) {
            alert("You must agree to the Terms and Conditions.");
            termsCheckbox.focus();
            return false;
        }
        if (selectedCountry === '') { // Fix: Check if selectedCountry is empty
            alert("Please select the country");
            countryDropdown.focus(); // Fix: Set focus on countryDropdown
            return false;
        }
        return true;
    };

    subBtn.classList.remove('enabled');
    subBtn.disabled = true;
    subBtn.classList.add('disabled');

    let inputs = document.querySelectorAll('#registration input');

    for (let i = 0; i < inputs.length; i++) {
        let checkValid = function () {
            if (!validation()) {
                subBtn.disabled = true;
                subBtn.classList.add('disabled');
            } else {
                subBtn.disabled = false;
                subBtn.classList.remove('disabled');
                subBtn.classList.add('enabled');
            }
        };
        inputs[i].addEventListener('change', checkValid);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let username = document.getElementById('username').value;
        let selectedCountry = countryDropdown.options[countryDropdown.selectedIndex].value;

        welcomeMessage.innerHTML = `<p>Welcome ${username}! The country code you selected is ${selectedCountry}</p>`;
    });
});
