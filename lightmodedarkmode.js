function toggleContrast() {
    if (!window.localStorage.getItem("darkMode") == "true") {
        document.getElementById("theme-button").innerHTML = "light_mode";
        window.localStorage.setItem("darkMode", "true");
    } else {
        window.localStorage.setItem("darkMode", "false")
        document.getElementById("theme-button").innerHTML = "dark_mode";
    }
    let allElements = document.querySelectorAll("*");
    for (let i = 0; i < allElements.length; i++) {
        const classes = allElements[i].className;
        if (classes.includes("w3-theme-l3")) {
            allElements[i].className = classes.replace("w3-theme-l3", "w3-theme-d3")
        } else if (classes.includes("w3-theme-d3")) {
            allElements[i].className = classes.replace("w3-theme-l3", "w3-theme-l3")
        }
    }
}