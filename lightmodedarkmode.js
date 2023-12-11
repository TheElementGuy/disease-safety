function toggleContrast() {
    let themeButton = document.getElementById("themeButton");
    if (themeButton.innerHTML == "dark_mode") {
        themeButton.innerHTML = "light_mode";
    } else {
        themeButton.innerHTML = "dark_mode"
    }
    let themeL3Elements = document.getElementsByClassName("w3-theme-l3");
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element.className = element.className.replace("w3-theme-l3", "w3-theme-d3");
    }
}