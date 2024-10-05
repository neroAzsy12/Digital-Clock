// https://iconscout.com/unicons/free-line-icon-fonts/menu
const formatSwitchBtn = document.querySelector(".format-switch-btn")
formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");

    var formatValue = formatSwitchBtn.getAttribute("data-format");
    var meridiemDisplay = document.querySelector(".meridiem");

    if (formatValue === "12") {
        formatSwitchBtn.setAttribute("data-format", "24");
        meridiemDisplay.classList.toggle("active");

    } else {
        formatSwitchBtn.setAttribute("data-format", "12");
        meridiemDisplay.classList.remove("active");
    }
});

// Script for getting time
function clock() {
    var todayDate = new Date();

    var hours = todayDate.getHours();
    var minutes = todayDate.getMinutes();
    var seconds = todayDate.getSeconds();

    let meridiem = "AM";

    // set the meridiem (am or pm)
    if (hours >= 12) {
        meridiem = "PM";
    }

    var formatValue = formatSwitchBtn.getAttribute("data-format");
    if (formatValue === "12") {
        if (hours == 0) {
            hours = 12;
        } else if (hours > 12) {
            hours = hours % 12;
        }
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    
    document.querySelector(".meridiem").innerHTML = meridiem;

}

var updateClock = setInterval(clock, 1000);

// get the date
var today = new Date();
const dayNumber = today.getDate();
const dayName = today.toLocaleString("default", {weekday: "long"});
const monthName = today.toLocaleString("default", {month: "short"});

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;

// code for dot menu toggle for 12 or 24 hour format
const dotMenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotMenuBtn.addEventListener("click", () => {
    dotMenu.classList.toggle("active");
})

// if you click anywhere else, remove the menu
document.addEventListener("click", (e) => {
    if (e.target.id !== "active-menu") {
        dotMenu.classList.remove("active");
    }
});
