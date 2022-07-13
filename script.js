const form = document.querySelector('#form');
const inputs = document.querySelectorAll('.control');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    inputs.forEach(function (input) {
        if (input.value === '') {
            input.parentElement.classList.add('show-error')
            input.nextElementSibling.classList.add('show-exclamation')
            input.nextElementSibling.nextElementSibling.classList.add('show-alert')
        } else {
            input.parentElement.classList.remove('show-error')
            input.nextElementSibling.classList.remove('show-exclamation')
            input.nextElementSibling.nextElementSibling.classList.remove('show-alert')
            if (input.type == 'email') {
                if (validateEmail(input.value)) {
                    input.parentElement.classList.remove('show-error')
                    input.nextElementSibling.classList.remove('show-exclamation')
                    input.nextElementSibling.nextElementSibling.classList.remove('show-alert')
                } else {
                    input.parentElement.classList.add('show-error')
                    input.nextElementSibling.classList.add('show-exclamation')
                    input.nextElementSibling.nextElementSibling.classList.add('show-alert')
                }
            }
        }
    })
})

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};