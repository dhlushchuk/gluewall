const checkAutorization = () => {
    if(localStorage.getItem('sign') == 'true'){
        document.getElementById("signification").href = '../templates/page.html'
    }
    else {
        document.getElementById("signification").href = '../templates/autorization.html'
    }
}
signification.addEventListener("click", checkAutorization)
