function toggleContrast() {
    if (window.localStorage.getItem("darkMode") == "false") {
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
            allElements[i].className = classes.replace("w3-theme-d3", "w3-theme-l3")
        } else if (classes.includes("w3-theme-l5")) {
            allElements[i].className = classes.replace("w3-theme-l5", "w3-theme-d5")
        } else if (classes.includes("w3-theme-d5")) {
            allElements[i].className = classes.replace("w3-theme-d5", "w3-theme-l5")
        } else if (classes.includes("w3-theme-l4")) {
            allElements[i].className = classes.replace("w3-theme-l4", "w3-theme-d4")
        } else if (classes.includes("w3-theme-d4")) {
            allElements[i].className = classes.replace("w3-theme-d4", "w3-theme-l4")
        }else if (classes.includes("w3-theme-l1")) {
            allElements[i].className = classes.replace("w3-theme-l1", "w3-theme-d1")
        } else if (classes.includes("w3-theme-d1")) {
            allElements[i].className = classes.replace("w3-theme-d1", "w3-theme-l1")
        } else if (classes.includes("w3-theme-l2")) {
            allElements[i].className = classes.replace("w3-theme-l2", "w3-theme-d2")
        } else if (classes.includes("w3-theme-d2")) {
            allElements[i].className = classes.replace("w3-theme-d2", "w3-theme-l2")
        } else if (classes.includes("w3-hover-black")) {
            allElements[i].className = classes.replace("w3-hover-black", "w3-hover-white")
        } else if (classes.includes("w3-hover -white")) {
            allElements[i].className = classes.replace("w3-hover-white", "w3-hover-black")
        }
    }
}