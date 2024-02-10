const sidebar = document.getElementById("sidebar");
const navbar = document.getElementById("navbar");
const mainContainer = document.getElementById("main-container");

let isSidebaropen = false;

sidebar.style.left = "-21rem";
mainContainer.style.border = "1px solid red"
const openSidebar = () => {
    if (!isSidebaropen) {
        sidebar.style.left = 0
        mainContainer.style.marginLeft = "21rem"
        isSidebaropen = true
    } else {
        sidebar.style.left = "-21rem"
        mainContainer.style.marginLeft = "0"
        isSidebaropen = false
    }
}
