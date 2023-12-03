document.addEventListener('DOMContentLoaded', function () {
    // Populate the country dropdown dynamically from countries.js
    for (let i = 0; i < countries.length; i++) {
        $('#country').append('<option value="' + countries[i].code + '">' + countries[i].name + '</option>');
    }

    let form = document.querySelector('#registration');
    let subBtn = document.getElementById('submit');

    let parMsg = document.createElement('p');

    subBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let user = form.elements.username.value; // Corrected from uname to username
        let selectedCountry = form.elements.country.value;

        let msg = `Welcome ${user}! The country code you selected is ${selectedCountry}.`;
        parMsg.textContent = msg;
        form.appendChild(parMsg);
    });

    let username = form.elements.username;
    let password = form.elements.password;
    let confirmPassword = form.elements.checkpsd;

    const validation = function () {
        if (username.value === '') {
            alert("Please enter your username");
            username.focus();
            return false;
        }

        if (password.value === '' || password.value.length < 12) {
            alert("Please enter a valid password of at least 12 characters");
            password.focus();
            return false;
        }

        if (password.value !== confirmPassword.value) {
            alert("Please make sure the passwords match");
            confirmPassword.focus();
            return false;
        }

        let selectedCountry = form.elements.country.value;

        if (!selectedCountry) {
            alert('Please select a country from the dropdown list');
            return false;
        }

        return true;
    };

    subBtn.disabled = true;

    let inputs = form.elements;

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', function () {
            if (!validation()) {
                subBtn.disabled = true;
            } else {
                subBtn.disabled = false;
            }
        });
    }
});
