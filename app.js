const pass = document.querySelector('#password')
const confirm = document.querySelector('#confirm')
const submit = document.querySelector('button')
const check = document.querySelector('.check')

const warn = document.createElement('p')
warn.innerText = 'Passwords do not match'
warn.classList.add('match')

submit.addEventListener('click', (e) => {
    if (pass.value !== confirm.value) {
        e.preventDefault
        pass.classList.add('error')
        confirm.classList.add('error')
        check.appendChild(warn)
    } else if (warn.isConnected) {
        check.removeChild(warn);
        pass.classList.remove('error')
        confirm.classList.remove('error')

    }
})
