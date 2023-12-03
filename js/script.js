$(document).ready(function() {
    // Populate the country dropdown dynamically from countries.js
    for (let i = 0; i < countries.length; i++) {
        $('#country').append('<option value="' + countries[i].code + '">' + countries[i].name + '</option>');
    }

    let form = document.querySelector('#registration');
    let subBtn = document.getElementById('submit');

    let parMsg = document.createElement('p');

    subBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let user = form.elements.uname.value;
        let selectedCountry = form.elements.country.value;

        let msg = `Welcome ${user}! The country code you selected is ${selectedCountry}.`;
        parMsg.textContent = msg;
        form.append(parMsg);
    });

    let uname = form.elements.username;
    let pass = form.elements.password;
    let repass = form.elements.checkpsd;

    const validation = function () {
        if (uname.value === '') {
            alert("Please enter your username");
            uname.focus();
            return false;
        }

        if (pass.value === '' || pass.value.length < 5) {
            alert("Please enter a valid password larger than 5 characters");
            pass.focus();
            return false;
        }

        if (pass.value === '' || pass.value !== repass.value) {
            alert("Please re-enter your password same as before");
            repass.focus();
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
        inputs[i].addEventListener('change', function () {
            if (!validation()) {
                subBtn.disabled = true;
            } else {
                subBtn.disabled = false;
            }
        });
    }
});
