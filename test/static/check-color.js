function checkBackgroundColor(prop) {
    let backgroundColorBody = document.getElementsByTagName('body')[0]
    if(prop == 'default') {
        backgroundColorBody.className = ""
    }
    else if(prop == 'lightgreen') {
        backgroundColorBody.className = "main-lightgreen"
    }
    else if(prop == 'purple') {
        backgroundColorBody.className = "main-purple"
    }
    else {
        backgroundColorBody.className = "main-dark"
    }
}