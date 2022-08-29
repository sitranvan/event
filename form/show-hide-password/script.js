const togglePassword = document.querySelector('.toggle')
togglePassword.addEventListener('click', function(e) {

    const input = this.previousElementSibling;
    const inputType = input.getAttribute('type')
    if (inputType === 'password') {
        input.setAttribute('type', 'text');
        // input.type = 'text';

    } else {
        input.setAttribute('type', 'password');
    }
})