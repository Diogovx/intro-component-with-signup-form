const button = document.querySelector('button').addEventListener('click', e =>{
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const Fname = document.querySelector('#Fname')
    const Lname = document.querySelector('#Lname')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    
    if(Fname.value.trim() === ''){
        const checkError = Fname.parentElement.parentElement
        checkError.querySelector('small').style.display = 'block'
        checkError.querySelector('img').style.visibility = 'initial'
        checkError.querySelector('.inputBlock').style.border = '1px solid var(--Red)'
    }
    if(Lname.value.trim() === ''){
        const checkError = Lname.parentElement.parentElement
        checkError.querySelector('small').style.display = 'block'
        checkError.querySelector('img').style.visibility = 'initial'
        checkError.querySelector('.inputBlock').style.border = '1px solid var(--Red)'
    }
    if(email.value.trim() === ''){
        const checkError = email.parentElement.parentElement
        checkError.querySelector('small').style.display = 'block'
        checkError.querySelector('img').style.visibility = 'initial'
        checkError.querySelector('.inputBlock').style.border = '1px solid var(--Red)'
        email.placeholder = 'email@example/com'
    }
    if(password.value.trim() === ''){
        const checkError = password.parentElement.parentElement
        checkError.querySelector('small').style.display = 'block'
        checkError.querySelector('img').style.visibility = 'initial'
        checkError.querySelector('.inputBlock').style.border = '1px solid var(--Red)'
    }
    
}