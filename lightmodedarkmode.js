function toggleContrast() {
    let themeButton = document.getElementById("themeButton");
    if (themeButton.innerHTML == "dark_mode") {
        themeButton.innerHTML = "light_mode";
    } else {
        themeButton.innerHTML = "dark_mode"
    }
    let themeL3Elements = document.getElementsByClassName("w3-theme-l3");
    let themeD3Elements = document.getElementsByClassName("w3-theme-d3");
    let themeL5Elements = document.getElementsByClassName("w3-theme-l5");
    let themeD5Elements = document.getElementsByClassName("w3-theme-d5");
    for (let i = 0; i < themeL3Elements.length; i++) {
        const element = themeL3Elements[i];
        element.className = element.className.replace("w3-theme-l3", "w3-theme-d3");
    }
    for (let i = 0; i < themeD3Elements.length; i++) {
        const element = themeD3Elements[i];
        element.className = element.className.replace("w3-theme-d3", "w3-theme-l3");
    }
    for (let i = 0; i < themeL5Elements.length; i++) {
        const element = themeL5Elements[i];
        element.className = element.className.replace("w3-theme-l5", "w3-theme-d5");
    }
    for (let i = 0; i < themeD5Elements.length; i++) {
        const element = themeD5Elements[i];
        element.className = element.className.replace("w3-theme-d5", "w3-theme-l5");
    }
}