document.addEventListener('DOMContentLoaded', function () {
    let h2 = document.querySelector('h2');

    for (let i = 0; i < countries.length; i++) {
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'country';
        radio.id = countries[i].code; // Assuming countries have a 'code' property
        radio.value = countries[i].code; // Assuming countries have a 'code' property

        let label = document.createElement('label');
        label.for = countries[i].code; // Assuming countries have a 'code' property
        label.innerHTML = countries[i].name; // Assuming countries have a 'name' property

        h2.after(label);
        label.appendChild(radio);
    }

    let form = document.querySelector('#registration');
    let subBtn = document.getElementById('submit');

    let parMsg = document.createElement('p');

    subBtn.addEventListener('click', function (e) {
        e.preventDefault();
        let user = form.elements.uname.value;
        let checkRadio = document.getElementsByName('country');
        let country;

        for (let i = 0; i < checkRadio.length; i++) {
            if (checkRadio[i].checked) {
                country = checkRadio[i].value;
                break;
            }
        }

        let msg = `Welcome ${user}! The country code you selected is ${country}.`;
        parMsg.textContent = msg;
        form.appendChild(parMsg);
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

        let checkList = document.getElementsByName('country');
        let ok = false;
        let country;

        for (let i = 0; i < checkList.length; i++) {
            if (checkList[i].checked) {
                ok = true;
                country = checkList[i].value;
                break;
            }
        }

        if (!ok) {
            alert('Please check one of the radio buttons');
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
