const sidebar = document.getElementById("sidebar");
const navbar = document.getElementById("navbar");
const mainContainer = document.getElementById("main-container");

let isSidebaropen = false;

// sidebar.style.left = "-21rem";
// sidebar.style.display = "none";
mainContainer.style.marginLeft = "21rem"
// const openSidebar = () => {
//     if (!isSidebaropen) {
//         sidebar.style.left = 0
//         mainContainer.style.marginLeft = "21rem"
//         isSidebaropen = true
//     } else {
//         sidebar.style.left = "-21rem"
//         mainContainer.style.marginLeft = "0"
//         isSidebaropen = false
//     }
// }

const sidebarItems = document.querySelectorAll(".fs-sidebar");
const sidebarTexts = document.querySelectorAll(".sidebar-nav-text");

const openSidebar = () => {
    if (!isSidebaropen) {
        sidebarItems.forEach((sidebarItem) => {
            sidebarItem.style.flexDirection = "row"
        });
        sidebarTexts.forEach((sidebarText) => {
            sidebarText.style.fontSize = ".65rem"
        });
        isSidebaropen = true
    } else {
        sidebarItems.forEach((sidebarItem) => {
            sidebarItem.style.flexDirection = "column"
        });
        sidebarTexts.forEach((sidebarText) => {
            sidebarText.style.fontSize = "18px"
        });
        isSidebaropen = false
    }
}
