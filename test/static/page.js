let user = JSON.parse(localStorage.getItem('user'))
let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let backgroundColorBody = document.getElementsByTagName('body')[0]
let edit = document.getElementsByClassName('username-edit')[0]
let save = document.getElementsByClassName('username-save')[0]
const editName = () =>{
    edit.className = "username-edit username-edit-hide"
    save.className = "username-save username-save-show"
}
const saveChanges = () => {
    edit.className = "username-edit"
    save.className = "username-save"
    user.name = firstname.value + " " + lastname.value
    localStorage.setItem('user', JSON.stringify(user))  
}
buttonEdit.addEventListener("click", editName)
buttonSave.addEventListener("click", saveChanges)
const changeColor = (color) => {
    backgroundColorBody.className = "main-" + `${color}`
    user.background = color
    localStorage.setItem('user', JSON.stringify(user))  
}
const signout = () => {
    localStorage.setItem('sign', "false")
    user.background = "default"
    localStorage.setItem('user', JSON.stringify(user))
}
logout.onclick = signout
const getRegistrationDate = (date) => {
    return (new Date().getDate()) - (new Date(date).getDate())
}
window.onload = () => { 
    document.getElementById('username').innerHTML = user.name
    firstname.value = user.name.split(" ")[0]
    lastname.value = user.name.split(" ")[1]
    document.getElementById('birthday-date').innerHTML = "Дата рождения: " + user.birthday
    document.getElementById('registration-date').innerHTML = "Дней с момента регистрации: " + getRegistrationDate(user.registrationDate)
    checkBackgroundColor(user.background)
}