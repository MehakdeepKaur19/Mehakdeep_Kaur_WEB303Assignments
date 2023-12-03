$(document).ready(function () {
//     let countryDropdown = $('#country');
//     let submitButton = $('#submitButton');

//     // Populate the country dropdown dynamically from countries.js
//     countries.forEach(function (country) {
//         let option = $('<option></option>');
//         option.val(country.code);
//         option.text(country.name);
//         countryDropdown.append(option);
//     });

//     // Function to check if all form requirements are met
//     function checkFormRequirements() {
//         let username = $('#username').val();
//         let password = $('#password').val();
//         let confirmPassword = $('#checkpsd').val();
//         let termsCheckbox = $('#terms').prop('checked');
//         let selectedCountry = $('#country').val();

//         // Enable the submit button if all fields are filled
//         submitButton.prop('disabled', (username && password.length >= 12 && confirmPassword === password && termsCheckbox && selectedCountry));
//     }

//     // Event listeners to check form requirements on input/change
//     $('#username').on('input', checkFormRequirements);
//     $('#password').on('input', checkFormRequirements);
//     $('#checkpsd').on('input', checkFormRequirements);
//     $('#terms').on('change', checkFormRequirements);
//     $('#country').on('change', checkFormRequirements);

//     // Event listener for form submission
//     $('#registration').on('submit', function (event) {
//         let username = $('#username').val();
//         let selectedCountry = $('#country :selected').val();
// 		$('#welcomeMessage').append('<p>Welcome'+username+'! The country code you selected is'+selectedCountry+'</p>');

//         event.preventDefault(); // Prevent form from submitting for demo purposes
//     });
// });
let h2 = document.querySelector('h2');

for(let i=0; i<countries.length; i++){
    let dropdown = document.createElement('input');
    // dropdown.type = 'select';
    dropdown.name = 'country';
    dropdown.id = countries[i];
    dropdown.value = countries[i];
    let label = document.createElement('label'); // I dont need label for my assignment 
    //(I must have a default option when i make the selection list)

    label.for =countries[i];
    label.innerHTML = countries[i];

    h2.after(label);
    label.appendChild(radio);   
}
let form = document.querySelector('#registration');
let subBtn = document.getElementById('submit');

let parMsg = document.createElement('p');
let elements = form.elements;


subBtn.addEventListener('click', function(e){
    e.preventDefault();
    let user = elements.uname.value;
    let checkRadio = document.getElementsByName('terms');
    let ok = false;
    let country;
    for(let i=0; i<checkRadio.length; i++){
        if(checkRadio[i].checked){
            ok = true;
            country = checkRadio[i].value;
        }
    }

    let msg = `Welcome ${user} ! The country code you selected is ${country} course.`
    parMsg.textContent = msg;
    form.appendChild(parMsg);
    
});
let uname = document.getElementById('username');
let pass = document.getElementById('password'); 
let repass = document.getElementById('checkpsd');

const validation = function() {
    if(uname.value == '') {
        alert("Please enter your username")
        uname.focus();
        return false;
    }
    if(pass.value == '' || pass.value.length < 5) {
        alert("Please enter a valid password larger then 5 letters")
        pass.focus();
        return false;
    }
    if(pass.value == '' || pass.value != repass.value) {
        alert("Please re-enter your password same as before")
        repass.focus();
        return false;
    }
    let checkList = document.getElementsByName('country');
    let ok = false;
    let country;
    for(let i=0; i<checkList.length; i++){
        if(checkList[i].selected){
            ok = true;
            country = checkList[i].value;
        }
    }
    // if(!ok){
    //     alert('Please check one of the radio buttons');
    //     return false;
    // }
    return true;
}


// we need our button to be disabled 
// validation will happen with any inputs


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
            // alert('This is a Demo, No Form is submited');
        }

    }
    inputs[i].addEventListener('change', checkValid);
}
});