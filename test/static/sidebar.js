let sidebar = document.getElementById("left-sidebar")
let isShowed = false
const showSidebar = () => {
    if(isShowed){
        sidebar.className = "sidebar"
        return isShowed = false
    } 
    else {
        sidebar.className = "sidebar sidebar-show"
        return isShowed = true
    }
}
menu.onclick = showSidebar