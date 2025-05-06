const themeSelector = document.querySelector("select");

let logo = document.querySelector('img');

themeSelector.addEventListener('change', changeTheme);


function changeTheme() {

    let current = themeSelector.value;

    if (current == "dark" ){
        
        document.body.className = "dark"
        logo.src = "byui-logo_white.png";
        
    }

    else {

        document.body.classList.remove("dark");
        logo.src = "byui-logo_blue.webp"
    }
}



