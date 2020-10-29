var menuItems = document.querySelector(".nav-link");
menuItems.style.maxHeight = "0px";
function toggleMenu(){
    if(menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "100%";
    }
    else
    {
        menuItems.style.maxHeight = "0px";
    }
}
