$(document).ready(function () {
    // Populate the country dropdown dynamically from countries.js
    for (let i = 0; i < countries.length; i++) {
        $('#country').append('<option value="' + countries[i].code + '">' + countries[i].name + '</option>');
    }

    let form = document.querySelector('#registration');
    let subBtn = document.getElementsByName('submit')[0]; // Use getElementsByName and select the first element

    let parMsg = document.createElement('p');

    subBtn.onclick = function (e) {
        e.preventDefault();
        let user = form.elements.username.value; // Corrected from uname to username
        let selectedCountry = form.elements.country.value;

        let msg = `Welcome ${user}! The country code you selected is ${selectedCountry}.`;
        parMsg.textContent = msg;
        form.appendChild(parMsg); // Corrected from append to appendChild
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

    subBtn.classList.remove('enabled');
subBtn.disabled = true;
subBtn.classList.add('disabled');

let inputs = document.querySelectorAll('#registration input');

for(let i = 0; i<inputs.length; i++) {
    let checkValid = function(){
        if(!validation()){
            subBtn.disabled = true;
            subBtn.classList.add('disabled');
        }
        else {
            subBtn.disabled = false;
            subBtn.classList.remove('disabled');
            alert('This is a Demo, No Form is submited');
        }

    }
    inputs[i].addEventListener('change', checkValid);
}
});
