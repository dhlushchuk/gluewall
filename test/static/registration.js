const validateEmail = (email) => {
    let pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}
const validateBirthday = () => {
    if(document.getElementById("date-day").value != "День" && document.getElementById("date-month").value != "Месяц" && document.getElementById("date-year").value != "Год") {
        return true
    }
    else {
        return false
    }
}
const registration = () => {
    let user = {
        email: document.getElementById("email").value,
        name: document.getElementById("username").value + " " + document.getElementById("lastname").value,
        birthday: document.getElementById("date-day").value + " " + document.getElementById("date-month").value + " " + document.getElementById("date-year").value,
        password: document.getElementById("password").value,
        background: "default",
        registrationDate: new Date()
    }
    if(validateEmail(user.email) && validateBirthday()) {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('sign', "true")
        return true
    }
    else {
        document.getElementById("err-message").className = 'error error-message-show'
        return false
    }  
}
window.onload = () => {
    let user = JSON.parse(localStorage.user)
    checkBackgroundColor(user.background)
}