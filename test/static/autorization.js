let autorization = () => {
    let user = JSON.parse(localStorage.user)
    if(document.getElementById("email-sign").value == user.email && document.getElementById("password-sign").value == user.password){
        localStorage.sign = "true"
        return true
    }
    else {
        document.getElementById("error-message").className = 'error error-message-show'       
        return false
    } 
}
window.onload = () => {
    let user = JSON.parse(localStorage.user)
    checkBackgroundColor(user.background)
}